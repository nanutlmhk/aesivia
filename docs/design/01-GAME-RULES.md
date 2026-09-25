# AESIVIA Authoritative Game Rules

**Authority:** This document defines the default v0.1 rules. Scenario and content documents may tune parameters but may not contradict these rules without an explicit recorded design decision.

## 1. Fundamental simulation contract

Every run is created from four inputs:

1. `PatientDefinition`: the selected person and stable traits.
2. `DiseaseDefinition`: the hidden condition model and its initial state.
3. `RunSeed`: the reproducible source of stochastic outcomes.
4. `HospitalDefinition`: the world, operating rules, staff, resources, and starting operational state.

For a formal A/B comparison, inputs 1–3 are held constant. Hospital A and Hospital B differ only through declared hospital definitions and their derived operational events. The comparison report records all four inputs and the ruleset version.

## 2. Time

- Simulation time is continuous in concept and processed as timestamped events.
- Exploration may run at a readable accelerated rate. Dialog and explicit decisions may pause presentation, but any simulation pause must be declared by the scenario.
- Critical clocks are based on simulation time, never frame rate or player hardware.
- Movement, registration, assessment, tests, handoffs, communication, treatment preparation, and interventions all consume time.
- The disease can progress while the patient waits, moves, talks, or undergoes unrelated processes.
- The UI may communicate urgency through symptoms and world behavior, but it must not expose a hidden clinical countdown.
- No time may be silently removed to make an outcome look better. Cinematic skips advance the simulation clock by their declared duration.

## 3. Player agency

The patient player may:

- choose a help-seeking route offered by the scenario;
- disclose, withhold, correct, or repeat known information;
- select dialog tone or urgency where meaningful;
- follow, question, delay, or refuse proposed actions when the character is capable;
- move through accessible spaces when physically able;
- use available call/help interactions;
- make limited personal-priority choices; and
- review what the character currently knows.

The player may not:

- inspect hidden disease state, future random draws, staff-only knowledge, or omniscient maps;
- directly order tests, allocate staff, or control workflow unless a believable interaction enables it;
- select the diagnosis from a quiz list to advance the story;
- undo consequences through unrestricted save-scumming during a comparison run; or
- gain superhuman ability from prior-run knowledge inside the fiction.

Replay knowledge belongs to the human player. The new patient instance only knows information legitimately revealed in that run.

## 4. Observability and knowledge

Every fact has both a truth state and an audience-specific knowledge state. A fact can be true in the simulation while unknown to the patient, a clinician, or the hospital system.

Permitted knowledge states are:

- `Unknown`
- `Suspected`
- `Observed`
- `Documented`
- `Transmitted`
- `Acknowledged`
- `ActedUpon`
- `Superseded`

Information transfer is not assumed merely because a fact was documented. Transmission, receipt, acknowledgment, and action are separate events.

## 5. Randomness and reproducibility

- All consequential randomness is generated from named deterministic streams derived from the run seed.
- Required streams are `disease`, `patient`, `operations`, `clinical`, and `presentation`.
- Cosmetic randomness must never consume a consequential stream.
- The engine records the stream name, draw index, probability model, and result for every consequential draw.
- A/B replay uses the same patient and disease streams. Hospital-dependent operational and clinical opportunities may diverge because the hospitals create different events.
- A random draw is attached to a defined opportunity, not a wall-clock position. If an opportunity never occurs in one hospital, its draw is not consumed there.
- The comparison report distinguishes identical counterfactual draws from hospital-specific opportunities.

This approach preserves reproducibility without pretending two diverging timelines contain an identical sequence of events.

## 6. Disease progression

- Disease state is hidden and independent of the hospital model.
- Progression depends on elapsed time, patient modifiers, prior disease state, and interventions already applied.
- Hospitals cannot alter the disease directly except through modeled interventions or delays that change exposure to progression.
- Symptoms are imperfect observations emitted from disease and patient state. The same disease severity may produce different perceived or communicated symptoms.
- Deterioration may be gradual or event-based. Any sudden event must arise from a declared risk model, not authorial fiat.
- Clinical constants and probabilities are versioned data and require expert validation before public claims.

## 7. Assessment, diagnosis, and intervention

- Diagnosis is a belief held by actors, not a flag that automatically becomes globally known.
- Findings require acquisition, interpretation, routing, and acknowledgment before they can influence workflow.
- Tests have ordering, preparation, execution, processing, interpretation, and communication stages where applicable.
- Interventions require an indication or decision, consent/capacity handling, prerequisites, available resources, and execution.
- An intervention has possible benefits, delays, burdens, contraindication checks, failure modes, and adverse events.
- No single player choice guarantees a clinical outcome.
- v0.1 will abstract treatment and must not expose medication doses or actionable protocols.

## 8. Capacity, impairment, and control

- The patient's ability to move, communicate, and decide is derived from current PatientState.
- Severe pain, anxiety, reduced consciousness, or deterioration can narrow available interactions.
- Loss of control should be communicated clearly and never used to trick the player.
- When the patient lacks capacity, clinical actors follow a scenario-defined emergency decision rule subject to later expert review.

## 9. Outcome rules

A run may end in:

- `Recovered/Discharged`
- `Stabilized/OngoingCare`
- `Deteriorated`
- `Death`
- `ScenarioIncomplete` for technical or player-abandonment states; this is excluded from outcome comparison.

Outcomes are generated by the state model, interventions, elapsed time, and seeded risk—not by a hidden score threshold. Death is never framed as a game-over joke, player failure badge, or punishment. The debrief explains contributing factors with uncertainty and avoids single-cause blame.

## 10. Failure, exceptions, and recovery

- Operational problems are first-class events: queue growth, unavailable staff, identity mismatch, delayed result, broken dependency, interruption, handoff omission, or equipment downtime.
- Every exception must have a cause, an observable footprint, possible detection routes, and at least one recovery path unless it is intentionally irreversible.
- Both hospitals can suffer exceptions.
- Hospital B coordination mechanics may detect or recover from some failures earlier, but they introduce burdens and new failure modes of their own.
- Staff are not villains. Errors should usually emerge from workload, context, ambiguity, dependencies, or system design.

## 11. Fair comparison rules

- Hospital A and B share the same clinical service availability for the vertical slice unless a difference is explicitly documented and excluded from workflow attribution.
- Starting patient, disease trajectory, scenario clock, and exogenous events are held constant.
- Neither hospital receives outcome-selective random rerolls.
- The game reports process and experience differences even when the clinical outcome is the same.
- Hospital B is not guaranteed to be faster, safer, cheaper, or preferred.
- Hospital A must include credible strengths such as familiar roles, local expertise, or resilient informal workarounds.
- Hospital B must include credible costs such as coordination overhead, alert burden, reliance on shared infrastructure, or reduced flexibility under certain conditions.
- No single composite score names a winner.

## 12. Save, replay, and comparison

- A run stores its versioned definitions, seed, decisions, event log, and outcome.
- Free replay may allow alternative player choices but is labeled as a new branch.
- Formal A/B comparison locks the patient and disease inputs, selects the alternate hospital, and identifies any changed player decisions.
- A clean comparison requires either replaying the same decisions where equivalent or clearly marking decision divergence.
- The player may inspect the full causal timeline only after the run ends.

## 13. Simulation boundaries

The model represents selected mechanisms, not the whole of healthcare. It will not infer real clinical effectiveness, predict real mortality, rank real hospitals, or recommend care. Unmodeled factors are listed in the debrief and design documentation. Apparent precision in timestamps or percentages must not be presented as real-world evidence.

## 14. Change control

Any change to time, random-stream behavior, outcome resolution, information state, or A/B comparison rules requires:

1. a written rationale;
2. identification of affected documents;
3. a ruleset version change;
4. repeatability tests in the later implementation phase; and
5. human approval when it changes the meaning of the experiment.
