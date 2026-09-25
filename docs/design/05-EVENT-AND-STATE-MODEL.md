# Event and State Model

## 1. Modeling approach

AESIVIA should use a data-driven, event-based simulation. State describes what is true at a timestamp. Events describe what changed, why, and who can know about it. Workflows create intended work; the event system determines what actually happens.

This document defines domain concepts, not code or an implementation API.

## 2. Core state containers

### 2.1 PatientState

The person's changing functional, experiential, and broad physiological state. Defined in detail in `03-PATIENT-AND-DISEASE-MODEL.md`.

### 2.2 DiseaseState

Hidden biological progression and response state. It has no hospital-specific fields.

### 2.3 EncounterState

The current relationship between patient and care setting:

- encounter identity and status;
- arrival route and timestamps;
- verified/unverified identity state;
- current responsible role/team;
- current working diagnoses by actor/team;
- current priority/acuity classification;
- active orders/requests and their lifecycle;
- consent/capacity state relevant to care;
- declared pathway, if any;
- unresolved blockers; and
- discharge, transfer, or endpoint status.

### 2.4 LocationState

- occupants;
- capacity and access restrictions;
- relevant equipment/readiness;
- environmental status;
- travel links and current traversal time; and
- queue or staging state.

### 2.5 HospitalState

- actor states and assignments;
- queues;
- resource availability;
- workflow instances;
- information artifacts and routing status;
- operational exceptions;
- policies/configuration; and
- exogenous operational events.

### 2.6 ActorState

- role/capabilities;
- current location and task;
- workload and availability;
- actor-held knowledge/beliefs;
- assigned responsibilities;
- interruption state; and
- fatigue/pressure abstraction if included.

## 3. Simulation primitives

### 3.1 WorkflowStep

An intended unit of work with:

- purpose;
- owning role;
- patient/encounter reference;
- prerequisites and dependencies;
- priority and queue rule;
- estimated duration distribution;
- required capabilities/resources/location;
- start, pause, completion, cancellation, and failure conditions;
- outputs; and
- escalation/recovery rules.

### 3.2 ClinicalEvent

A timestamped change or observation primarily related to patient care or disease, such as symptom change, assessment, finding creation, interpretation, intervention start, response, deterioration, or stabilization.

### 3.3 SystemEvent

A timestamped operational change, such as task assignment, message routing, queue change, staff interruption, resource release, handoff, delay, downtime, acknowledgment, or escalation.

### 3.4 Decision

A choice made by the player or an actor. It records:

- decision-maker and knowledge available at the time;
- options available and why;
- selected option;
- timestamp and time consumed;
- immediate effects; and
- later events causally linked to the decision.

### 3.5 Exception

A declared departure from expected workflow. It has:

- trigger/cause;
- detection conditions;
- severity and affected dependencies;
- observable signals;
- current owner, if any;
- recovery options;
- escalation deadline; and
- resolution or residual effect.

### 3.6 Dependency

A relationship stating that work cannot safely or operationally proceed until a condition is satisfied. Types include:

- hard prerequisite;
- soft/readiness prerequisite;
- resource dependency;
- information dependency;
- location dependency;
- authorization/consent dependency; and
- sequencing dependency.

### 3.7 Finding

A structured result with:

- subject and source;
- acquisition timestamp;
- raw/observed value at the chosen abstraction;
- interpretation and interpreter;
- confidence/criticality;
- audience knowledge states;
- routing and acknowledgment status;
- supersession/version history; and
- links to decisions or workflows it supports.

## 4. Event anatomy

Every consequential event should record:

- unique identity;
- simulation timestamp;
- event type and version;
- initiator and subject;
- prerequisites checked;
- state changes;
- outputs and scheduled follow-up events;
- information audiences;
- causal parent links;
- random stream/draw metadata when stochastic; and
- source classification: patient, disease, hospital, player, scenario, or presentation.

An event log must be append-only in meaning. Corrections create superseding events rather than silently rewriting history.

## 5. Event lifecycle

The conceptual resolution order at a timestamp is:

1. gather due events;
2. order by declared priority and stable tie-break rule;
3. confirm prerequisites against the current state;
4. resolve deterministic effects;
5. resolve declared stochastic opportunities;
6. update state;
7. create findings/information artifacts;
8. schedule follow-up events and workflow evaluations; and
9. emit presentation cues from the resolved state.

Presentation never changes simulation state directly. Player inputs become Decisions or movement/action events, which do.

## 6. Determinism and random streams

A master RunSeed derives independent named streams:

- `disease`: onset profile, progression and complication opportunities;
- `patient`: symptom perception/expression and patient-specific response variation;
- `operations`: exogenous demand, interruptions, and resource events;
- `clinical`: interpretation variance and intervention response where modeled; and
- `presentation`: cosmetic NPC motion, ambient variation, and non-consequential detail.

Rules:

- Named streams are versioned.
- Consequential draws are keyed to stable opportunity identifiers where possible.
- A draw record includes inputs and result.
- Cosmetic changes cannot perturb clinical outcomes.
- Hospital-specific opportunities are tagged so the comparison view does not falsely call them mirrored.
- A run can be deterministically replayed only with the same rules, content versions, decisions, and event ordering.

## 7. Workflow evaluation

A workflow is not an automatic pipeline. Each step may be:

- `NotReady`
- `Ready`
- `Queued`
- `Assigned`
- `InProgress`
- `Paused`
- `Completed`
- `Failed`
- `Cancelled`
- `Superseded`

Completing one step may satisfy multiple dependencies. Hospital A and B may observe and activate readiness differently, but both use the same statuses.

## 8. Information lifecycle example

A diagnostic finding may move through:

1. acquisition completed;
2. finding created;
3. interpreter assigned;
4. interpretation created;
5. criticality recognized;
6. message routed;
7. recipient receives it;
8. recipient acknowledges it;
9. decision made; and
10. downstream action begins.

The simulation must not collapse this into “test completed,” because the gaps are core gameplay evidence.

## 9. Causality and debrief

The debrief builds a causal graph from event links, but it must distinguish:

- direct modeled cause;
- contributing condition;
- temporal association;
- counterfactual comparison; and
- unmodeled/unknown factor.

It should never claim that a single delay “caused” an outcome unless that relationship is explicitly represented and even then should say “within this simulation.”

## 10. State invariants

Required invariants:

- a deceased patient cannot initiate later voluntary actions;
- DiseaseState never reads hospital identity or score;
- a finding cannot be acknowledged before it exists and is received;
- a workflow step cannot complete before its hard prerequisites;
- one resource cannot perform incompatible simultaneous work;
- state timestamps cannot move backward;
- outcome resolution uses only recorded state/events;
- a comparison cannot alter the original run; and
- cosmetic events cannot alter consequential state.

## 11. Pause and cinematic rules

UI dialog may pause presentation for readability. The scenario declares whether simulation time pauses. If time continues, the player receives a visible cue. Cinematics either run in real simulation time or declare and apply their time jump. No hidden pause behavior may differ between hospitals.

## 12. Versioning

Every run records versions for:

- ruleset;
- patient schema;
- disease definition;
- hospital definition;
- scenario;
- event vocabulary; and
- comparison metric definitions.

Runs with incompatible consequential versions cannot be labeled controlled comparisons.
