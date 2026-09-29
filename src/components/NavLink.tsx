import { useHover } from "../hooks/useHover";
import { RollText } from "./RollText";
import styles from "./NavLink.module.css";

type Props = {
  text: string;
  href: string;
  size?: "main" | "small";
  /** CMS item count shown as a superscript (Project count / Article count). */
  count?: number;
  newTab?: boolean;
  onNavigate?: () => void;
};

export function NavLink({ text, href, size = "main", count, newTab, onNavigate }: Props) {
  const [hovered, hoverProps] = useHover();
  return (
    <a
      href={href}
      className={styles.link}
      data-size={size}
      onClick={onNavigate}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...hoverProps}
    >
      <RollText variant={size === "main" ? "b-big" : "b-small"} active={hovered}>
        {text}
      </RollText>
      {count !== undefined && (
        <sup className={styles.count} aria-label={`(${count})`}>
          {count}
        </sup>
      )}
    </a>
  );
}
