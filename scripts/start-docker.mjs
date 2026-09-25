import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { spawn, spawnSync } from "node:child_process";
import { createServer, request } from "node:http";
import { connect } from "node:net";
import path from "node:path";

const root = process.cwd();
const stateDir = path.join(root, ".wrangler");
const marker = path.join(stateDir, "aesivia-applied-migrations.json");
mkdirSync(stateDir, { recursive: true });
const applied = new Set(existsSync(marker) ? JSON.parse(readFileSync(marker, "utf8")) : []);
const migrations = readdirSync(path.join(root, "drizzle")).filter((name) => name.endsWith(".sql")).sort();

for (const migration of migrations) {
  if (applied.has(migration)) continue;
  const result = spawnSync(process.execPath, ["--import","./scripts/sites-env.mjs","./node_modules/wrangler/bin/wrangler.js","d1","execute","DB","--local","--config","dist/server/wrangler.json","--persist-to",".wrangler/state","--file",`drizzle/${migration}`], { cwd: root, stdio: "inherit" });
  if (result.status !== 0) process.exit(result.status ?? 1);
  applied.add(migration);
  writeFileSync(marker, JSON.stringify([...applied], null, 2));
}

const app = spawn(process.execPath, ["./scripts/run-framework.mjs","dev","--hostname","127.0.0.1","--port","5173"], { cwd: root, stdio: "inherit" });

const proxy = createServer((incoming, outgoing) => {
  const upstream = request({ hostname: "127.0.0.1", port: 5173, method: incoming.method, path: incoming.url, headers: incoming.headers }, (response) => {
    outgoing.writeHead(response.statusCode ?? 502, response.headers);
    response.pipe(outgoing);
  });
  upstream.on("error", () => {
    if (!outgoing.headersSent) outgoing.writeHead(503, { "content-type": "text/plain" });
    outgoing.end("AESIVIA is starting. Please refresh in a moment.");
  });
  incoming.pipe(upstream);
});

proxy.on("upgrade", (incoming, socket, head) => {
  const upstream = connect(5173, "127.0.0.1", () => {
    const headers = Object.entries(incoming.headers).map(([key, value]) => `${key}: ${value}`).join("\r\n");
    upstream.write(`${incoming.method} ${incoming.url} HTTP/${incoming.httpVersion}\r\n${headers}\r\n\r\n`);
    if (head.length) upstream.write(head);
    socket.pipe(upstream).pipe(socket);
  });
  upstream.on("error", () => socket.destroy());
});

proxy.listen(8787, "0.0.0.0", () => console.log("AESIVIA Docker preview: http://localhost:8787"));
app.on("exit", (code) => { proxy.close(); process.exit(code ?? 1); });
for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => { proxy.close(); app.kill(signal); });
