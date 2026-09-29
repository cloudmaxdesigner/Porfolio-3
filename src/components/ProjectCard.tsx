import { useHover } from "../hooks/useHover";
import { useIsPhone } from "../hooks/useMediaQuery";
import { ArrowIcon } from "./ArrowIcon";
import { Text } from "./Text";
import styles from "./ProjectCard.module.css";

type Props = {
  client: string;
  thumbnail: string;
  number: number;
  date: string;
  services: string;
  href: string;
};

/** "Project Card": thumbnail with a dimming overlay that lifts on hover. */
export function ProjectCard({ client, thumbnail, number, date, services, href }: Props) {
  const [hovered, hoverProps] = useHover();
  const isPhone = useIsPhone();
  const active = hovered && !isPhone;
  const year = new Date(date).getFullYear();

  return (
    <a href={href} className={styles.card} data-hovered={active} {...hoverProps}>
      <div className={styles.media}>
        <img src={thumbnail} alt="" className={styles.image} width={1200} height={900} loading="lazy" />
        <div className={styles.overlay} />
        <Text variant="b-large" as="span" className={styles.number}>
          {String(number).padStart(2, "0")}
        </Text>
        <span className={styles.icon}>
          <ArrowIcon variant={active ? "arrow" : isPhone ? "arrow" : "plus"} />
        </span>
      </div>
      <div className={styles.info}>
        <div className={styles.row}>
          <Text variant="b-xlarge" as="h3">
            {client}
          </Text>
          <Text variant="label-big" as="time" dateTime={date}>
            {year}
          </Text>
        </div>
        <Text variant="label-big">{services}</Text>
      </div>
    </a>
  );
}
