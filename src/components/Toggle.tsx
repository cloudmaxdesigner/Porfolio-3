import { useId } from "react";
import { Text } from "./Text";
import styles from "./Toggle.module.css";

type Props = {
  options: readonly [string, string];
  value: 0 | 1;
  onChange: (value: 0 | 1) => void;
  label: string;
};

/** Two-option segmented control ("Toggle" variants 1 / 2). */
export function Toggle({ options, value, onChange, label }: Props) {
  const id = useId();
  return (
    <div className={styles.toggle} role="radiogroup" aria-label={label} data-value={value}>
      <span className={styles.bg} aria-hidden="true" />
      {options.map((option, i) => (
        <button
          key={option}
          id={`${id}-${i}`}
          type="button"
          role="radio"
          aria-checked={value === i}
          className={styles.option}
          data-active={value === i}
          onClick={() => onChange(i as 0 | 1)}
        >
          <Text variant="b-small" as="span">
            {option}
          </Text>
        </button>
      ))}
    </div>
  );
}
