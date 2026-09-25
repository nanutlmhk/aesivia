# AESIVIA Vision

**Status:** Design baseline; Day 1 front-door milestone approved 26 September 2026
**Phase:** Day 1 implementation authorized only through character confirmation; clinical gameplay remains in design review
**Tagline direction:** *Every journey changes a life.*

## 1. Product vision

AESIVIA is a healthcare-world simulation presented as a 2D pixel-art role-playing game. The player inhabits a person, not a diagnosis. A hidden health condition evolves over time while the player moves through ordinary life and a functioning healthcare system. People, places, queues, handoffs, information, resources, decisions, delays, exceptions, and clinical interventions combine to shape a journey whose outcome is uncertain.

The game should make a complex system emotionally legible through lived experience. It should not feel like a lecture, a flowchart with character art, or a quiz about medicine.

## 2. Core metaphor

The hospital is a living world. Clinical and operational processes are its physics.

- Corridors and departments are real spaces with travel and access costs.
- Staff are actors with responsibilities, workload, knowledge, and competing demands.
- Information is something created, transmitted, interpreted, delayed, repeated, or lost.
- Time is a resource that changes risk.
- The patient has incomplete knowledge and limited control.
- The same patient can experience materially different journeys in different hospital operating models.

## 3. Long-term universe

AESIVIA is intended to support two perspectives on one simulation core:

1. **Patient Journey RPG:** Create a person, experience an unknown and evolving condition, seek help, enter healthcare, make decisions, and attempt to survive or recover.
2. **Hospital Journey management simulation:** Operate a hospital, coordinate people and resources, and protect many patients simultaneously.

Both perspectives must eventually observe and affect the same underlying entities, events, workflows, and clinical state. The patient perspective exposes lived consequences; the hospital perspective exposes system-level trade-offs. Hospital Journey is a future mode, not part of v0.1.

## 4. v0.1 product question

Can a 10–20 minute patient-centered RPG experience make the consequences of hospital workflow and information flow understandable, replayable, and worth discussing without turning healthcare into a simplistic morality play?

The comparison is an experiment, not a predetermined verdict:

> Given the same patient, hidden disease trajectory, and stochastic seed, how can two credible hospital operating models produce different journeys and outcomes?

## 5. Design principles

1. **The patient is the character, not the disease.** Identity, fears, obligations, communication, and agency matter.
2. **The disease is hidden.** The player first experiences symptoms. Diagnosis must emerge from assessment and evidence.
3. **The hospital functions as a system.** Gameplay occurs in a world of interacting people, places, resources, and information—not a sequence of menu screens.
4. **Time has consequences.** Waiting, movement, escalation, and treatment timing can alter risk.
5. **Information has a lifecycle.** A fact can be unknown, observed, documented, routed, acknowledged, acted on, superseded, or lost.
6. **Player decisions are meaningful but bounded.** The player can communicate, consent, seek help, move when able, and prioritize personal needs; the patient cannot command the hospital or diagnose themselves with certainty.
7. **Outcomes remain probabilistic.** Good processes improve opportunities; they do not guarantee recovery. Failures can occur in either hospital.
8. **Comparison must be fair.** Hospital A is believable, not a strawman. Hospital B is coordinated, not magical. Comparable capability and resources are the default.
9. **System ideas emerge through play.** Overlays and debriefs may explain what happened after the player experiences it.
10. **Game first, evidence-aware.** v0.1 must be understandable and compelling. Later versions may support validation or analytical overlays.
11. **Respect the subject.** Deterioration and death are possible but are never spectacle, punishment, or a joke.
12. **Build a reusable universe.** Patient, disease, hospital, content, presentation, and analysis must remain separable in the eventual architecture.

## 6. v0.1 scope

- Patient Journey only.
- One deeply modeled acute condition: a provisional STEMI-centered chest-pain scenario.
- One complete journey from ordinary life/pre-hospital symptoms through hospital arrival, assessment, diagnostics, treatment, and outcome.
- Two prebuilt hospitals using comparable clinical capability and practical resource envelopes.
- One patient seed replayable across both hospitals.
- Character creation with a constrained set of clinically and narratively relevant traits.
- Hidden disease state and uncertain diagnosis.
- Meaningful patient decisions, hospital events, exceptions, deterioration, recovery, and death.
- A 2D top-down pixel-art world and RPG interaction language.
- A post-run journey review and neutral comparison view.

## 7. Explicit v0.1 non-scope

- Hospital Journey management mode.
- Multiple fully modeled diseases or differential-diagnosis catalogues.
- Open-world city simulation.
- Multiplayer, economy, combat, crafting, or character leveling.
- Procedurally generated hospitals.
- Real hospital ranking, certification, or product claims.
- Medical training, clinical decision support, diagnosis, or treatment advice.
- Medical-grade validation or prediction of real patient outcomes.
- Country-complete regulations, reimbursement, or localization.
- Generative AI/Ambient agents making autonomous clinical decisions.
- Production backend, accounts, analytics platform, or live deployment.

## 8. Intended emotional arc

The player should move through uncertainty, vulnerability, urgency, dependence, relief or loss, and reflection. Tension comes from incomplete knowledge and a world that continues to operate—not from arbitrary jump scares or artificial countdowns. The player should finish a run understanding that outcomes are shaped by both disease and system behavior, without being told that one individual caused everything.

## 9. Safety and truthfulness boundary

AESIVIA is a fictional, educational game simulation. It must never present itself as medical advice, a diagnostic tool, a clinical protocol, or a validated predictor. All clinical thresholds, probabilities, timings, and intervention effects are provisional game-model parameters until reviewed and approved by qualified clinical experts. No medication dosing, individualized treatment instruction, or actionable self-care advice belongs in v0.1.

The game should display a plain-language disclaimer at first launch and in the scenario debrief. Real-world emergency symptoms should not be taught through gameplay without expert-reviewed wording and an appropriate direction to seek local emergency help.

## 10. Success criteria for the design phase

The design is ready for implementation planning only when human reviewers agree that:

- the simulation rules are internally consistent;
- the two hospitals are credible and fairly comparable;
- the player has meaningful but believable agency;
- the disease model can be validated without redesigning the core;
- the vertical slice fits the 10–20 minute play target;
- sensitive outcomes are presented responsibly;
- metrics explain a journey without declaring a simplistic winner; and
- open questions blocking implementation have explicit owners or decisions.

Implementation beyond the approved Day 1 boundary remains prohibited until a human explicitly approves the relevant design scope.
