# Technical Architecture Proposal

**Phase boundary:** This is an architecture proposal only. It authorizes no code, repository scaffolding, engine selection, data schema implementation, or prototype.

## 1. Architecture goals

- Run a reproducible patient/disease simulation independently of presentation.
- Configure hospitals from shared primitives rather than bespoke logic.
- preserve actor-specific knowledge and information flow.
- Support event-level audit and same-seed comparison.
- Keep clinical content versioned and replaceable after expert review.
- Present the same world later from Patient Journey and Hospital Journey perspectives.
- Add diseases, hospitals, localizations, countries, and optional AI/Ambient mechanics without rewriting the core.
- Prevent UI or cosmetic behavior from altering consequential randomness.

## 2. Proposed layers

### 2.1 Content definitions

Versioned, data-driven definitions for:

- patient traits and scenario constraints;
- diseases, phases, symptom rules, findings, and intervention effects;
- hospitals, locations, resources, actors, queues, and operating rules;
- workflows, dependencies, exceptions, and escalation rules;
- scenarios, decision opportunities, dialogs, and presentation mapping;
- metrics and debrief interpretations; and
- localization and accessibility text.

Clinical content should carry review status, evidence/reference metadata, owner, version, and declared simplifications.

### 2.2 Simulation domain core

Owns PatientState, DiseaseState, EncounterState, HospitalState, ActorState, time, event resolution, workflow evaluation, dependencies, knowledge states, interventions, capacity, and outcomes.

The core has no pixel rendering, dialog widgets, audio, or engine-specific scene knowledge.

### 2.3 Deterministic event scheduler

Maintains simulation time, stable event ordering, named random streams, opportunity keys, scheduled events, and an append-only event log. It must support replay from initial inputs plus recorded decisions.

### 2.4 Rules and policy layer

Evaluates declarative conditions such as workflow readiness, prioritization, routing, escalation, disease transitions, and outcome resolution. Hospital-specific policies plug into shared rule interfaces/concepts rather than branching the core by hospital name.

### 2.5 Perspective adapters

Transform core state into what a perspective is permitted to perceive and affect.

- **Patient adapter (v0.1):** subjective symptoms, patient knowledge, accessible actions, dialog, movement capability, and patient-level world cues.
- **Hospital manager adapter (future):** operational dashboards, staffing/resource decisions, multiple-patient demand, policies, and system outcomes.
- **Validation observer (future/internal):** privileged event/state inspection, never available as player knowledge during a run.

Perspective adapters do not duplicate simulation rules.

### 2.6 Game presentation layer

Maps permitted observations to scenes, sprites, animation, audio, dialogs, HUD, movement, and accessibility features. Player inputs are converted into domain Decisions or world actions. Presentation-only randomness uses a separate stream.

### 2.7 Analysis and comparison layer

Consumes completed event logs and version manifests to calculate metrics, align timelines, identify decision divergence, perform fairness checks, and generate the post-run evidence profile.

It is read-only with respect to completed runs.

### 2.8 Persistence and provenance

Stores:

- immutable run manifest;
- initial definitions/version identifiers;
- seed and stream versions;
- player decisions;
- event log;
- checkpoints for convenience, if later needed;
- completed outcome; and
- derived comparison artifacts with metric versions.

## 3. Conceptual dependency direction

`Content definitions → Simulation core/event scheduler → Perspective adapter → Presentation`

`Completed event log → Analysis/comparison`

Persistence spans the pipeline but may not mutate definitions retrospectively. The simulation core must not depend on presentation or analysis.

## 4. World and simulation synchronization

The hospital map is a presentation of domain locations and travel links. Consequential movement begins a domain action with a duration and route. Visual movement represents that action. If presentation is interrupted, the domain state remains authoritative.

Not every ambient NPC requires full simulation. Use three conceptual fidelity tiers:

1. **Consequential actors:** full task, capability, knowledge, location, and workload state.
2. **Operational background actors:** limited schedules/occupancy that affect capacity or atmosphere in declared ways.
3. **Cosmetic actors:** presentation only and prohibited from affecting consequential state.

This boundary is essential for scope and determinism.

## 5. Knowledge architecture

Facts/findings should exist independently from actor knowledge. The model needs:

- source truth or observation;
- provenance;
- version/supersession;
- allowed audience;
- actor-specific knowledge/belief;
- transmission channel/status;
- acknowledgment; and
- actions linked to the information.

No global “diagnosis discovered” switch should grant knowledge to every actor.

## 6. Workflow architecture

Workflows are dependency graphs of shared WorkflowStep types. Hospital definitions supply:

- activation rules;
- role ownership;
- queue/prioritization policy;
- routing/notification policy;
- parallelization rules;
- escalation and recovery behavior; and
- local workaround opportunities.

This permits A/B differences without two separate scenario scripts.

## 7. Randomness architecture

The deterministic random service should conceptually provide:

- master seed derivation into named streams;
- stable opportunity keys;
- draw audit records;
- separation of consequential and presentation streams;
- replay verification; and
- detection of accidental nondeterministic inputs.

The exact algorithm is an implementation decision that must be documented and stable within a ruleset version.

## 8. Content authoring and validation concept

Clinical and operational content should be reviewable without reading source code. A future authoring workflow should support:

- schema validation;
- required provenance/review fields;
- allowed ranges and units;
- dependency-graph checks;
- unreachable/dead-end state detection;
- localization completeness;
- scenario simulation in accelerated/headless mode;
- seed-batch outcome distribution review; and
- fairness-difference reports between hospital definitions.

No authoring tool is in v0.1 scope unless manually editing content becomes a proven bottleneck.

## 9. Testing strategy for a later implementation phase

Required future test categories:

- deterministic replay and stream isolation;
- state invariant/property tests;
- disease independence from hospital identity;
- workflow/dependency transition tests;
- actor knowledge and information-routing tests;
- resource exclusivity and queue tests;
- comparison eligibility/metric reconstruction;
- fairness fixture tests for matched baselines;
- scenario playthroughs for all endpoints;
- batch seed tests for outcome plausibility and bias; and
- accessibility/UX testing.

These are requirements, not tests to implement during this design phase.

## 10. Future extension paths

### More diseases

Add DiseaseDefinitions and scenario content while reusing progression, findings, interventions, and knowledge primitives. Comorbidity interaction is a future design problem and should not be assumed free.

### More hospitals and countries

Use hospital and localization/policy content packs. Local role names, care pathways, emergency access, law, consent, and clinical standards require country-specific review.

### Hospital Journey

Add a manager perspective adapter, multi-patient demand generation, staffing/policy decisions, and aggregate outcome/equity views. It should run the same patient, disease, actor, workflow, and event concepts at different scale/fidelity.

### Ambient or AI-agent mechanics

Future agents may propose actions, summarize information, or create dialog, but authoritative state transitions must remain constrained by validated rules and logged decisions. Generated content must not invent clinical facts, alter hidden probabilities, or bypass safety/knowledge permissions.

## 11. Technology decisions deliberately deferred

- game engine and programming language;
- entity-component versus object/domain architecture;
- serialization formats and database;
- desktop/web/mobile platform;
- networking or cloud services;
- asset pipeline and resolution;
- scripting language/editor tooling;
- telemetry stack; and
- generative model/provider choices.

These should be selected only after the rules package and prototype acceptance criteria are approved.

Docker is a confirmed delivery constraint rather than a deferred option: the selected web stack must build and run reproducibly in a container. The exact image strategy and any supporting services remain dependent on the approved authentication and persistence design.

## 12. Architecture decision gates

Before implementation planning, reviewers must approve:

- simulation fidelity target and tick/event-time approach;
- deterministic comparison semantics;
- content/schema ownership and clinical review workflow;
- required auditability;
- game platform and engine constraints;
- minimum accessibility targets;
- whether any data leaves the local game; and
- boundary between consequential and ambient simulation.

The first approved implementation milestone must also define the GitHub repository/branch workflow and pass a clean Docker build/run verification before it is committed and pushed.
