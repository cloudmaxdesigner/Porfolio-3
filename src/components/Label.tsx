import { Text } from "./Text";
import styles from "./Label.module.css";

export function Label({ text, tone = "dark" }: { text: string; tone?: "dark" | "light" }) {
  return (
    <span className={styles.label} data-tone={tone}>
      <Text variant="label-small" as="span" className={styles.text}>
        {text}
      </Text>
    </span>
  );
}
