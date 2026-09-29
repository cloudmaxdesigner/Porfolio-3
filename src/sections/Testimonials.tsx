import { testimonials } from "../data/content";
import { Section, SectionHeader } from "../components/Section";
import { TestimonialCard } from "../components/TestimonialCard";
import { TestimonialSlider } from "../components/TestimonialSlider";
import styles from "./Testimonials.module.css";

export function Testimonials() {
  return (
    <Section bordered={false} aria-labelledby="testimonials-heading">
      <SectionHeader
        count={6}
        title="Testimonials"
        heading={testimonials.heading}
        headingId="testimonials-heading"
        description={testimonials.description}
      />
      <TestimonialSlider slides={testimonials.slides} />
      <div className={styles.cards}>
        {testimonials.cards.map((card) => (
          <TestimonialCard key={card.name} {...card} />
        ))}
      </div>
    </Section>
  );
}
