import { useState } from "react";
import NumberFlow from "@number-flow/react";
import { ArrowIcon } from "./ArrowIcon";
import { Label } from "./Label";
import { PrimaryButton } from "./PrimaryButton";
import { Text } from "./Text";
import { Toggle } from "./Toggle";
import styles from "./PricingCard.module.css";

type Props = {
  title: string;
  description: string;
  mostPopular: boolean;
  toggleOptions: readonly [string, string];
  prices: readonly [number, number];
  subline: string;
  buttonText: string;
  links: readonly [string, string];
  benefits: string[];
};

const PERIOD = ["month", "quarter"] as const;

/** "Pricing Card": Default (monthly) / Toggled (quarterly), switched by the card's own Toggle. */
export function PricingCard({ title, description, mostPopular, toggleOptions, prices, subline, buttonText, links, benefits }: Props) {
  const [period, setPeriod] = useState<0 | 1>(0);

  return (
    <article className={styles.card} aria-labelledby={`plan-${title}`}>
      <div className={styles.top}>
        <div className={styles.heading}>
          <div className={styles.titleRow}>
            <Text variant="h3" id={`plan-${title}`}>
              {title}
            </Text>
            {mostPopular && <Label text="Popular" tone="light" />}
          </div>
          <Text variant="b-small">{description}</Text>
        </div>
        <Toggle options={toggleOptions} value={period} onChange={setPeriod} label={`${title} billing period`} />
        <div className={styles.priceBlock}>
          <div className={styles.priceSubline}>
            <div className={styles.price}>
              <span className={styles.amount}>
                <Text variant="label-big" as="span" color="white" className={styles.currency}>
                  $
                </Text>
                <NumberFlow
                  className={styles.number}
                  value={prices[period]}
                  format={{ useGrouping: true }}
                  willChange
                />
              </span>
              <Text variant="b-medium" as="span">
                / {PERIOD[period]}
              </Text>
            </div>
            <Text variant="b-small">{subline}</Text>
          </div>
          <PrimaryButton text={buttonText} href={links[period]} newTab fullWidth />
        </div>
      </div>
      {benefits.length > 0 && (
        <div className={styles.included}>
          <Text variant="b-medium" color="white">
            What's included.
          </Text>
          <ul className={styles.benefits}>
            {benefits.map((b) => (
              <li key={b} className={styles.benefit}>
                <ArrowIcon variant="plus" />
                <Text variant="b-small" as="span">
                  {b}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
