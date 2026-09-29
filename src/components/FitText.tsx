import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import styles from "./FitText.module.css";

const BASE = 100;

/**
 * Scales a single line of text so it exactly fills its container's width
 * (the Framer "Fit Text" layout used for the hero wordmark).
 */
export function FitText({ children, className }: { children: ReactNode; className?: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [fontSize, setFontSize] = useState<number | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;
    const update = () => {
      const available = container.clientWidth;
      const natural = measure.getBoundingClientRect().width;
      if (available > 0 && natural > 0) setFontSize((available / natural) * BASE);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(container);
    document.fonts?.ready.then(update);
    return () => ro.disconnect();
  }, []);

  return (
    <span ref={containerRef} className={[styles.container, className].filter(Boolean).join(" ")}>
      <span ref={measureRef} className={styles.measure} style={{ fontSize: BASE }} aria-hidden="true">
        {children}
      </span>
      <span className={styles.text} style={{ fontSize: fontSize ?? undefined, visibility: fontSize ? "visible" : "hidden" }}>
        {children}
      </span>
    </span>
  );
}
