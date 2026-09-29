import { faqSection, faqs, people } from "../data/content";
import { Accordion } from "../components/Accordion";
import { AuthorCard } from "../components/AuthorCard";
import { PrimaryLink } from "../components/PrimaryLink";
import { Section, SectionHeader } from "../components/Section";
import { Text } from "../components/Text";
import styles from "./Faq.module.css";

export function Faq() {
  return (
    <Section id="faq" aria-labelledby="faq-heading">
      <SectionHeader
        count={7}
        title="Answers"
        heading={faqSection.heading}
        headingId="faq-heading"
        headingSize="large"
        description={faqSection.description}
        descriptionSize="large"
      />
      <div className={styles.grid}>
        <div className={styles.left}>
          <div className={styles.intro}>
            <div className={styles.text}>
              <Text variant="b-xlarge">{faqSection.asideTitle}</Text>
              <Text variant="b-medium">{faqSection.asideText}</Text>
            </div>
            <AuthorCard name={people.sarah.name} role={people.sarah.role} image={people.sarah.image} />
          </div>
          <PrimaryLink text="Ask a question" href="/contact" size="large" />
        </div>
        <div className={styles.faqs}>
          <Accordion items={faqs} />
        </div>
      </div>
    </Section>
  );
}
