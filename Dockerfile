FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json .npmrc ./
RUN npm ci --workspaces=false --include=dev --include=optional --no-audit --no-fund
COPY . .
RUN npm run build

FROM node:22-bookworm-slim AS runtime
WORKDIR /app
ENV NODE_ENV=development
COPY --chown=node:node --from=build /app /app
RUN mkdir -p /app/.vinext /app/.wrangler && chown -R node:node /app/.vinext /app/.wrangler
USER node
EXPOSE 8787
CMD ["npm", "run", "start:docker"]
