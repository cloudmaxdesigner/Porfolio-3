import { useState } from "react";
import { useIsPhone } from "../hooks/useMediaQuery";
import { AnimatedLine } from "./AnimatedLine";
import { Text } from "./Text";
import styles from "./ProcessAccordion.module.css";

type Step = { title: string; description: string };

/**
 * "Process Accordian": five "Process Card"s. On desktop/tablet one card is open (variants 1–5)
 * and hovering or focusing another opens it. On phones the cards become a swipeable row.
 */
export function ProcessAccordion({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0);
  const isPhone = useIsPhone();

  return (
    <ol className={styles.accordion} data-mobile={isPhone}>
      {steps.map((step, i) => {
        const open = isPhone || active === i;
        return (
          <li
            key={step.title}
            className={styles.card}
            data-open={open}
            onMouseEnter={() => setActive(i)}
          >
            <button
              type="button"
              className={styles.number}
              aria-expanded={open}
              aria-controls={`process-${i}`}
              onClick={() => setActive(i)}
              onFocus={() => setActive(i)}
              disabled={isPhone}
            >
              <Text variant="h3" as="span">
                {String(i + 1).padStart(2, "0")}
              </Text>
              <span className="visually-hidden">{step.title}</span>
            </button>
            <div className={styles.content} id={`process-${i}`} aria-hidden={!open}>
              <div className={styles.text}>
                <Text variant="b-xlarge" as="h3">
                  {step.title}
                </Text>
                <Text variant="b-medium">{step.description}</Text>
              </div>
              {open && <AnimatedLine />}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
