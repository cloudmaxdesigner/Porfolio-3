import styles from "./ArrowIcon.module.css";

type Props = {
  /** `plus` is the resting state, `arrow` the hover/active state (Framer variants "Plus" / "Arrow"). */
  variant: "plus" | "arrow";
  fill?: string;
  className?: string;
};

/**
 * Three 2px bars that morph between a plus and a diagonal arrow.
 * Rebuilt from the "Arrow Icon" component; transitions between variants are CSS.
 */
export function ArrowIcon({ variant, fill = "var(--color-white)", className }: Props) {
  return (
    <span
      className={[styles.icon, className].filter(Boolean).join(" ")}
      data-variant={variant}
      style={{ ["--fill" as string]: fill }}
      aria-hidden="true"
    >
      <span className={styles.vertical} />
      <span className={styles.left} />
      <span className={styles.right} />
    </span>
  );
}
