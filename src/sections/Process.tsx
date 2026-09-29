import { process } from "../data/content";
import { Highlight } from "../components/Highlight";
import { ProcessAccordion } from "../components/ProcessAccordion";
import { Section, SectionHeader } from "../components/Section";
import styles from "./Process.module.css";

export function Process() {
  return (
    <Section aria-labelledby="process-heading">
      <SectionHeader
        count={4}
        title="Process"
        heading={process.heading}
        headingId="process-heading"
        description={process.description}
      />
      <div className={styles.grid}>
        <div className={styles.highlights}>
          {process.highlights.map((h) => (
            <Highlight key={h.title} {...h} />
          ))}
        </div>
        <div className={styles.accordion}>
          <ProcessAccordion steps={process.steps} />
        </div>
      </div>
    </Section>
  );
}
