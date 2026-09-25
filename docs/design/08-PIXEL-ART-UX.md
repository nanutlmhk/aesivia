# Pixel-Art and UX Direction

## 1. Experience goal

AESIVIA should look approachable enough to invite exploration and serious enough to respect illness, care, and loss. Pixel art is a language of abstraction and legibility—not permission to trivialize healthcare.

The target is a top-down or three-quarter 2D RPG world where the player walks through real spaces, notices people and activity, speaks to characters, waits, and experiences care. Hospital mechanics should be visible in behavior and environment before they appear in an analytical overlay.

## 2. Visual principles

- **Human scale:** Keep the patient sprite and nearby actors large enough for posture and emotion to read.
- **Functional spaces:** Layout, equipment silhouettes, signage, doors, queues, and staff movement communicate purpose.
- **Controlled palette:** Calm base colors; reserve high-saturation accents for interaction and safety-relevant change.
- **No moral palette:** Hospital A cannot be grimy/red while B is pristine/blue. Both must look credible, maintained, and caring.
- **Readable urgency:** Use layered animation, sound, staff behavior, and restrained UI changes rather than flashing arcade warnings.
- **Dignity:** No exaggerated collapse, gore, comic sound effects, or celebratory treatment of crisis.
- **Accessible contrast:** Critical cues cannot rely on color alone.

## 3. Character design

The patient sprite supports limited customization without turning health risk into appearance stereotypes. Required expressive states may include:

- neutral/ordinary activity;
- discomfort;
- slowed or supported movement;
- seated/lying care state;
- reduced responsiveness; and
- recovery/rest.

Staff roles should be distinguishable through silhouette, badge/icon, and context, not only uniform color. NPCs should have names or role labels appropriate to what the patient knows.

## 4. World interaction language

Primary interactions:

- move;
- examine/notice;
- speak/respond;
- follow;
- wait;
- call/request help;
- confirm/correct information; and
- accept/question/delay/refuse when available.

Interactable cues must be subtle in ordinary scenes and stronger during tutorial moments. The game should avoid a world covered in quest markers.

## 5. Subjective-status HUD

During play, the HUD shows what the patient can reasonably perceive:

- a small portrait/identity anchor;
- plain-language felt-state cues;
- mobility/interaction limitation when relevant;
- current immediate intention, such as “wait here” or “follow the nurse”; and
- a help/interact prompt.

It must not show:

- diagnosis before communication;
- hidden disease phase or mortality risk;
- exact internal clinical values the patient does not know;
- omniscient hospital queue data;
- “correct choice” markers; or
- a score multiplier/countdown to treatment.

## 6. Symptoms as multimodal cues

Symptoms should be communicated through a combination of:

- sprite posture and animation;
- movement speed or input feel, used cautiously;
- vignette/palette modulation with accessibility controls;
- ambient sound filtering or heartbeat-like cues, clinically reviewed and non-literal;
- brief first-person text or thought fragments; and
- dialog availability/effort.

No single sensory channel carries essential information. Players can reduce motion, flashing, audio intensity, and input disruption.

## 7. Dialog

- Use short, natural exchanges that occur in place whenever possible.
- Identify who is speaking and what the patient knows about their role.
- Distinguish thought, spoken response, staff-to-patient speech, and overheard system communication.
- Time-sensitive dialog choices must clearly indicate whether simulation time continues.
- Choices should communicate intent rather than game mechanics: “Tell them it started earlier” rather than “Improve diagnostic accuracy +10.”
- Repeated questions should feel intentional when they represent verification and burdensome when they represent fragmentation; the debrief can distinguish them.

## 8. Showing the hospital as a system

The player learns the system by seeing:

- staff entering/leaving rooms for competing work;
- a transport role arriving or being delayed;
- a phone/message followed by acknowledgment or silence;
- doors/rooms becoming ready;
- an actor checking identity or clarifying information;
- a handoff at the bedside or during movement;
- parallel preparation; and
- visible recovery from an exception.

Avoid floating pipeline arrows during normal play. When necessary, the post-run overlay can map the experienced moments to workflow concepts.

## 9. Hospital-model differentiation

Differentiate operating models through behavior, spatial affordances, dialog, and information artifacts—not quality coding.

Hospital A may visibly emphasize department stations, direct calls, local boards, and individual follow-through. Hospital B may emphasize shared journey status, explicit acknowledgments, and coordinated parallel preparation. Both use equally polished art, caring staff, and comparable equipment.

## 10. Information disclosure layers

### During the run

Patient-known information only, expressed in-world.

### Immediately after the run

Plain-language diagnosis reveal if not already communicated, outcome, key journey moments, and disclaimer.

### Detailed debrief

Aligned timeline, actor knowledge, dependencies, exceptions, and modeled disease state.

### Advanced simulation audit

Seed, versions, consequential draws, and model limitations. This view is optional and clearly framed as simulation data.

## 11. Waiting without boredom

Waiting is necessary evidence, but it must be designed. During waits, the player may:

- observe relevant world activity;
- notice symptom changes;
- speak to an available person;
- reflect on personal context;
- use a help interaction; or
- choose a time-compression prompt when no meaningful event is pending.

Time compression must advance the simulation honestly. Do not fill every wait with minigames that trivialize distress.

## 12. Deterioration and death UX

Deterioration narrows input and sensory bandwidth gradually when the model permits. Loss of agency is communicated, not sprung as a control failure. Clinical response remains visible from the patient's limited perspective.

Death uses a restrained transition, optional content warning settings, and a respectful pause. The next screen offers “End journey” and “View what happened,” not “Retry” as an arcade prompt.

## 13. Debrief visual language

The debrief can use clean diagrams distinct from the pixel world while preserving warmth. Recommended elements:

- aligned horizontal timelines;
- icons for waiting, active care, movement, handoff, finding, decision, and exception;
- a “who knew what when” expansion;
- uncertainty/limitation notes adjacent to metrics; and
- no red/green winner coding.

## 14. Accessibility baseline

- remappable input where platform permits;
- keyboard/controller parity target;
- scalable text and high-legibility font option;
- captions and speaker labels;
- color-independent status cues;
- reduced motion/flashing settings;
- audio sliders and visual equivalents;
- hold/toggle options;
- dialog history;
- configurable time pressure for reading without changing simulation rules; and
- explicit warnings for medical crisis and death content.

## 15. Audio direction

Audio should create place and tension through environmental layers: footsteps, doors, distant conversation, devices at an abstract level, and room tone. Avoid alarm overload and manipulative horror scoring. Hospital B cannot sound calm by default while Hospital A sounds chaotic; soundscape intensity follows actual simulated state.

## 16. UX validation questions

- Can players identify what they can do without quest-marker clutter?
- Do they feel like a person in a system rather than a cursor in a process map?
- Can they distinguish waiting from a frozen game?
- Do they understand when time is advancing?
- Is the diagnosis hidden without making the experience confusing?
- Are hospital differences perceptible without moral visual bias?
- Is deterioration understandable and respectful?
- Can players with no medical background understand the debrief?
