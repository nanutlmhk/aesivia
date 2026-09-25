# Patient Journey Player Loop

## 1. Experience loop

The v0.1 loop is:

**Create person → inhabit ordinary life → notice symptoms → decide whether/how to seek help → enter hospital → communicate and navigate → undergo assessment and diagnostics → consent/respond to treatment → experience an outcome → understand the journey → replay the same patient in the other hospital.**

The loop is a lived story with simulation underneath. The player should rarely feel that they are choosing nodes in a process diagram.

## 2. Phase 0 — character creation

Target duration: 1–2 minutes.

The player chooses a small number of humanizing traits and receives some seeded traits. v0.1 candidates:

- name, appearance, pronouns, and portrait palette;
- age band from scenario-supported options;
- communication preference/language from the supported prototype set;
- one personal context, such as caring responsibility or important appointment;
- one temperament tendency, such as stoic, anxious, trusting, or questioning; and
- selected history/risk modifiers generated from the seed and disclosed only as the character would know them.

Character creation must not become a min-max screen. Clinically relevant traits show plain-language implications only when the person would reasonably know them. The disease assignment remains hidden.

Full Phase 0 output: a versioned PatientDefinition and RunSeed. The Day 1 milestone below stops before RunSeed generation.

### Day 1 delivery boundary

The first implementation milestone ends immediately after character creation and confirmation. The user-facing flow before that point is website loading, landing, account creation or login, and character creation. For Day 1, disease assignment, RunSeed creation, simulation time, and the ordinary-life scene do not begin. See `12-DAY-01-SCOPE.md`.

## 3. Phase 1 — ordinary life and health event

Target duration: 1–2 minutes.

The player enters a compact everyday scene. One or more symptoms begin without a diagnosis label. The character can continue the current activity, pause, speak to another person, inspect their own felt state, or seek help.

Design purposes:

- establish the patient as a person before they become a case;
- introduce symptom ambiguity;
- begin the disease clock;
- let the first player decision affect route and timing; and
- teach movement, interaction, and the subjective-status HUD.

## 4. Phase 2 — seeking care

Target duration: 1–3 minutes.

The scenario offers a constrained set of credible routes, such as calling emergency help, asking someone for transport, or delaying briefly. Routes differ in elapsed time, monitoring, information created before arrival, and arrival handoff—not in secretly favored morality.

The game must avoid implying that a fictional route is universal real-world advice. Any public-facing symptom guidance requires clinical and local review.

## 5. Phase 3 — arrival and orientation

Target duration: 2–3 minutes.

The patient crosses into a functioning hospital. Identity, arrival mode, first contact, queue position, and existing information affect what happens next. The player observes other people and activity but is not asked to manage them.

Possible interactions:

- answer or correct identity questions;
- describe symptoms in the patient's own words;
- decide whether to mention an uncertain detail;
- follow staff directions;
- ask for help if symptoms worsen; and
- notice whether information follows across a handoff.

## 6. Phase 4 — assessment and diagnostics

Target duration: 3–5 minutes.

Staff gather history and observations, create findings, form suspicions, and initiate diagnostic work. The player experiences physical movement, waiting, repeated questions, uncertainty, and changing symptoms. Some clinical activity can occur around the patient without demanding a choice every few seconds.

Meaningful decision types include:

- disclosure/correction;
- consent or hesitation;
- requesting clarification;
- calling attention to a change; and
- prioritizing an immediate personal concern at a time cost.

Diagnosis is revealed only when an in-world actor has sufficient evidence and communicates it to the patient.

## 7. Phase 5 — treatment and possible deterioration

Target duration: 3–5 minutes.

Treatment preparation exposes dependencies: decision, consent/capacity, access, team availability, destination readiness, transport, information, and equipment. A deterioration event may occur according to the hidden model; it is not mandatory in every run.

The player's control may narrow as acuity rises. The scene should communicate that care is continuing even when the patient cannot act freely.

## 8. Phase 6 — outcome

Target duration: 1–2 minutes.

The vertical slice ends at a clinically and emotionally meaningful stabilization point rather than simulating an entire admission. Possible endings include early recovery trajectory, stabilized with ongoing intensive care, major deterioration, or death.

The outcome scene should acknowledge the person's context. It must not immediately convert loss into points or celebratory rewards.

## 9. Phase 7 — journey review

Target duration: 2–3 minutes and skippable.

The review separates three layers:

1. **What the patient experienced:** symptoms, waits, conversations, movement, repeated effort, and outcome.
2. **What the system did:** handoffs, dependencies, routing, acknowledgment, recovery actions, and delays.
3. **What the simulation modeled:** revealed disease timeline, consequential random events, and unmodeled limitations.

The review uses neutral language: “contributed,” “associated within this simulation,” and “counterfactual unavailable” rather than declaring a single cause.

## 10. Phase 8 — replay and compare

The primary call to action is: **Take the same person through the other hospital.**

The replay screen locks the patient, disease definition, and run seed. It shows which player decisions can be held equivalent. After both runs, the comparison view aligns timelines and highlights differences without issuing a winner badge.

## 11. Moment-to-moment interaction loop

Within hospital scenes, the repeated loop is:

1. perceive the world and the character's felt state;
2. interpret incomplete information;
3. choose whether to move, speak, wait, comply, question, or call for help;
4. observe responses from people and systems;
5. experience elapsed time and state change; and
6. revise understanding.

Not every cycle must contain a choice. Periods of enforced waiting are valid when they remain legible, emotionally purposeful, and short enough for the prototype.

## 12. Learning without lecturing

- Teach mechanics through an ordinary interaction before the equivalent urgent interaction.
- Reveal operational concepts in environmental behavior and dialog.
- Reserve technical labels and causal overlays for the post-run review.
- Do not award trivia points for guessing the diagnosis.
- Do not expose Hospital A/B labels as “bad/good.” Use neutral in-world names and describe operating models only in the debrief.

## 13. Replay integrity

A replay remains comparable only if the report records:

- identical PatientDefinition, DiseaseDefinition, RunSeed, and ruleset version;
- hospital selected;
- decisions that were equivalent, unavailable, or changed;
- presentation-only differences; and
- any content/configuration change between runs.

If these conditions fail, the runs may still be viewed but are labeled “exploratory,” not “controlled comparison.”
