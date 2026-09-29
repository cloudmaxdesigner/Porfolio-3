import { useIsPhone, useMediaQuery } from "../hooks/useMediaQuery";
import { ParallaxImage } from "./ParallaxImage";
import { Text } from "./Text";
import styles from "./ServiceCard.module.css";

type Props = {
  id: string;
  number: number;
  title: string;
  description: string;
  categories: string;
  image: string;
};

/** "Service": parallax image, numbered title and a tag cloud of categories. */
export function ServiceCard({ id, number, title, description, categories, image }: Props) {
  const isPhone = useIsPhone();
  const compact = useMediaQuery("(max-width: 1199px)");
  const tags = categories.split(",").map((t) => t.trim()).filter(Boolean);

  return (
    <article id={id} className={styles.card} data-compact={compact} aria-labelledby={`${id}-title`}>
      <ParallaxImage src={image} amount={isPhone ? 0 : 120} className={styles.image} />
      <div className={styles.body}>
        <div className={styles.text}>
          <h3 className={styles.title} id={`${id}-title`}>
            <Text variant="b-xlarge" as="span" color="gray-50">
              {String(number).padStart(2, "0")}
            </Text>
            <Text variant="b-xlarge" as="span">
              {title}
            </Text>
          </h3>
          <Text variant="b-small">{description}</Text>
        </div>
        <div className={styles.categories}>
          <Text variant="label-big">Categories</Text>
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag}>
                <Text variant="label-big" as="span" color="white">
                  {tag}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
