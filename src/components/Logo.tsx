import styles from "./Logo.module.css";

/** "MUGEN©" wordmark. `size` scales everything via font-size. */
export function Logo({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <span className={[styles.logo, className].filter(Boolean).join(" ")} style={{ fontSize: size }}>
      MUGEN<span className={styles.mark}>©</span>
    </span>
  );
}
