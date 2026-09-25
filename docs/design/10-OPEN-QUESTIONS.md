# Open Questions and Human Decisions

**Rule:** Items marked **BLOCKER** require a human decision or named validation owner before implementation begins. Other items can remain provisional only if the implementation plan explicitly isolates them as replaceable content.

## 1. Product and audience

1. **BLOCKER — Primary audience:** Is v0.1 primarily for general players, hospital leaders/staff, prospective partners, or research/validation stakeholders?
2. **BLOCKER — Intended use:** Is the first release a private concept prototype, stakeholder demo, public game demo, or research instrument?
3. What age rating and content-warning standard should guide illness and death presentation?
4. What emotional tone should dominate: grounded drama, hopeful systems exploration, or a more stylized RPG adventure?
5. Is “Every journey changes a life” final copy, a working direction, or one option to test?

## 2. Clinical scope and governance

1. **BLOCKER — Disease selection:** Confirm STEMI-centered acute coronary event as the first disease or choose another condition.
2. **BLOCKER — Clinical reviewers:** Name accountable reviewers across emergency care, cardiology, nursing, pre-hospital care, patient safety, and patient experience.
3. **BLOCKER — Clinical abstraction:** Approve hidden phases, minimum findings, treatment abstraction, and endpoint definitions.
4. **BLOCKER — Parameters:** Define and validate all time-risk relationships, intervention effects, complication probabilities, and response ranges.
5. Which major complication family, if any, belongs in the first slice?
6. Which patient presentations and exclusions are safe and credible for v0.1?
7. How should capacity, emergency consent, and surrogate/trusted-person involvement be modeled?
8. What exact disclaimers and emergency-language wording are required in each target market?
9. How will clinical content changes be reviewed, versioned, approved, and retired?

## 3. Patient identity, equity, and representation

1. **BLOCKER — Trait boundaries:** Which character traits can affect disease/symptom models, and which must remain presentation-only in v0.1?
2. How will age, sex/gender, ethnicity, disability, language, socioeconomic context, and health literacy be represented without encoding unreviewed stereotypes?
3. Will the first slice include atypical symptom presentation? If so, what validation and bias testing is required?
4. Are communication/accessibility barriers in scope, or should v0.1 use one language/communication baseline?
5. How diverse should staff and patient sprites/dialog be in the prototype?
6. Is a personal obligation merely narrative, or can it influence choices and timing?

## 4. Player agency and ethics

1. **BLOCKER — Help routes:** Which pre-hospital choices are offered, and how do we prevent players from interpreting them as universal medical advice?
2. **BLOCKER — Refusal/delay:** How much can the player delay or refuse care, and how are consequences framed without blame?
3. Can prior-run knowledge be used to choose different disclosure, or should controlled comparison provide a “repeat equivalent decisions” mode?
4. How should the game respond when the player intentionally attempts disruptive or implausible actions?
5. How much agency remains during severe deterioration?
6. Should death be enabled in the first public/demo build, or only after sensitivity testing?

## 5. Hospital A/B experiment

1. **BLOCKER — Target future model:** What specific operating principles from the intended future hospital model must Hospital B embody?
2. **BLOCKER — Baseline matrix:** Approve matched capabilities, staff budget, equipment, travel-time budget, workload, and exogenous events.
3. Who validates that Hospital A is credible and not a caricature?
4. Who validates Hospital B's coordination costs and failure modes?
5. Is Hospital B's journey coordinator a dedicated role, distributed capability, or digital coordination function?
6. Which safe tasks may run in parallel in B, and which hard dependencies remain sequential?
7. Which seed/branch demonstrates a credible Hospital A advantage?
8. What language and fictional names avoid “legacy equals bad / future equals good” framing?
9. Should the player know which model they are entering before the run?

## 6. Simulation and randomness

1. **BLOCKER — Comparison semantics:** Approve named streams and opportunity-keyed draws as the definition of “same seed.”
2. **BLOCKER — Fidelity:** Choose the smallest physiology/disease model that supports the scenario without false precision.
3. How are exogenous operational events mirrored when layouts/workflows differ?
4. Are clinical interpretation and intervention response stochastic in v0.1, or fixed after disease-seed initialization?
5. What variation is acceptable between repeated runs with changed player choices?
6. How many seeds/endpoints must be reviewed before judging the balance credible?
7. Which run data is exposed to players versus retained only for internal validation?

## 7. Scenario and pacing

1. **BLOCKER — Simulation duration:** What real/simulation time span does the slice cover, and where are time jumps allowed?
2. **BLOCKER — Content budget:** Approve the one-chain, one-treatment, one-complication, 4–6 decision constraint.
3. Which ordinary-life opening and personal context best humanize the patient without delaying onset?
4. Which operational exception is forced, and which remain probabilistic?
5. How often should the no-complication path occur?
6. What endpoint is emotionally complete enough for a vertical slice?
7. Is the debrief inside or outside the 10–20 minute target?

## 8. Scoring and evidence

1. **BLOCKER — No composite score:** Confirm that the product will use a multi-dimensional evidence profile rather than declare a winner.
2. Which seven timestamps are required for the first comparison view?
3. How is “unexplained wait” defined from the patient's perspective?
4. Which staff-effort metrics are meaningful rather than merely countable?
5. What causal wording can be used in the debrief?
6. Will internal batch analysis show distributions while the player sees only their paired runs?
7. How are metrics validated against the event log and kept version-compatible?

## 9. Art, UX, and accessibility

1. **BLOCKER — Presentation perspective:** Top-down or three-quarter view, target resolution, and tile/sprite scale.
2. **BLOCKER — Platform/input:** Initial platform and primary input method.
3. Approve a non-moral visual differentiation plan for the two hospitals.
4. How are pain, anxiety, and reduced consciousness shown without inaccessible distortion?
5. Which accessibility settings are required for the prototype versus public release?
6. What content warnings and skip/exit options accompany deterioration and death?
7. How much medical terminology appears during play versus debrief?

## 10. Technical and production

1. **BLOCKER — Engine/platform constraints:** Select only after the design is approved.
2. **BLOCKER — Content ownership:** Who owns game rules, clinical content, hospital operations content, UX, and approvals?
3. What is the authoritative format for definitions and review metadata?
4. Is the first prototype fully local/offline?
5. What telemetry, if any, is ethically appropriate, consented, and necessary?
6. What automated determinism, fairness, and batch-seed checks are release gates?
7. What assets may be temporary, and what needs original production?
8. How will localization affect layout, timing, dialog, policy, and clinical review?
9. **PARTIALLY RESOLVED — GitHub destination:** Use `https://github.com/nanutlmhk/aesivia.git`; its default branch is `main`. The working-branch convention and merge method remain to be chosen.
10. **BLOCKER FOR DAY 1 DELIVERY — Container topology:** Is one web container sufficient, or does the approved authentication/persistence design require supporting services?

## 11. Validation and research boundaries

1. **BLOCKER — Claim language:** Define what AESIVIA may and may not claim in demos, marketing, and reports.
2. Does the team want formative playtesting, educational evaluation, operational validation, or formal research later?
3. If real clinicians or patients participate, what consent, privacy, ethics, and compensation practices apply?
4. What evidence would justify adding a “validation/system overlay” later?
5. How will the team prevent stakeholders from treating simulated A/B results as evidence about real hospitals?

## 12. Recommended decision order

1. Audience and intended use.
2. Disease and clinical governance.
3. Hospital B target principles and A/B fairness matrix.
4. Simulation fidelity and same-seed semantics.
5. Scenario/content budget and sensitive-outcome policy.
6. Evidence profile and claim boundaries.
7. Visual perspective, platform, and accessibility baseline.
8. Only then: engine and implementation plan.

No implementation should begin until the BLOCKER items needed for the chosen prototype scope are resolved or explicitly assigned with replaceable placeholders approved by human reviewers.

## 13. Day 1 front-door milestone

The agreed first-day boundary is documented in `12-DAY-01-SCOPE.md`: loading/landing, account creation or login, character creation, and then an intentional pause before any disease or gameplay begins. The approved implementation must run through Docker and be committed and pushed to `https://github.com/nanutlmhk/aesivia.git`, whose default branch is `main`. Account realism, authentication, persistence, exact character fields, platform breakpoints, art direction, final pause-screen copy, and the working-branch convention remain decisions required before that milestone is implemented.
