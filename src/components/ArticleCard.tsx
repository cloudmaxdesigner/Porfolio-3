import { useHover } from "../hooks/useHover";
import { useIsPhone } from "../hooks/useMediaQuery";
import { ArrowIcon } from "./ArrowIcon";
import { AuthorCard } from "./AuthorCard";
import { Text } from "./Text";
import styles from "./ArticleCard.module.css";

type Props = {
  href: string;
  title: string;
  category: string;
  date: string;
  description: string;
  body: string;
  image: string;
  author: { name: string; role: string; image?: string };
  /** Render the title as an h2 instead of an h3 (Framer `h2Tag`). */
  h2Tag?: boolean;
};

const WPM = 238;
const dateFormat = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" });

/** "Article Card". Hover dims the image further and slides the title away ("Default (on hover)"). */
export function ArticleCard({ href, title, category, date, description, body, image, author, h2Tag = false }: Props) {
  const [hovered, hoverProps] = useHover();
  const isPhone = useIsPhone();
  const active = hovered && !isPhone;
  const minutes = Math.max(1, Math.round(body.trim().split(/\s+/).length / WPM));

  return (
    <a href={href} className={styles.card} data-hovered={active} data-mobile={isPhone} {...hoverProps}>
      <img src={image} alt="" className={styles.image} loading="lazy" />
      <div className={styles.overlay} />
      <div className={styles.titleDate}>
        <div className={styles.meta}>
          <Text variant="label-small" as="span">
            {category}
          </Text>
          <Text variant="label-small" as="time" dateTime={date}>
            {dateFormat.format(new Date(date))}
          </Text>
        </div>
        <Text variant="h3" as={h2Tag ? "h2" : "h3"} className={styles.title}>
          {title}
        </Text>
      </div>
      <div className={styles.details}>
        <Text variant="b-small" as="span">
          {minutes} min read
        </Text>
        <div className={styles.description}>
          <Text variant="b-small" color="white">
            {description}
          </Text>
          <AuthorCard name={author.name} role={author.role} image={author.image} />
        </div>
      </div>
      <span className={styles.icon}>
        <ArrowIcon variant={active || isPhone ? "arrow" : "plus"} />
      </span>
    </a>
  );
}
