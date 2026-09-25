import { ArrowLeft, ArrowRight, KeyRound, ShieldCheck, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { chatGPTSignInPath, getChatGPTUser } from "../chatgpt-auth";

export const dynamic = "force-dynamic";

export default async function AccessPage({ searchParams }: { searchParams: Promise<{ mode?: string }> }) {
  const user = await getChatGPTUser();
  if (user) {
    return (
      <main className="auth-shell"><section className="auth-card compact-card"><p className="eyebrow">WELCOME BACK</p><h1>You’re already signed in.</h1><p>Continue to create the person whose journey you’ll follow.</p><Button asChild size="lg" className="primary-cta w-full"><a href="/create-character">Create your character <ArrowRight /></a></Button></section></main>
    );
  }

  const { mode } = await searchParams;
  const isCreate = mode !== "login";
  const signInPath = chatGPTSignInPath("/create-character");

  return (
    <main className="auth-shell">
      <a className="back-link" href="/"><ArrowLeft /> Back to AESIVIA</a>
      <section className="auth-card">
        <div className="auth-icon" aria-hidden="true">{isCreate ? <UserPlus /> : <KeyRound />}</div>
        <p className="eyebrow">{isCreate ? "CREATE ACCOUNT" : "WELCOME BACK"}</p>
        <h1>{isCreate ? "Begin as yourself." : "Continue your journey."}</h1>
        <p className="auth-intro">{isCreate ? "Your AESIVIA profile keeps your character and future journeys together." : "Sign in to return to your character and saved progress."}</p>
        <Button asChild size="lg" className="primary-cta w-full"><a href={signInPath} target="_top">{isCreate ? "Continue with ChatGPT" : "Log in with ChatGPT"}<ArrowRight /></a></Button>
        <div className="auth-divider"><span>Secure account access</span></div>
        <div className="auth-assurance"><ShieldCheck aria-hidden="true" /><p>AESIVIA uses your ChatGPT identity. We never receive or store your password.</p></div>
        <p className="auth-switch">{isCreate ? "Already have an account?" : "New to AESIVIA?"} <a href={isCreate ? "/access?mode=login" : "/access?mode=create"}>{isCreate ? "Log in" : "Create account"}</a></p>
      </section>
      <p className="page-disclaimer">AESIVIA is a fictional simulation and is not medical advice.</p>
    </main>
  );
}
