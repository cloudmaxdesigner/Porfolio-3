import { ArrowSquareRight } from "@phosphor-icons/react";
import styles from "./SliderArrow.module.css";

/** "Slider Arrows": `direction="prev"` is the Framer instance rotated 180°. */
export function SliderArrow({
  direction,
  onClick,
  label,
  size = "large",
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
  size?: "small" | "large";
}) {
  return (
    <button type="button" className={styles.arrow} data-size={size} onClick={onClick} aria-label={label}>
      <ArrowSquareRight size={size === "large" ? 24 : 18} style={{ transform: direction === "prev" ? "rotate(180deg)" : undefined }} aria-hidden="true" />
    </button>
  );
}
