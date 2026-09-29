import { GlobeSimple } from "@phosphor-icons/react";
import { useHover } from "../hooks/useHover";
import { useIsPhone } from "../hooks/useMediaQuery";
import { ArrowIcon } from "./ArrowIcon";
import { RollText } from "./RollText";
import styles from "./PrimaryButton.module.css";

type Props = {
  text: string;
  href: string;
  /** "Dark" = black fill that inverts on hover; "Light" = white fill that inverts on hover. */
  tone?: "dark" | "light";
  /** Show the plus/arrow glyph. */
  plusArrowIcon?: boolean;
  /** Show the globe icon. */
  iconVisible?: boolean;
  newTab?: boolean;
  fullWidth?: boolean;
  className?: string;
};

export function PrimaryButton({
  text,
  href,
  tone = "dark",
  plusArrowIcon = true,
  iconVisible = false,
  newTab = false,
  fullWidth = false,
  className,
}: Props) {
  const [hovered, hoverProps] = useHover();
  const isPhone = useIsPhone();
  const active = hovered && !isPhone;
  // Hover swaps to the opposite fill, exactly like the Framer "(on hover)" variants.
  const light = active ? tone === "dark" : tone === "light";

  return (
    <a
      href={href}
      className={[styles.button, className].filter(Boolean).join(" ")}
      data-light={light}
      data-full={fullWidth}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...hoverProps}
    >
      <span className={styles.text}>
        <RollText variant="b-small" active={active}>
          {text}
        </RollText>
      </span>
      {plusArrowIcon && (
        <span className={styles.icon}>
          <ArrowIcon
            variant={active ? "arrow" : "plus"}
            fill={light ? "var(--color-black)" : "var(--color-white)"}
          />
        </span>
      )}
      {iconVisible && (
        <span className={styles.icon}>
          <GlobeSimple size={16} weight="bold" aria-hidden="true" />
        </span>
      )}
    </a>
  );
}
