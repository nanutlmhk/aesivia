# Scenario v0.1 — The Longest Morning

**Status:** Provisional vertical-slice design; clinical content requires expert validation
**Playable target:** 10–20 minutes excluding optional debrief
**Condition:** Hidden STEMI-centered acute coronary event proposal

## 1. Scenario promise

The player creates and inhabits an ordinary person whose morning is interrupted by ambiguous but worsening symptoms. The player chooses how to respond, enters one of two credible hospitals, and experiences how care emerges from a network of people, information, dependencies, and time. The diagnosis is not named until discovered and communicated in-world.

## 2. Design goals

- Establish personhood before patienthood.
- Make symptoms experiential rather than diagnostic labels.
- Give 4–6 meaningful patient decisions without making the patient control clinical work.
- Expose at least two handoffs and one critical information route.
- Show time and coordination through the world.
- Allow recovery trajectory, ongoing critical care, deterioration, or death.
- Support a controlled replay through the other hospital.
- Fit one compact environment and one deeply modeled pathway.

## 3. Initial patient setup

The player selects presentation traits, a personal responsibility, and a temperament tendency. The seed supplies a scenario-compatible age band, relevant known history/risk modifiers, symptom profile, hidden disease severity, response modifiers, and complication opportunity.

The design must avoid allowing appearance, gender, ethnicity, disability, or language to become an unreviewed hidden penalty. Any modeled disparity or communication barrier needs explicit purpose, sensitivity review, and metrics.

## 4. Scene sequence

### Scene 1 — Ordinary morning

**Target:** 60–90 seconds of play.

The patient is at home or a small everyday location completing a simple task connected to the chosen personal context. Movement and interaction are introduced. Symptoms begin as felt changes and animation/audio cues.

Player decisions:

- stop and pay attention or continue briefly;
- tell a nearby person/use a communication option; and
- inspect the subjective-status view.

Simulation consequences: elapsed pre-hospital time, reported onset uncertainty, anxiety, and help availability.

### Scene 2 — Escalation and seeking help

**Target:** 60–120 seconds.

Symptoms persist or evolve according to DiseaseState. The player chooses from scenario-supported help routes. For v0.1, the route set should be limited enough to validate. Arrival route affects elapsed time, monitoring, and information at handoff.

Safety note: route wording is fictional scenario content and must be medically/localization reviewed before release.

### Scene 3 — Arrival and first handoff

**Target:** 90–150 seconds.

The patient arrives at the selected hospital. The world is active: staff move, other patients wait, messages occur, and resources are finite. The initial operational load is matched across hospital models.

Key events:

- identity creation/verification;
- arrival information transferred or gathered;
- first symptom statement;
- first priority decision; and
- movement to the next location or a short wait.

Possible controlled exception: one identity detail requires clarification. It must be recoverable in both hospitals and cannot be designed to make one hospital look foolish.

### Scene 4 — Triage/first clinical contact

**Target:** 90–180 seconds.

An actor observes the patient, asks questions, and creates initial findings. The player's capacity and symptom state affect dialog.

Player decisions:

- concise versus fuller disclosure;
- correct a misunderstood onset/detail;
- mention or defer a personal concern; and
- signal a change in symptoms.

Hospital-model expression:

- Hospital A enters work into departmental processes and uses direct escalation/local knowledge.
- Hospital B establishes a journey owner/shared state and may activate safe linked prerequisites.

### Scene 5 — Assessment and diagnostic acquisition

**Target:** 2–3 minutes.

The patient reaches an assessment space. A clinician evaluates, and a cardiac diagnostic test is acquired at an abstract level. The player experiences positioning, questions, uncertainty, and possibly repeated information.

Key dependencies:

- patient location/readiness;
- capable actor;
- equipment/resource;
- identity link;
- order/pathway trigger where required; and
- acquisition completion.

The disease continues to progress. The test does not become universally known on completion.

### Scene 6 — Interpretation and critical information route

**Target:** 1–2 minutes.

The finding is interpreted, a target diagnosis becomes suspected/confirmed for an actor, and urgent downstream work must be initiated. The diagnosis is communicated to the patient only when an informed actor does so.

Controlled operational pressure: the intended recipient or a required resource is temporarily occupied. Hospital A may recover through direct contact/local escalation; Hospital B may recover through acknowledgment monitoring/shared visibility. Either can be faster depending on seed, workload, and actor availability.

### Scene 7 — Preparation and transfer

**Target:** 2–3 minutes.

Care preparation requires a small dependency network: clinical decision, capacity/consent handling, destination/team readiness, transport, and verified information. Some work may be parallelized where safe.

Player decisions:

- ask for an explanation or proceed immediately;
- disclose/correct one relevant known detail; and
- choose whether a trusted person is informed if the scenario supports it.

The first choice may consume a small amount of time but improve understanding; it is not framed as wrong.

### Scene 8 — Deterioration opportunity

**Target:** 30–90 seconds when triggered.

A seeded complication opportunity may occur before or during transfer/preparation. It is based on DiseaseState and elapsed exposure, not on a scripted hospital verdict. Response depends on current location, detection, staff availability, and readiness.

The player may lose movement/dialog control. Presentation must remain readable and respectful. This event is not required in every run.

### Scene 9 — Procedure abstraction and endpoint

**Target:** 60–120 seconds.

The definitive intervention is shown through environment, dialog, transitions, and patient-level experience—not an interactive medical procedure. Its response is seeded and modified by disease state and timing.

Endpoint options:

- recovery trajectory in monitored care;
- stabilized with significant ongoing care;
- deterioration/major complication;
- death.

The slice ends in ICU/recovery or an appropriate loss scene. It does not simulate full rehabilitation or discharge planning.

### Scene 10 — Debrief and replay invitation

**Target:** 2–3 minutes, optional/skippable.

The game reveals the modeled condition, aligns patient experience with the event timeline, highlights information and workflow moments, lists limitations, and offers same-seed replay in the other hospital.

## 5. Required meaningful decisions

The first playable build should implement only these decision families:

1. initial response/help-seeking;
2. symptom/history disclosure or correction;
3. calling attention to a symptom change;
4. explanation/consent pace;
5. one personal-context choice; and
6. optional trusted-person communication.

Every decision must state what it can affect. No cosmetic dialog choice should be presented as clinically decisive.

## 6. Required workflow chain

`Onset → Help route → Arrival → Identity/encounter → First clinical contact → Assessment → Diagnostic acquisition → Interpretation → Critical communication/acknowledgment → Treatment decision → Preparation dependencies → Transfer → Definitive intervention abstraction → Endpoint`

Hospitals may order or overlap eligible preparation steps differently, but hard clinical prerequisites remain shared.

## 7. Timing design

There are two time scales:

- **play time:** target 10–20 minutes; and
- **simulation time:** a longer plausible journey compressed through accelerated traversal and declared time jumps.

Exact simulation durations and risk relationships are deliberately not specified yet. They require expert validation and playtesting. The eventual content must record every time jump and show clinically important elapsed-time bands in the debrief without implying validated real-world precision.

## 8. Content budget

v0.1 should target:

- one primary patient sprite set with customization layers;
- two compact hospitals sharing an asset vocabulary but different layout/operational cues;
- approximately 8–12 speaking roles/NPC functions per hospital, with some roles visually reused;
- one primary diagnostic chain;
- one definitive treatment abstraction;
- one major complication family;
- 4–6 meaningful decisions; and
- 4 endpoint classes.

Anything beyond this budget requires an explicit scope trade-off.

## 9. Acceptance criteria for the scenario design

- A first-time player can finish in 20 minutes without medical knowledge.
- The diagnosis is hidden until an in-world discovery.
- At least one wait, handoff, repeated-information event, and dependency is experienced rather than only described.
- Either hospital can encounter and recover from an exception.
- A/B runs remain valid when equivalent player decisions are selected.
- The patient can deteriorate despite competent care and recover despite an imperfect journey.
- No dialog provides medication dosage or personalized real-world advice.
- The debrief identifies modeled versus unmodeled factors.

## 10. Scenario content gates

Before implementation, human review must approve the help-seeking routes, symptom language, findings, treatment abstraction, complication model, capacity/consent handling, death presentation, timing bands, and all probabilities. Until those gates close, this document is a narrative/mechanical prototype specification only.
