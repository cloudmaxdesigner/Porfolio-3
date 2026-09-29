import { Quotes } from "@phosphor-icons/react";
import { approach, people } from "../data/content";
import { useIsPhone } from "../hooks/useMediaQuery";
import { PrimaryLink } from "../components/PrimaryLink";
import { Section } from "../components/Section";
import { TeamCard } from "../components/TeamCard";
import { Text } from "../components/Text";
import styles from "./Approach.module.css";

export function Approach() {
  const isPhone = useIsPhone();
  return (
    <Section bordered={false} aria-labelledby="approach-heading">
      <div className={styles.heading}>
        <Text variant="b-medium" color="gray-50">
          {approach.label}
        </Text>
        <Text variant="h2-medium" id="approach-heading" className={styles.indent}>
          {approach.heading}
        </Text>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <TeamCard {...people.alex} />
        </div>
        <div className={styles.text}>
          <Quotes size={32} weight="fill" aria-hidden="true" className={styles.quote} />
          <Text variant={isPhone ? "b-large" : "b-big"} className={styles.lead}>
            {approach.lead}
          </Text>
          <div className={styles.more}>
            <div className={styles.paragraphs}>
              {approach.paragraphs.map((p) => (
                <Text variant="b-medium" key={p}>
                  {p}
                </Text>
              ))}
            </div>
            <PrimaryLink text="The studio" href="/studio" size="large" />
          </div>
        </div>
      </div>
    </Section>
  );
}
