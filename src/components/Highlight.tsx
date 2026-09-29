import { CalendarCheck } from "@phosphor-icons/react";
import { Text } from "./Text";
import styles from "./Highlight.module.css";

export function Highlight({ title, text }: { title: string; text: string }) {
  return (
    <div className={styles.root}>
      <div className={styles.head}>
        <CalendarCheck size={24} weight="regular" aria-hidden="true" />
        <Text variant="b-xlarge">{title}</Text>
      </div>
      <Text variant="b-small">{text}</Text>
    </div>
  );
}
