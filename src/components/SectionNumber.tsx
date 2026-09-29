import { Text } from "./Text";
import styles from "./SectionNumber.module.css";

/** "Section name - number": `[01] Projects`. */
export function SectionNumber({ count, title, showCount = true }: { count: number; title: string; showCount?: boolean }) {
  return (
    <div className={styles.root}>
      {showCount && (
        <Text variant="b-medium" color="gray-50">
          [{String(count).padStart(2, "0")}]
        </Text>
      )}
      <Text variant="b-medium" color="white">
        {title}
      </Text>
    </div>
  );
}
