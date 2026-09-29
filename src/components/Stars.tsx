import styles from "./Stars.module.css";

const STAR = "M12 17.77L18.18 21.5L16.54 14.47L22 9.74L14.81 9.13L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77Z";

export function Stars({ count = 5, size = 12 }: { count?: number; size?: number }) {
  return (
    <span className={styles.stars} role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
          <path d={STAR} fill="currentColor" />
        </svg>
      ))}
    </span>
  );
}
