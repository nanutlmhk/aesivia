# Patient and Disease Model

## 1. Separation rule

`PatientState` and `DiseaseState` are independent of `HospitalState`.

The patient/disease simulation may exist before, during, and after an encounter. A hospital can observe or influence it only through defined findings, interventions, environment effects, and elapsed time. Hospital-specific identifiers, locations, queues, workflow statuses, and actor knowledge must not be stored inside the disease model.

This separation is the basis of same-patient replay.

## 2. PatientDefinition: stable run inputs

The patient definition contains values fixed at run creation:

- identity and presentation traits;
- age band and scenario-supported body/physiology profile;
- communication language and accessibility needs;
- known history and allergies at the chosen level of abstraction;
- risk modifiers relevant to the scenario;
- personal context and temperament tendency;
- baseline mobility, communication, cognition, and independence; and
- player-selected or seeded traits with provenance.

It must not contain a hospital, diagnosis, outcome, or future event.

## 3. PatientState: changing observable and functional state

PatientState includes:

- simulation timestamp;
- location reference supplied by the current world, nullable outside a hospital;
- alive/deceased state;
- consciousness and decision capacity;
- mobility and ability to interact;
- pain/discomfort and perceived symptom intensities;
- anxiety/distress;
- broad physiological stability indicators used by the game model;
- fatigue and communication burden;
- trust/understanding of current care;
- patient-held knowledge and beliefs;
- active interventions affecting the patient; and
- accumulated patient effort.

Visible UI values are derived from PatientState but need not reveal raw simulation values.

## 4. DiseaseDefinition

A DiseaseDefinition is a versioned content model containing:

- eligibility constraints;
- hidden phases and transition rules;
- symptom emission rules;
- finding likelihoods and diagnostic evidence relationships;
- time-dependent hazard or deterioration functions;
- intervention effect models;
- complication opportunities;
- recovery/stabilization conditions;
- calibration metadata and evidence status; and
- declared simplifications and exclusions.

The definition describes a class of conditions. DiseaseState describes one seeded instance.

## 5. DiseaseState

DiseaseState includes:

- disease definition/version;
- onset timestamp and current hidden phase;
- hidden severity dimensions;
- affected-system abstraction;
- accumulated untreated exposure/time burden;
- active complications;
- response modifiers sampled at run creation;
- interventions received and their disease-level effects;
- scheduled or conditional transition opportunities; and
- disease random-stream position.

DiseaseState is never directly shown during play. It may be revealed with caveats after the run.

## 6. Symptoms, signs, and findings

These concepts are distinct:

- **Symptom:** subjective experience generated from DiseaseState and PatientState, such as discomfort or breathlessness.
- **Reported symptom:** what the patient communicates, affected by capacity, dialog choice, language, and recall.
- **Sign/observation:** something an actor or device can observe.
- **Finding:** a structured interpretation produced by an assessment or test.
- **Diagnosis:** an actor's working or confirmed belief based on available evidence.

A symptom does not automatically become a documented finding. A finding does not automatically reach every actor.

## 7. Progression model

The disease model updates when:

- scheduled progression time is reached;
- the patient's physiology crosses a defined threshold;
- a relevant intervention begins, succeeds, fails, or ends;
- a complication opportunity occurs; or
- a scenario event changes an allowed modifier.

Progression uses a combination of deterministic accumulation and seeded stochastic opportunities. The intended conceptual form is:

`next disease state = f(previous disease state, elapsed time, patient modifiers, active interventions, seeded draw)`

This is a design relationship, not an implementation prescription or validated clinical equation.

## 8. Intervention model

Each intervention definition should declare:

- prerequisite clinical belief/finding;
- physical and workflow prerequisites;
- start time and duration;
- intended disease-state effects;
- probability and magnitude of response;
- risk/adverse-event opportunities;
- what actors can observe about the response; and
- whether stopping or delaying changes effect.

Interventions do not directly set the final outcome. They modify hazards, stability, symptoms, or phase transitions.

## 9. Provisional v0.1 disease: STEMI-centered acute coronary event

### 9.1 Why this condition

A STEMI-centered scenario is a strong candidate because it combines ambiguous patient experience, time-sensitive progression, diagnostic evidence, multiple handoffs, coordinated treatment dependencies, and meaningful pre-hospital-to-hospital continuity. It can expose system behavior without requiring a huge disease catalogue.

This proposal is not a final clinical model. Terminology, timings, findings, treatment abstractions, and probabilities require cardiology, emergency medicine, nursing, ambulance/pre-hospital, patient-safety, and patient-experience review.

### 9.2 Hidden phases

Provisional phases:

1. `PreOnsetRisk`: background state used only to initialize the scenario.
2. `AcuteOnset`: symptoms begin; instability risk is present but variable.
3. `EvolvingInjury`: time-dependent burden accumulates; symptoms/findings may fluctuate.
4. `RecognizedUntreated`: at least one actor holds the target working diagnosis, but definitive treatment effect has not begun.
5. `TreatmentInProgress`: definitive treatment pathway has begun but outcome remains uncertain.
6. `ReperfusedOrStabilized`: modeled primary treatment effect achieved; residual complication risk remains.
7. `Complicated`: one or more acute complications dominate the state.
8. `RecoveryTrajectory`: stable endpoint for the vertical slice.
9. `Death`: absorbing state.

Recognition is actually an actor/encounter belief, not intrinsic biology. It is included here only as a convenient composite scenario phase and should not be allowed to leak hospital knowledge into the biological variables.

### 9.3 Hidden severity dimensions

- acute injury burden;
- electrical instability risk;
- circulatory instability risk;
- symptom intensity tendency;
- treatment response modifier; and
- complication susceptibility.

All are abstract game dimensions pending clinical modeling. The UI must not display them as real clinical measures.

### 9.4 Symptom emission

The condition can emit a seeded pattern from an expert-approved set, potentially including chest discomfort and associated symptoms. Emission varies by patient traits and phase. Symptoms can intensify, ease, recur, or be difficult to describe. An atypical presentation may be considered later, but v0.1 should not use representational variety as a substitute for enough content or validation.

### 9.5 Diagnostic evidence

The vertical slice models a small evidence chain:

- patient history/report;
- initial observations;
- a time-sensitive cardiac diagnostic test represented at a safe abstraction level;
- clinician interpretation;
- target-diagnosis suspicion/confirmation state; and
- routing/acknowledgment of the critical finding.

The player does not interpret raw medical traces. The simulation tracks acquisition and interpretation separately so information flow can affect the journey.

### 9.6 Treatment abstraction

The definitive pathway is represented as coordinated preparation, transfer, and a procedure-level intervention without drug dosing or step-by-step medical instruction. Supportive actions may modify symptoms or near-term risk at an abstract level. The model must allow:

- benefit that varies with elapsed disease time;
- incomplete or delayed response;
- treatment-associated risk;
- deterioration before, during, or after preparation; and
- recovery that still requires ongoing care.

### 9.7 Complications

Use at most one major acute complication family in the first playable build, chosen after expert review. The design must support complication opportunities but the content should avoid stacking dramatic events merely for excitement.

### 9.8 Outcome resolution

The vertical slice endpoint is derived from current stability, injury burden, complications, and intervention response. It may be recovery trajectory, stabilized/ongoing intensive care, deterioration, or death. The run report must not equate an endpoint with real prognosis.

## 10. Seed package

The same-patient replay package contains:

- PatientDefinition;
- DiseaseDefinition and version;
- initial DiseaseState parameters;
- onset time and pre-hospital exogenous events;
- named random-stream master seed;
- ruleset and content versions; and
- optional locked player decisions for controlled comparison.

Hospital state is intentionally excluded.

## 11. Validation requirements before implementation

Human reviewers must decide or validate:

- whether STEMI is the right first condition;
- supported patient presentations and exclusions;
- clinically credible state/phase model;
- which findings are necessary and sufficient in the game abstraction;
- treatment pathway abstraction;
- time-risk relationships and all probability ranges;
- the selected complication family;
- respectful handling of death and incapacity; and
- disclaimer and emergency-language wording for the target release countries.

Until then, all clinical parameters are placeholders and no medical-accuracy claim is permitted.
