import { useId, useState } from "react";
import { ArrowIcon } from "./ArrowIcon";
import { Text } from "./Text";
import styles from "./Accordion.module.css";

type Item = { question: string; answer: string };

/** Replacement for the Framer "CustomAccordion": one item open at a time, first open by default. */
export function Accordion({ items, firstOpen = true }: { items: Item[]; firstOpen?: boolean }) {
  const [open, setOpen] = useState<number | null>(firstOpen ? 0 : null);
  const id = useId();

  return (
    <div className={styles.accordion}>
      {items.map((item, i) => {
        const expanded = open === i;
        return (
          <div key={item.question} className={styles.item} data-open={expanded}>
            <h3 className={styles.heading}>
              <button
                type="button"
                className={styles.question}
                aria-expanded={expanded}
                aria-controls={`${id}-${i}`}
                id={`${id}-q-${i}`}
                onClick={() => setOpen(expanded ? null : i)}
              >
                <Text variant="b-large" as="span">
                  {item.question}
                </Text>
                <span className={styles.icon} data-open={expanded}>
                  <ArrowIcon variant="plus" />
                </span>
              </button>
            </h3>
            <div className={styles.panel} id={`${id}-${i}`} role="region" aria-labelledby={`${id}-q-${i}`} inert={!expanded}>
              <div className={styles.panelInner}>
                <Text variant="b-medium" className={styles.answer}>
                  {item.answer}
                </Text>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
