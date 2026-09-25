"use client";

import { ArrowRight, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function LandingExperience({ signedIn }: { signedIn: boolean }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(12);

  useEffect(() => {
    const startedAt = Date.now();
    const ticker = window.setInterval(() => {
      setProgress(Math.min(100, 12 + (Date.now() - startedAt) / 9));
    }, 90);
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => {
      window.clearInterval(ticker);
      window.clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <main className="loading-screen" aria-busy="true" aria-label="Loading AESIVIA">
        <div className="loading-mark" aria-hidden="true"><span /><span /><span /></div>
        <p className="eyebrow">AESIVIA</p>
        <h1>Every journey changes a life.</h1>
        <Progress value={progress} className="loading-progress" />
        <p className="loading-copy">Waking the world…</p>
      </main>
    );
  }

  return (
    <main className="landing-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="/" aria-label="AESIVIA home"><span className="wordmark-pulse" aria-hidden="true" />AESIVIA</a>
        <span className="day-label">DAY 01 · YOUR STORY BEGINS</span>
      </nav>

      <section className="hero">
        <img className="hero-art" src="/art/aesivia-hospital-dawn.png" alt="Pixel-art scene of a patient arriving at a welcoming hospital at dawn" />
        <div className="hero-shade" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">A HEALTHCARE JOURNEY RPG</p>
          <h1>You are not a case.<span>You are the journey.</span></h1>
          <p className="hero-copy">Create a person. Step into a living healthcare world. Every choice, every handoff, and every minute can change what happens next.</p>
          <div className="hero-actions">
            {signedIn ? (
              <Button asChild size="lg" className="primary-cta"><a href="/create-character">Create your character <ArrowRight /></a></Button>
            ) : (
              <>
                <Button asChild size="lg" className="primary-cta"><a href="/access?mode=create">Create account <ArrowRight /></a></Button>
                <Button asChild size="lg" variant="outline" className="secondary-cta"><a href="/access?mode=login">Log in</a></Button>
              </>
            )}
          </div>
          <p className="safety-note"><ShieldCheck aria-hidden="true" /> Fictional simulation · Not medical advice</p>
        </div>

        <div className="world-strip" aria-label="AESIVIA principles">
          <div><HeartPulse aria-hidden="true" /><span><b>Play as a person</b>Not a diagnosis</span></div>
          <div><Sparkles aria-hidden="true" /><span><b>Enter a living system</b>People, places, time</span></div>
          <div><ShieldCheck aria-hidden="true" /><span><b>Your journey is private</b>Saved to your account</span></div>
        </div>
      </section>
    </main>
  );
}
