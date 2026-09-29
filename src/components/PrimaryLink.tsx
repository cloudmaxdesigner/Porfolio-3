import { useHover } from "../hooks/useHover";
import { useIsPhone } from "../hooks/useMediaQuery";
import { ArrowIcon } from "./ArrowIcon";
import { RollText } from "./RollText";
import styles from "./PrimaryLink.module.css";

type Props = {
  text: string;
  href: string;
  size?: "small" | "large";
  newTab?: boolean;
  className?: string;
};

/** "Primary Link": label + arrow icon over an underline that fills on hover. */
export function PrimaryLink({ text, href, size = "small", newTab = false, className }: Props) {
  const [hovered, hoverProps] = useHover();
  const isPhone = useIsPhone();
  // Mobile variants have no hover: they show the full underline and the arrow.
  const variant = isPhone ? "mobile" : hovered ? "hover" : "default";

  return (
    <a
      href={href}
      className={[styles.link, className].filter(Boolean).join(" ")}
      data-size={size}
      data-variant={variant}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...hoverProps}
    >
      <span className={styles.label}>
        <RollText variant={size === "large" ? "b-large" : "b-small"} active={variant === "hover"} className={styles.text}>
          {text}
        </RollText>
        <ArrowIcon variant={variant === "hover" ? "plus" : "arrow"} />
      </span>
      <span className={styles.track}>
        <span className={styles.fill} />
      </span>
    </a>
  );
}
