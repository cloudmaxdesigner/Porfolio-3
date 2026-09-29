import { useEffect, useState } from "react";
import { setScrollLocked } from "../hooks/useLenis";
import { Logo } from "./Logo";
import { Text } from "./Text";
import styles from "./IntroAnimation.module.css";

type Phase = "intro" | "exit" | "done";

const HOLD_MS = 1400;
const EXIT_MS = 900;

/**
 * "Intro Animation" + "Logo Animation": a full-screen Black 90 panel with the logo
 * ("Frame 1"), which then collapses ("Exit") and unmounts.
 */
export function IntroAnimation({ subtitle = "Design studio" }: { subtitle?: string }) {
  const [phase, setPhase] = useState<Phase>(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "done" : "intro",
  );

  useEffect(() => {
    if (phase === "done") return;
    if (phase === "intro") {
      setScrollLocked(true);
      const t = window.setTimeout(() => setPhase("exit"), HOLD_MS);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => setPhase("done"), EXIT_MS);
    return () => window.clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase === "done") setScrollLocked(false);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div className={styles.root} data-phase={phase} aria-hidden="true">
      <div className={styles.bg} />
      <div className={styles.logo}>
        <Logo size={48} />
        <Text variant="b-medium">{subtitle}</Text>
      </div>
    </div>
  );
}
