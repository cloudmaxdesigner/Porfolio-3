import { useEffect, useState } from "react";
import { Lightning } from "@phosphor-icons/react";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";
import styles from "./BentoRings.module.css";

const STEPS = 4;
const INTERVAL_MS = 500;

/**
 * "Bento faster animation": three concentric rings around a lightning bolt. Variants 1→4
 * light the rings from the inside out; this component cycles through them.
 */
export function BentoRings() {
  const [step, setStep] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => setStep((s) => (s + 1) % STEPS), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  // step 0: none lit, 1: inner, 2: middle, 3: outer
  return (
    <div className={styles.outer} data-lit={step === 3} aria-hidden="true">
      <div className={styles.middle} data-lit={step === 2}>
        <div className={styles.inner} data-lit={step === 1}>
          <Lightning size={28} weight="fill" />
        </div>
      </div>
    </div>
  );
}
