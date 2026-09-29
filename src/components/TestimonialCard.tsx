import { Quotes } from "@phosphor-icons/react";
import { AnimatedLine } from "./AnimatedLine";
import { AuthorCard } from "./AuthorCard";
import { PrimaryLink } from "./PrimaryLink";
import { Text } from "./Text";
import styles from "./TestimonialCard.module.css";

type Props = {
  logo: string;
  quote: string;
  image: string;
  name: string;
  role: string;
  company: string;
  metrics: { value: string; description: string }[];
  caseStudyLink: string;
};

export function TestimonialCard({ logo, quote, image, name, role, company, metrics, caseStudyLink }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.quote}>
        <img src={logo} alt={company} className={styles.logo} width={100} height={25} />
        <div className={styles.textIcon}>
          <Quotes size={20} weight="fill" className={styles.icon} aria-hidden="true" />
          <div className={styles.textLink}>
            <Text variant="b-large" as="blockquote" className={styles.blockquote}>
              {quote}
            </Text>
            <PrimaryLink text="Read case study" href={caseStudyLink} />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.metrics}>
          {metrics.map((m, i) => (
            <div key={m.value} className={styles.metricWrap}>
              {i > 0 && <AnimatedLine orientation="vertical" />}
              <div className={styles.metric}>
                <Text variant="b-big" as="span">
                  {m.value}
                </Text>
                <Text variant="label-small-lh" as="span">
                  {m.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.author}>
          <AuthorCard name={name} role={role} company={company} image={image} />
        </div>
      </div>
    </article>
  );
}
