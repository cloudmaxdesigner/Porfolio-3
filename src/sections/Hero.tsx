import { hero, site } from "../data/content";
import { useIsPhone, useMediaQuery, usePrefersReducedMotion } from "../hooks/useMediaQuery";
import { FitText } from "../components/FitText";
import { MeetingCard } from "../components/MeetingCard";
import { Rating } from "../components/Rating";
import { Text } from "../components/Text";
import styles from "./Hero.module.css";

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const isPhone = useIsPhone();
  // Tablet stacks the rating vertically; desktop and phone lay it out in a row.
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1199px)");

  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.media} aria-hidden="true">
        <video
          className={styles.video}
          src={site.heroVideo}
          poster={site.heroPoster}
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className={styles.shade} />
      </div>

      <div className={styles.inside}>
        {/* "Fit Text": MUGEN spans the full width, STUDIO fills the space beside the year. */}
        <h1 className={styles.wordmark}>
          <FitText>MUGEN</FitText>
          <span className={styles.bottom}>
            <span className={styles.year}>
              <Text variant="b-large" as="span" color="white">
                ©
              </Text>
              <Text variant="b-large" as="span" color="white">
                {hero.since}
              </Text>
            </span>
            <FitText className={styles.studio}>STUDIO</FitText>
          </span>
        </h1>

        <div className={styles.grid}>
          <div className={styles.rating}>
            <Rating
              score={hero.rating.score}
              text={hero.rating.text}
              avatars={hero.rating.avatars}
              direction={isTablet ? "column" : "row"}
              align={isTablet ? "flex-start" : "center"}
            />
          </div>
          <div className={styles.cardHeader}>
            <MeetingCard {...hero.meeting} />
            <div className={styles.heading}>
              <Text variant={isPhone ? "b-large" : "b-xlarge"} className={styles.intro}>
                {hero.intro}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
