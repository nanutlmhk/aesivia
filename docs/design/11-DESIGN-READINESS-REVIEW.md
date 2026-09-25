# Design Readiness Review

**Verdict:** The clinical simulation concept is coherent enough for structured review, but it is **not ready for clinical gameplay implementation**. The non-clinical Day 1 front-door milestone was separately approved on 26 September 2026. Several product, clinical, fairness, and platform decisions remain open for later milestones.

## What is now coherent

- The patient is the player character; the disease remains hidden and hospital-independent.
- A run is reproducible from patient, disease, seed, hospital, decisions, and versioned rules.
- Hospital differences are expressed through shared workflow/information primitives rather than separate scripted outcomes.
- Hospital A and B have credible strengths, costs, and failure modes.
- A/B analysis uses multiple evidence dimensions and no winner score.
- The first slice is constrained to one disease, one diagnostic chain, one definitive treatment abstraction, one major complication family, and 4–6 decisions.
- Clinical advice, prediction, and medical-grade claims are explicitly outside scope.

## Tensions or contradictions to resolve

1. **Random disease versus one disease:** The concept says “hidden/random disease,” while v0.1 prefers one deeply modeled condition. Recommended resolution: randomize the hidden presentation, severity, progression, and complication seed within one approved disease family; do not randomize among multiple diseases in v0.1.
2. **Same seed versus diverging workflows:** Identical event sequences are impossible once hospitals create different opportunities. Recommended resolution: preserve identical patient/disease streams and keyed shared opportunities, while labeling hospital-specific opportunities explicitly.
3. **Comparable resources versus a coordinator:** Hospital B cannot receive a free extra role. Recommended resolution: use a matched staff-time budget and expose coordination overhead.
4. **Player choice versus controlled comparison:** Natural replay invites changed decisions. Recommended resolution: provide an equivalent-choice replay mode and label changed-choice pairs exploratory.
5. **10–20 minute playtime versus a full acute-care journey:** A literal real-time journey will not fit. Recommended resolution: use declared time compression and end at stabilization/ICU, not full recovery/discharge.

## Scope risks

- Fully simulating every NPC, queue, room, communication, and physiology detail would overwhelm v0.1.
- Character customization can multiply clinical validation and representation risk.
- Multiple help routes, atypical presentations, and numerous complications rapidly expand content/test combinations.
- Hospital B's shared-information behavior could accidentally become a large software-product simulation.
- A sophisticated debrief and causal timeline is nearly a second product surface.

The current content budget should be treated as a hard ceiling until one end-to-end slice proves the core loop.

## Missing rules or decisions that block implementation

- primary audience and release context;
- confirmed disease and named clinical review owners;
- clinically approved symptoms, findings, intervention abstraction, timings, probabilities, and endpoint definitions;
- target principles for the future hospital model;
- matched Hospital A/B capability and staffing matrix;
- final same-seed/counterfactual semantics;
- permitted pre-hospital choices and safety wording;
- death/incapacity policy and content warnings;
- exact playable endpoint and time-compression map;
- platform, visual perspective, and accessibility baseline; and
- claim language and data/telemetry boundary.

## Recommended approval gate

Do not approve “start coding” yet. First hold a focused design review that produces:

1. a signed-off product/audience statement;
2. a clinical-content review plan with owners;
3. a one-page Hospital A/B fairness matrix;
4. an approved scenario beat sheet and sensitive-outcome policy;
5. agreement on same-seed semantics and no-winner comparison; and
6. a prioritized disposition for all BLOCKER items in `10-OPEN-QUESTIONS.md`.

After those decisions, revise this package and request explicit human approval for the next implementation milestone. Day 1 is limited to loading/landing, account access, character creation, and the pause screen; no disease, symptoms, hospital journey, or clinical simulation is authorized yet.
