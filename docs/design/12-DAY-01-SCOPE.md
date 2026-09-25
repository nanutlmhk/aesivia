# Day 1 Scope — Front Door and Character Creation

**Status:** Approved and implemented Day 1 work boundary
**Phase:** Front-door implementation only; all clinical gameplay remains paused
**Stop point:** Character creation completed; no gameplay begins

**Approved GitHub destination:** `https://github.com/nanutlmhk/aesivia.git`
**Repository default branch:** `main` (verified 26 September 2026)

## 1. Day 1 outcome

A user can enter the AESIVIA website and move through the complete front-door experience:

**Open website → Loading experience → Landing page → Create account or log in → Create character → Save/confirm character → Pause**

The final screen clearly communicates that the patient's journey will begin later. Day 1 ends there.

## 2. Included screens

### 2.1 Loading experience

- AESIVIA identity and tagline direction: *Every journey changes a life.*
- Short, accessible loading state.
- Reduced-motion-safe presentation.
- No fake delay when content is already ready.
- Friendly recovery state if initial loading fails.

### 2.2 Landing page

- Clear introduction to AESIVIA as a 2D pixel-art healthcare journey RPG/simulation.
- Primary actions: `Create account` and `Log in`.
- Brief statement that v0.1 follows the Patient Journey.
- Visible simulation disclaimer: fictional game, not medical advice or clinical decision support.
- Basic responsive and keyboard-accessible behavior.

### 2.3 Create account

- Minimal account fields required for the prototype.
- Password visibility and validation feedback.
- Acceptance of applicable terms/privacy text only if real policies exist.
- Link to log in for an existing user.
- Clear error, success, and processing states.

The exact authentication method, data retention, privacy policy, and whether accounts are real or prototype-only remain implementation decisions requiring approval before coding.

### 2.4 Log in

- Account identifier and password or the approved authentication alternative.
- Password visibility control.
- Clear error and processing states.
- Link to create an account.
- Password recovery only if supported by the chosen authentication approach; otherwise do not show a nonfunctional control.

### 2.5 Character creation

The player creates a person, not a diagnosis. Day 1 character creation may include:

- name;
- pronouns;
- visual appearance from an approved, inclusive option set;
- scenario-supported age band;
- communication preference/language if supported;
- one personal context;
- one temperament tendency; and
- accessibility preferences relevant to the experience.

Rules:

- Do not show or ask the player to select a disease.
- Do not expose risk scores or encourage clinical min-maxing.
- Clearly distinguish identity/presentation choices from traits that may later affect the simulation.
- Do not imply that appearance, ethnicity, gender, disability, or language is a hidden penalty.
- Allow review and correction before confirmation.
- Preserve the character only according to the approved account/data model.

### 2.6 Day 1 pause screen

After character confirmation, show:

- the completed character;
- a short confirmation that the character is ready;
- a message that the Patient Journey has not started yet; and
- a safe exit/log-out action.

Do not assign or reveal a disease, generate the patient seed, start simulation time, select a hospital, or preview a clinical outcome.

## 3. Explicitly excluded from Day 1

- disease assignment or progression;
- symptoms or the ordinary-life health event;
- PatientState/DiseaseState simulation;
- hospital selection or entry;
- Hospital A/B workflows;
- clinical decisions or treatment;
- same-seed replay and comparison;
- scoring, journey timeline, or debrief;
- Hospital Journey mode;
- real clinical content;
- public deployment, analytics, or production identity infrastructure unless separately approved.

## 4. Day 1 completion criteria

Day 1 is complete only when the approved implementation later demonstrates that:

1. a new visitor can reach the landing page from a loading state;
2. the visitor can choose account creation or login;
3. both account paths have complete visible states, including errors;
4. an authenticated user can create and review a character;
5. the character confirmation reaches the intentional pause screen;
6. refreshing or returning behaves according to the approved persistence rule;
7. the flow works at the agreed desktop/mobile breakpoints and with keyboard navigation; and
8. no gameplay, disease, hospital, or clinical simulation begins;
9. the approved application builds and runs through Docker using documented commands;
10. a fresh checkout can reproduce the Day 1 experience without relying on untracked local files; and
11. the completed Day 1 milestone is committed and pushed to the approved GitHub repository.

## 5. Decisions required before Day 1 implementation

- Is Day 1 a clickable local prototype or a connected website?
- Are accounts real, simulated locally, or deferred behind a prototype identity?
- Which authentication method and privacy/data-retention rules apply?
- Which platform and responsive breakpoints are required?
- Which exact character fields are included?
- Which appearance options and art direction are approved?
- Does character data persist across sessions?
- What happens when an existing user already has a character?
- What final copy appears on the pause screen?
- What working-branch convention should be used before merging to the confirmed `main` default branch?
- Which deployment target should the Docker image support, and is local development orchestration required?

## 6. Docker delivery requirements

Once implementation is explicitly approved, Day 1 will be container-first:

- the website must build and run in Docker;
- the runtime image should be minimal and run without elevated privileges where the selected stack permits;
- dependency versions must be reproducible;
- configuration and secrets must come from the environment and must not be committed;
- a template environment file may list required variable names without real credentials;
- generated dependencies, build output, local data, and secrets must be excluded from the build context and Git;
- startup and health behavior must fail clearly when required configuration is missing; and
- the project documentation must provide the exact local build, run, stop, and verification steps.

Use a multi-container setup only if Day 1 genuinely requires more than the web application. The authentication and persistence decision determines whether a supporting service is necessary.

## 7. Git and GitHub delivery requirements

After implementation approval and once the repository destination is confirmed:

- initialize or use the approved Git repository;
- preserve a clear, reviewable commit history;
- commit the Day 1 scope as a bounded milestone;
- exclude credentials and machine-specific files;
- verify the Dockerized flow before the milestone commit;
- push to the approved GitHub remote and branch; and
- report the commit identifier and repository/branch after a successful push.

The current workspace is not yet a Git repository and has no configured remote. The confirmed destination is `https://github.com/nanutlmhk/aesivia.git`, whose default branch is `main`. Repository integration, committing, and pushing are deferred until the design is explicitly approved. Because the remote already contains history, its contents must be inspected and preserved before any implementation changes are integrated.

## 8. Hard stop rule

When the character is confirmed and the pause screen is reached, Day 1 work stops. No health event, disease generation, gameplay map, hospital scene, or simulation code is included. Implementation still requires explicit human approval of the design package and the Day 1 decisions above.
