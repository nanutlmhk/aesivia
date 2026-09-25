import { ArrowLeft } from "lucide-react";
import { requireChatGPTUser } from "../chatgpt-auth";
import { CharacterForm } from "./character-form";

export const dynamic = "force-dynamic";

export default async function CreateCharacterPage() {
  const user = await requireChatGPTUser("/create-character");
  return (
    <main className="character-shell">
      <header className="character-header">
        <a className="wordmark" href="/"><span className="wordmark-pulse" />AESIVIA</a>
        <span>CHARACTER CREATION · 01/01</span>
        <a className="back-link inline-back" href="/"><ArrowLeft /> Exit</a>
      </header>
      <CharacterForm accountName={user.fullName ?? "Traveler"} />
    </main>
  );
}
