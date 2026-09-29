import { Stars } from "./Stars";
import { Text } from "./Text";
import styles from "./Rating.module.css";

type Props = {
  score: number;
  text: string;
  avatars: string[];
  direction?: "row" | "column";
  align?: "center" | "flex-start";
};

/** "Rating": stacked client avatars + a "You?" bubble, stars and score. */
export function Rating({ score, text, avatars, direction = "row", align = "center" }: Props) {
  return (
    <div className={styles.root} style={{ flexDirection: direction, alignItems: align }}>
      <div className={styles.avatars} aria-hidden="true">
        {avatars.map((src, i) => (
          <img key={i} src={src} alt="" width={32} height={32} className={styles.avatar} />
        ))}
        <span className={styles.you}>You?</span>
      </div>
      <div className={styles.meta}>
        <div className={styles.stars}>
          <Stars />
          <span className={styles.score}>
            <Text variant="label-small" as="span" color="white">
              {score.toFixed(1)}
            </Text>
            <Text variant="label-small" as="span">
              /5
            </Text>
          </span>
        </div>
        <Text variant="label-small-lh">{text}</Text>
      </div>
    </div>
  );
}
