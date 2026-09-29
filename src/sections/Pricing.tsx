import NumberFlow from "@number-flow/react";
import { people, pricing } from "../data/content";
import { AuthorCard } from "../components/AuthorCard";
import { Availability } from "../components/Availability";
import { PrimaryButton } from "../components/PrimaryButton";
import { PricingCard } from "../components/PricingCard";
import { Section, SectionHeader } from "../components/Section";
import { Text } from "../components/Text";
import pricingStyles from "../components/PricingCard.module.css";
import styles from "./Pricing.module.css";

export function Pricing() {
  const { custom, bookCall } = pricing;
  return (
    <Section id="pricing" aria-labelledby="pricing-heading">
      <SectionHeader
        count={5}
        title="Pricing"
        heading={pricing.heading}
        headingId="pricing-heading"
        headingSize="large"
        description={pricing.description}
      />
      <div className={styles.grid}>
        {pricing.plans.map((plan) => (
          <PricingCard key={plan.title} toggleOptions={pricing.toggle} {...plan} />
        ))}
        <div className={styles.right}>
          <article className={`${styles.card} ${styles.custom}`}>
            <div className={styles.heading}>
              <Text variant="h3">{custom.title}</Text>
              <Text variant="b-small">{custom.description}</Text>
            </div>
            <div className={styles.priceButton}>
              <div className={styles.startsAt}>
                <Text variant="b-small">Starts at</Text>
                <span className={pricingStyles.amount}>
                  <Text variant="label-big" as="span" color="white" className={pricingStyles.currency}>
                    $
                  </Text>
                  <NumberFlow className={pricingStyles.number} value={custom.startsAt} format={{ useGrouping: true }} />
                </span>
              </div>
              <PrimaryButton text={custom.buttonText} href={custom.link} plusArrowIcon={false} iconVisible fullWidth />
            </div>
          </article>
          <article className={`${styles.card} ${styles.bookCall}`}>
            <div className={styles.member}>
              <AuthorCard name={people.sarah.name} role={people.sarah.role} image={people.sarah.image} />
              <Text variant="b-small">{bookCall.text}</Text>
            </div>
            <div className={styles.slots}>
              <Availability openSlots={bookCall.openSlots} month={bookCall.month} />
              <PrimaryButton text={bookCall.buttonText} href={bookCall.link} tone="light" plusArrowIcon={false} iconVisible />
            </div>
          </article>
        </div>
      </div>
    </Section>
  );
}
