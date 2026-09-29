import type React from "react";
import { useInView } from "../hooks/useInView";
import styles from "./AnimatedLine.module.css";

type Props = {
  orientation?: "horizontal" | "vertical";
  /** Edge the line grows from (Framer `startingPosition` / `startPosition`). */
  start?: "flex-start" | "flex-end";
  /** Line colour — defaults to the Border Color token. */
  fill?: string;
  /** Cross-axis length for vertical lines (e.g. bar-chart heights). */
  length?: string;
  delay?: number;
  className?: string;
};

/** "Animated Horizontal Line" / "Animated Vertical Line": Hidden → Show when scrolled into view. */
export function AnimatedLine({
  orientation = "horizontal",
  start = "flex-start",
  fill = "var(--color-border)",
  length,
  delay = 0,
  className,
}: Props) {
  const [ref, inView] = useInView<HTMLSpanElement>();
  const style: Record<string, string> = {
    "--line-fill": fill,
    "--line-delay": `${delay}ms`,
    ...(length ? (orientation === "vertical" ? { height: length } : { width: length }) : {}),
  };

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={[styles.line, className].filter(Boolean).join(" ")}
      data-orientation={orientation}
      data-start={start}
      data-visible={inView}
      style={style as React.CSSProperties}
    >
      <span className={styles.inner} />
    </span>
  );
}
