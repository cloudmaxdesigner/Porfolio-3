import { Globe } from "@phosphor-icons/react";
import { whyChooseUs } from "../data/content";
import { AnimatedLine } from "../components/AnimatedLine";
import { AnimatedNumber } from "../components/AnimatedNumber";
import { ArrowIcon } from "../components/ArrowIcon";
import { BentoRings } from "../components/BentoRings";
import { Highlight } from "../components/Highlight";
import { Logo } from "../components/Logo";
import { Section, SectionHeader } from "../components/Section";
import { Stars } from "../components/Stars";
import { Text } from "../components/Text";
import styles from "./WhyChooseUs.module.css";

/** 33 bars trending upward for the revenue chart. Deterministic so SSR/CSR match. */
const BARS = Array.from({ length: 33 }, (_, i) => {
  const trend = 12 + (i / 32) * 82;
  const wobble = Math.sin(i * 1.7) * 7 + Math.cos(i * 0.9) * 4;
  return Math.max(8, Math.min(100, trend + wobble));
});

export function WhyChooseUs() {
  return (
    <Section aria-labelledby="why-heading">
      <SectionHeader
        count={2}
        title="Why choose us"
        heading={whyChooseUs.heading}
        headingId="why-heading"
        description={whyChooseUs.description}
      />

      <div className={styles.bento}>
        <div className={`${styles.card} ${styles.revenue}`}>
          <span className={styles.iconBox}>
            <ArrowIcon variant="arrow" fill="var(--color-black)" />
          </span>
          <div className={styles.revenueBody}>
            <div className={styles.graph}>
              <div className={styles.bars}>
                {BARS.map((h, i) => (
                  <AnimatedLine
                    key={i}
                    orientation="vertical"
                    start="flex-end"
                    fill="var(--color-gray-40)"
                    length={`${h}%`}
                    delay={i * 25}
                  />
                ))}
              </div>
              <div className={styles.years}>
                {whyChooseUs.years.map((y) => (
                  <Text variant="label-small" as="span" key={y}>
                    {y}
                  </Text>
                ))}
              </div>
            </div>
            <AnimatedNumber end={50} commas={false} suffix="M +" text="Revenue generated for our clients." />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.middle}>
            <div className={`${styles.card} ${styles.faster}`}>
              <BentoRings />
              <AnimatedNumber end={3} suffix="x" text="Faster than other agencies." />
            </div>
            <div className={`${styles.card} ${styles.projects}`}>
              <AnimatedNumber end={200} suffix=" +" text="Projects shipped worldwide, helping our clients achieve their goals." />
              <Globe size={40} className={styles.globe} aria-hidden="true" />
            </div>
          </div>
          <div className={`${styles.card} ${styles.clients}`}>
            <img src={whyChooseUs.happyClientsImage} alt="" className={styles.bgImage} loading="lazy" />
            <div className={styles.bgOverlay} />
            <div className={styles.clientsBody}>
              <div className={styles.logoRating}>
                <Logo size={20} />
                <div className={styles.score}>
                  <Text variant="b-xlarge" as="span">
                    4.9 / 5
                  </Text>
                  <Stars />
                </div>
              </div>
              <AnimatedNumber end={100} suffix=" +" text="Happy clients and counting." />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <Text variant="h3">{whyChooseUs.bottomHeading}</Text>
        <div className={styles.highlights}>
          {whyChooseUs.highlights.map((h) => (
            <Highlight key={h.title} {...h} />
          ))}
        </div>
      </div>
    </Section>
  );
}
