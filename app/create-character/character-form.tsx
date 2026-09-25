"use client";

import { ArrowRight, Check, CircleUserRound, Loader2, Sparkles } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";

const palettes = [
  { id: "dawn", skin: "#bc7a58", hair: "#19253d", shirt: "#47c7bd" },
  { id: "sun", skin: "#e0aa7d", hair: "#5d3328", shirt: "#f3b75a" },
  { id: "earth", skin: "#86583f", hair: "#16151c", shirt: "#ef7c70" },
  { id: "moon", skin: "#f0c6a1", hair: "#b46c52", shirt: "#82a7ff" },
];

export function CharacterForm({ accountName }: { accountName: string }) {
  const router = useRouter();
  const [palette, setPalette] = useState(palettes[0]);
  const [name, setName] = useState("");
  const [pronouns, setPronouns] = useState("they/them");
  const [ageBand, setAgeBand] = useState("45–54");
  const [context, setContext] = useState("Someone is counting on me");
  const [temperament, setTemperament] = useState("Thoughtful");
  const [status, setStatus] = useState<"idle" | "saving" | "error">("idle");
  const [error, setError] = useState("");
  const initial = useMemo(() => (name.trim()[0] ?? accountName[0] ?? "A").toUpperCase(), [name, accountName]);

  async function saveCharacter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim()) { setError("Give your character a name to continue."); return; }
    setStatus("saving");
    setError("");
    try {
      const response = await fetch("/api/character", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, pronouns, ageBand, context, temperament, palette: palette.id }),
      });
      if (!response.ok) throw new Error("save failed");
      router.push("/ready");
    } catch {
      setStatus("error");
      setError("We couldn’t save your character. Your choices are still here—please try again.");
    }
  }

  return (
    <form className="character-layout" onSubmit={saveCharacter}>
      <aside className="character-preview" aria-label="Character preview">
        <div className="preview-orbit" aria-hidden="true" />
        <div className="pixel-avatar" style={{ "--skin": palette.skin, "--hair": palette.hair, "--shirt": palette.shirt } as React.CSSProperties}>
          <span className="pixel-hair" /><span className="pixel-face">{initial}</span><span className="pixel-body" /><span className="pixel-legs" />
        </div>
        <p className="preview-kicker"><Sparkles /> YOUR PERSON</p>
        <h1>{name.trim() || "Who will you become?"}</h1>
        <p>{pronouns} · {ageBand}</p>
        <div className="trait-chips"><span>{temperament}</span><span>{context}</span></div>
      </aside>

      <section className="character-fields">
        <div className="form-heading"><p className="eyebrow">CREATE A PERSON, NOT A PATIENT</p><h2>Start with who they are.</h2><p>There are no perfect choices here. These details shape the story—not a score.</p></div>
        <div className="field-group">
          <Label htmlFor="name">Character name</Label>
          <Input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter a name" maxLength={40} autoComplete="off" aria-describedby="name-help" />
          <p id="name-help">This is how people in the world will address you.</p>
        </div>
        <div className="two-column-fields">
          <div className="field-group"><Label htmlFor="pronouns">Pronouns</Label><NativeSelect id="pronouns" value={pronouns} onChange={(e) => setPronouns(e.target.value)}><NativeSelectOption value="they/them">They / them</NativeSelectOption><NativeSelectOption value="she/her">She / her</NativeSelectOption><NativeSelectOption value="he/him">He / him</NativeSelectOption></NativeSelect></div>
          <div className="field-group"><Label htmlFor="age-band">Age band</Label><NativeSelect id="age-band" value={ageBand} onChange={(e) => setAgeBand(e.target.value)}><NativeSelectOption>35–44</NativeSelectOption><NativeSelectOption>45–54</NativeSelectOption><NativeSelectOption>55–64</NativeSelectOption><NativeSelectOption>65–74</NativeSelectOption></NativeSelect></div>
        </div>
        <fieldset className="field-group">
          <legend>Appearance palette</legend>
          <div className="palette-grid">
            {palettes.map((option) => <button key={option.id} type="button" className={palette.id === option.id ? "palette-option selected" : "palette-option"} onClick={() => setPalette(option)} aria-label={`Select ${option.id} palette`} aria-pressed={palette.id === option.id}><span style={{ background: option.skin }} /><span style={{ background: option.hair }} /><span style={{ background: option.shirt }} />{palette.id === option.id && <Check aria-hidden="true" />}</button>)}
          </div>
        </fieldset>
        <div className="field-group"><Label htmlFor="context">What matters today?</Label><NativeSelect id="context" value={context} onChange={(e) => setContext(e.target.value)}><NativeSelectOption>Someone is counting on me</NativeSelectOption><NativeSelectOption>I have somewhere important to be</NativeSelectOption><NativeSelectOption>I promised myself a quiet day</NativeSelectOption><NativeSelectOption>I need to finish something meaningful</NativeSelectOption></NativeSelect></div>
        <div className="field-group"><Label htmlFor="temperament">How do they meet uncertainty?</Label><NativeSelect id="temperament" value={temperament} onChange={(e) => setTemperament(e.target.value)}><NativeSelectOption>Thoughtful</NativeSelectOption><NativeSelectOption>Direct</NativeSelectOption><NativeSelectOption>Trusting</NativeSelectOption><NativeSelectOption>Questioning</NativeSelectOption></NativeSelect></div>
        {error && <p className="form-error" role="alert">{error}</p>}
        <Button type="submit" size="lg" className="primary-cta submit-character" disabled={status === "saving"}>{status === "saving" ? <><Loader2 className="animate-spin" /> Saving your character…</> : <><CircleUserRound /> Confirm character <ArrowRight /></>}</Button>
        <p className="form-footnote">Your health journey has not started. Day 01 pauses after confirmation.</p>
      </section>
    </form>
  );
}
