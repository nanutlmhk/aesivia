import { getDb } from "../../../db";
import { characters } from "../../../db/schema";
import { getChatGPTUser } from "../../chatgpt-auth";

const allowedPronouns = new Set(["they/them", "she/her", "he/him"]);
const allowedAges = new Set(["35–44", "45–54", "55–64", "65–74"]);
const allowedPalettes = new Set(["dawn", "sun", "earth", "moon"]);

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "Sign in required" }, { status: 401 });
  const body = (await request.json()) as Record<string, unknown>;
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const pronouns = typeof body.pronouns === "string" ? body.pronouns : "";
  const ageBand = typeof body.ageBand === "string" ? body.ageBand : "";
  const context = typeof body.context === "string" ? body.context.trim() : "";
  const temperament = typeof body.temperament === "string" ? body.temperament.trim() : "";
  const palette = typeof body.palette === "string" ? body.palette : "";

  if (!name || name.length > 40 || !allowedPronouns.has(pronouns) || !allowedAges.has(ageBand) || !context || context.length > 80 || !temperament || temperament.length > 40 || !allowedPalettes.has(palette)) {
    return Response.json({ error: "Invalid character details" }, { status: 400 });
  }

  const db = getDb();
  await db.insert(characters).values({ userId: user.userId, name, pronouns, ageBand, context, temperament, palette }).onConflictDoUpdate({
    target: characters.userId,
    set: { name, pronouns, ageBand, context, temperament, palette, updatedAt: new Date().toISOString() },
  });
  return Response.json({ ok: true });
}
