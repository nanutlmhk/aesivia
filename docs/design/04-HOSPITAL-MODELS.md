# Hospital Models

## 1. Comparison purpose

The two hospitals are credible operating models used to explore how workflow, coordination, and information flow affect the same patient journey. They are not “bad hospital” and “good hospital,” and they must not be presented as proxies for named real organizations.

Working design labels:

- **Hospital A — Departmental model:** conventional, department-led, system-driven workflow with familiar roles, local queues, and point-to-point coordination.
- **Hospital B — Journey-coordinated model:** patient-journey-oriented workflow with shared situational awareness, explicit pathway ownership, and proactive dependency coordination.

Public-facing names should be neutral fictional hospital names. The operating-model labels belong in the design and debrief.

## 2. Shared baseline for v0.1

Both hospitals should share, as nearly as practical:

- the same emergency and cardiac service capability;
- comparable qualified staff numbers and skill mix over the scenario window;
- comparable diagnostic and treatment equipment;
- the same physical-distance budget for clinically important travel, even if layouts differ;
- the same base service hours;
- the same disease, patient, and exogenous scenario inputs;
- the same clinical-effect assumptions once an intervention is delivered;
- the same safety obligations; and
- comparable initial workload pressure.

Any unavoidable difference must be declared in the comparison report.

## 3. Shared hospital primitives

Each hospital is composed of:

- locations and travel links;
- actors, roles, shifts, workload, and capabilities;
- queues and prioritization rules;
- resources and availability calendars;
- workflows, steps, dependencies, and ownership;
- information artifacts, channels, and access rules;
- escalation and exception-recovery rules;
- policies and local workarounds; and
- an operational event stream.

Both hospitals use the same primitive types so differences are configuration and rules, not bespoke game logic.

## 4. Hospital A — departmental operating rules

### 4.1 Strengths

- Roles and departmental boundaries are familiar and locally optimized.
- Experienced staff may use resilient informal workarounds.
- Local teams can act quickly when the right person notices a problem.
- Fewer universal alerts can reduce broad notification burden.
- A clear chain within a department can support decisive local action.

### 4.2 Workflow pattern

- Arrival, registration, triage, assessment, diagnostics, specialty response, preparation, and transfer are managed primarily by their owning departments.
- Work typically enters local queues through orders, calls, messages, or handoff requests.
- Downstream preparation commonly begins after a formal upstream trigger.
- Cross-department progress depends on point-to-point communication and individual follow-through.
- The patient may be asked for the same information by separate roles because local documentation views differ.

### 4.3 Information pattern

- Information is recorded in role- or department-centered views.
- Critical communication may use a direct call or acknowledgment path.
- Broader shared status is limited; actors usually know their own queue and assigned tasks best.
- Handoffs summarize selected facts rather than exposing a common journey view.

### 4.4 Failure and recovery pattern

Possible failure modes include missed handoff content, delayed acknowledgment, duplicate collection, unclear cross-department ownership, or sequential dependency activation. Recovery often depends on an experienced actor noticing, calling, escalating, or bypassing the usual route.

These workarounds are a genuine strength but are variable and create reliance on individual knowledge.

## 5. Hospital B — journey-coordinated operating rules

### 5.1 Strengths

- A shared journey state makes current stage, owner, critical dependencies, and blockers visible to authorized actors.
- Pathway coordination can activate safe preparatory work in parallel.
- Explicit acknowledgments reduce ambiguity about receipt and ownership.
- Patient-reported information can be carried forward with provenance.
- Exception detection can prompt recovery before a deadline is missed.

### 5.2 Workflow pattern

- The patient journey has an accountable coordinating role while clinical authority remains with appropriate professionals.
- A recognized pathway can create linked tasks across departments.
- Independent prerequisites may proceed in parallel when safe.
- Readiness and blockers are updated explicitly.
- Transfer occurs when declared dependencies are satisfied, not merely when a message was sent.

### 5.3 Information pattern

- A shared journey view links facts, findings, decisions, current ownership, and next dependencies.
- Important events require role-appropriate acknowledgment.
- Patient identity and reported information are reused with verification, not blindly copied.
- Staff receive filtered, role-relevant notifications rather than omniscient knowledge.

### 5.4 Failure and recovery pattern

Possible failure modes include alert fatigue, stale shared status, over-reliance on the coordination layer, incorrect propagation, parallel work that must be redone, coordinator overload, or reduced flexibility when the case does not fit the pathway.

Recovery may use discrepancy detection, escalation timers, manual verification, or reverting to direct communication.

## 6. Dimension-by-dimension comparison

| Dimension | Hospital A: Departmental | Hospital B: Journey-coordinated |
|---|---|---|
| Primary organizing unit | Department/task | Patient journey/dependency network |
| Queue visibility | Primarily local | Shared filtered status plus local queues |
| Handoff | Point-to-point summary | Structured transfer plus shared state |
| Ownership | Step/department owner | Step owner plus journey coordinator |
| Downstream activation | Commonly sequential/formal trigger | Safe prerequisites may activate in parallel |
| Patient information | Recollected/verified locally | Reused with provenance and verification |
| Critical result | Routed to responsible role, often direct | Routed with acknowledgment and journey impact |
| Exception detection | Human vigilance/local escalation | Human vigilance plus explicit dependency monitoring |
| Characteristic strength | Local expertise and adaptable workarounds | Cross-boundary visibility and coordination |
| Characteristic risk | Gaps between departments | Coordination overhead and shared-system dependency |

## 7. v0.1 departments and spaces

Minimum common spaces:

- arrival/entrance or ambulance handoff point;
- identity/registration contact;
- triage/first clinical contact;
- assessment bay;
- diagnostic acquisition location or bedside interaction;
- treatment preparation area;
- transfer route;
- procedure abstraction area; and
- ICU/recovery or end-state scene.

Spaces may be visually arranged differently but travel-time differences must be measured and disclosed.

## 8. Staff model

Minimum roles should be defined by capability rather than exact staffing titles until localized:

- first-contact/triage clinician;
- emergency assessment clinician;
- bedside care role;
- diagnostic acquisition role;
- diagnostic interpretation/decision role;
- specialist/procedure decision role;
- transport/support role; and
- Hospital B journey-coordination capability, offset by an explicit staffing or workload cost.

Hospital A must receive a comparable total staffing budget. Hospital B's coordinator is not free additional labor; either the role has other duties or staffing allocation is rebalanced transparently.

## 9. Workload initialization

Both hospitals begin from a matched workload scenario expressed as demand and capability, not necessarily identical NPC placement. Exogenous events are seeded and mirrored where functionally equivalent. Differences may emerge because each operating model processes work differently.

The scenario must define:

- current queue sizes by service;
- staff availability and active assignments;
- resource readiness;
- one optional operational disruption; and
- which events are exogenous versus consequences of the hospital model.

## 10. Exceptions for the vertical slice

Use a small, controlled set. Candidate examples:

- an identity detail requires correction;
- a critical finding is created while the responsible actor is busy;
- a transfer dependency is incomplete;
- symptoms change during a wait; or
- a shared status/point-to-point message is not acknowledged promptly.

At most one major operational exception should be forced per comparison seed. Others remain probabilistic. The mirrored seed should create equivalent external pressure, while recovery differs according to hospital rules.

## 11. Explicit anti-bias rules

1. Do not author humiliating incompetence into Hospital A.
2. Do not give Hospital B perfect data, instant communication, unlimited parallelism, or zero coordination cost.
3. Do not change clinical efficacy by hospital.
4. Do not secretly change disease severity, patient cooperation, or staff skill.
5. Do not ensure that an exception harms A and is harmless in B.
6. Include at least one seed or branch where A's local expertise/workaround is faster than B's formal coordination.
7. Include at least one credible B-specific failure or trade-off.
8. Report resource utilization and staff burden alongside speed.
9. Review dialog and visual framing for moral coding of either hospital.
10. Test neutral blind descriptions with reviewers before naming the models.

## 12. Fairness audit required before implementation

Reviewers must approve a comparison matrix covering capability, staff minutes, equipment, distances, starting workload, information available at arrival, clinical rules, exception opportunities, and endpoint calculation. Any intentional asymmetry needs a rationale and a metric that exposes it.
