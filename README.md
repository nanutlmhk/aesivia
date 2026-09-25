# AESIVIA

*Every journey changes a life.*

Day 1 delivers the front door of AESIVIA: loading, landing, account access, character creation, and an intentional pause before the Patient Journey begins.

## Day 1 boundary

Included: loading and landing, create-account and login paths using dispatch-owned ChatGPT sign-in, persistent character creation, the character-ready pause screen, and responsive keyboard-accessible presentation.

Not included: disease assignment, symptoms, simulation time, hospital selection, clinical gameplay, or scoring.

## Run with Docker

```sh
docker compose up --build
```

Open `http://localhost:8787`. The image verifies a production build, then the container applies pending local D1 migrations and starts the local application mode on port 8787. Local account access uses the starter's simulated ChatGPT identity; hosted authentication is provided by the Sites dispatcher.

Stop with `docker compose down`. To also reset local Docker data, run `docker compose down --volumes`.

## Local development

```sh
npm ci
npm run db:generate
npm run build
npm run dev
```

The portable local preview provides a simulated ChatGPT sign-in route. Production authentication remains owned by the hosting dispatcher; AESIVIA never receives or stores account passwords.

## Safety boundary

AESIVIA is a fictional game simulation. It is not medical advice, clinical decision support, or a validated predictor of real outcomes.

## Artwork

The landing-page pixel-art hospital scene is an original generated asset created for AESIVIA.
