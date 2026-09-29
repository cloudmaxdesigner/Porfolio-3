import { Text } from "./Text";
import styles from "./Availability.module.css";

const TOTAL_SLOTS = 5;

/** "Availability" = "Slots" (5 bars, the first `openSlots` lit) + "N slots open" + month. */
export function Availability({ openSlots, month }: { openSlots: number; month: string }) {
  const open = Math.max(0, Math.min(TOTAL_SLOTS, openSlots));
  return (
    <div className={styles.root}>
      <span className={styles.slots} aria-hidden="true">
        {Array.from({ length: TOTAL_SLOTS }, (_, i) => (
          <span key={i} className={styles.slot} data-open={i < open} />
        ))}
      </span>
      <span className={styles.text}>
        <Text variant="label-small" as="span" color="white">
          {open} {open === 1 ? "slot" : "slots"} open
        </Text>
        <Text variant="label-small" as="span">
          {month}
        </Text>
      </span>
    </div>
  );
}
