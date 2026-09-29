import { useEffect, useState } from "react";
import { GlobeSimple } from "@phosphor-icons/react";
import { Text } from "./Text";
import styles from "./Location.module.css";

/** "Location": city label plus the live local time (replaces the TimeLocationPicker module). */
export function Location({ label, timezone }: { label: string; timezone: string }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 15_000);
    return () => window.clearInterval(id);
  }, []);

  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(now);

  return (
    <div className={styles.root}>
      <GlobeSimple size={16} aria-hidden="true" />
      <Text variant="b-small" as="span" color="white">
        {label}
      </Text>
      <Text variant="b-small" as="time" dateTime={now.toISOString()}>
        {time}
      </Text>
    </div>
  );
}
