import { eq } from "drizzle-orm";
import { Check, LogOut, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getDb } from "../../db";
import { characters } from "../../db/schema";
import { chatGPTSignOutPath, requireChatGPTUser } from "../chatgpt-auth";

export const dynamic = "force-dynamic";

export default async function ReadyPage() {
  const user = await requireChatGPTUser("/ready");
  const [character] = await getDb().select().from(characters).where(eq(characters.userId, user.userId)).limit(1);
  if (!character) return <main className="auth-shell"><section className="auth-card compact-card"><h1>No character yet.</h1><p>Create your person before the journey begins.</p><Button asChild className="primary-cta"><a href="/create-character">Create character</a></Button></section></main>;

  return (
    <main className="ready-shell"><section className="ready-card">
      <div className="ready-stars" aria-hidden="true"><Sparkles /><Sparkles /></div><div className="ready-check" aria-hidden="true"><Check /></div>
      <p className="eyebrow">CHARACTER READY</p><h1>{character.name} is ready for their journey.</h1><p className="ready-lede">Today, we stop here. No condition has been assigned and no simulation clock has started.</p>
      <dl className="character-summary"><div><dt>Pronouns</dt><dd>{character.pronouns}</dd></div><div><dt>Age band</dt><dd>{character.ageBand}</dd></div><div><dt>Temperament</dt><dd>{character.temperament}</dd></div><div><dt>What matters</dt><dd>{character.context}</dd></div></dl>
      <div className="pause-panel"><span className="pause-icon" aria-hidden="true"><i /><i /></span><div><b>Day 01 complete</b><p>The Patient Journey begins in a future chapter.</p></div></div>
      <div className="ready-actions"><Button asChild variant="outline"><a href="/create-character">Edit character</a></Button><Button asChild variant="ghost"><a href={chatGPTSignOutPath("/")}><LogOut /> Log out</a></Button></div>
      <p className="safety-note centered"><ShieldCheck /> Fictional simulation · Not medical advice</p>
    </section></main>
  );
}
