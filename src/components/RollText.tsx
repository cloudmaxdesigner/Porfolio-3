import type { ReactNode } from "react";
import { Text, type TextStyle } from "./Text";
import styles from "./RollText.module.css";

/**
 * The "Top text / Bottom text" pattern used by links and buttons: two copies of the
 * label stacked in a one-line mask; the active state rolls the second copy into view.
 */
export function RollText({
  children,
  variant,
  active,
  secondary,
  className,
}: {
  children: ReactNode;
  variant: TextStyle;
  active: boolean;
  /** Text for the bottom copy when it differs from the top (e.g. "email copied"). */
  secondary?: ReactNode;
  className?: string;
}) {
  return (
    <span className={[styles.mask, className].filter(Boolean).join(" ")} data-active={active}>
      <Text variant={variant} as="span" className={styles.top}>
        {children}
      </Text>
      <Text variant={variant} as="span" className={styles.bottom} aria-hidden="true">
        {secondary ?? children}
      </Text>
    </span>
  );
}
