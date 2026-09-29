import { useState } from "react";
import { Quotes } from "@phosphor-icons/react";
import { useInView } from "../hooks/useInView";
import { useIsPhone, usePrefersReducedMotion } from "../hooks/useMediaQuery";
import { SliderArrow } from "./SliderArrow";
import { Text } from "./Text";
import styles from "./TestimonialSlider.module.css";

type Slide = {
  quote: string;
  picture: string;
  name: string;
  role: string;
  company: string;
  metric: string;
  metricDescription: string;
};

const DURATION_MS = 7000;

/**
 * "Testimonial Slider": variants "Desktop 1–3" / "Mobile 1–3" are the active slide,
 * "… - Paused" is the hover state. The active metric's progress bar drives autoplay:
 * when its CSS animation ends, the next slide becomes active.
 */
export function TestimonialSlider({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView<HTMLDivElement>({ once: false });
  const isPhone = useIsPhone();
  const reducedMotion = usePrefersReducedMotion();
  const paused = hovered || !inView || reducedMotion;

  const go = (delta: number) => setActive((a) => (a + delta + slides.length) % slides.length);

  return (
    <div
      ref={ref}
      className={styles.slider}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div className={styles.testimonial}>
        <div className={styles.people}>
          <div className={styles.pictures}>
            {slides.map((s, i) => (
              <img key={s.name} src={s.picture} alt="" className={styles.picture} data-active={i === active} />
            ))}
          </div>
          <div className={styles.authors}>
            {slides.map((s, i) => (
              <div key={s.name} className={styles.author} data-active={i === active} aria-hidden={i !== active}>
                <Text variant="b-medium" color="white">
                  {s.name}
                </Text>
                <div className={styles.role}>
                  <Text variant="label-big" as="span">
                    {s.role},
                  </Text>
                  <Text variant="label-big" as="span">
                    {s.company}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.quoteContain}>
            <Quotes size={32} weight="fill" className={styles.quoteIcon} aria-hidden="true" />
            <div className={styles.quotes} aria-live={paused ? "polite" : "off"}>
              {slides.map((s, i) => (
                <Text
                  key={s.name}
                  variant={isPhone ? "b-large" : "b-big"}
                  as="blockquote"
                  className={styles.quote}
                  data-active={i === active}
                  aria-hidden={i !== active}
                >
                  {s.quote}
                </Text>
              ))}
            </div>
          </div>
          <div className={styles.arrows}>
            <SliderArrow direction="prev" onClick={() => go(-1)} label="Previous testimonial" />
            <SliderArrow direction="next" onClick={() => go(1)} label="Next testimonial" />
          </div>
        </div>
      </div>

      <div className={styles.metrics}>
        {slides.map((s, i) => (
          <button
            key={s.name}
            type="button"
            className={styles.metric}
            data-active={i === active}
            aria-label={`Show testimonial ${i + 1}: ${s.company}`}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          >
            <span className={styles.track}>
              {i === active && reducedMotion && <span className={styles.progressStatic} />}
              {i === active && !reducedMotion && (
                <span
                  key={active}
                  className={styles.progress}
                  style={{ animationDuration: `${DURATION_MS}ms`, animationPlayState: paused ? "paused" : "running" }}
                  onAnimationEnd={() => go(1)}
                />
              )}
            </span>
            <span className={styles.metricText}>
              <Text variant="h3" as="span">
                {s.metric}
              </Text>
              <Text variant="b-medium" as="span">
                {s.metricDescription}
              </Text>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
