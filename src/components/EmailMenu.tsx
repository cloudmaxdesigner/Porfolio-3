import { useEffect, useRef, useState } from "react";
import { Shapes } from "@phosphor-icons/react";
import { useHover } from "../hooks/useHover";
import { useIsPhone } from "../hooks/useMediaQuery";
import { Logo } from "./Logo";
import { RollText } from "./RollText";
import { Text } from "./Text";
import styles from "./EmailMenu.module.css";

type Props = {
  email: string;
  subline?: string;
  mailtoLink?: string;
  bookCallLink: string;
};

const COPIED_MS = 1200;

/**
 * "Email Menu Trigger" + "Email Menu": the email address toggles a small menu with
 * Copy email / Open mail client / Book call. Copying flips the label to "email copied".
 */
export function EmailMenuTrigger({ email, subline = "Get in touch", mailtoLink = `mailto:${email}`, bookCallLink }: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hovered, hoverProps] = useHover();
  const isPhone = useIsPhone();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), COPIED_MS);
    return () => window.clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Clipboard can be unavailable (insecure context); fall back to a hidden textarea.
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setOpen(false);
  };

  // Plus icon: 180° at rest, 90° on hover/open, 0° once copied.
  const rotation = copied ? 0 : hovered || open ? 90 : 180;
  const underline = hovered || open || copied;

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((o) => !o)}
        {...hoverProps}
      >
        <span className={styles.label}>
          <RollText variant={isPhone ? "b-xlarge" : "b-big"} active={copied} secondary="email copied">
            {email}
          </RollText>
          <span className={styles.plus} style={{ transform: `rotate(${rotation}deg)` }} aria-hidden="true">
            <span />
            <span />
          </span>
        </span>
        <span className={styles.track}>
          <span className={styles.fill} data-active={underline} />
        </span>
      </button>
      <span className="visually-hidden" aria-live="polite">
        {copied ? "Email copied to clipboard" : ""}
      </span>

      <div className={styles.menu} data-open={open} role="menu" aria-hidden={!open}>
        <div className={styles.menuTop}>
          <Logo size={16} />
          <Text variant="label-small">{subline}</Text>
        </div>
        <div className={styles.menuBody}>
          <MenuItem onClick={copy} tabIndex={open ? 0 : -1}>
            Copy email
          </MenuItem>
          <MenuItem href={mailtoLink} newTab tabIndex={open ? 0 : -1}>
            Open mail client
          </MenuItem>
          <MenuItem href={bookCallLink} tabIndex={open ? 0 : -1}>
            Book call
          </MenuItem>
        </div>
      </div>
    </div>
  );
}

function MenuItem({
  children,
  href,
  newTab,
  onClick,
  tabIndex,
}: {
  children: string;
  href?: string;
  newTab?: boolean;
  onClick?: () => void;
  tabIndex: number;
}) {
  const [hovered, hoverProps] = useHover();
  const content = (
    <>
      <span className={styles.itemLabel}>
        <Shapes size={14} aria-hidden="true" />
        <Text variant="b-small" as="span" color="white">
          {children}
        </Text>
      </span>
      <span className={styles.track}>
        <span className={styles.fill} data-active={hovered} />
      </span>
    </>
  );
  return href ? (
    <a
      role="menuitem"
      href={href}
      className={styles.item}
      tabIndex={tabIndex}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...hoverProps}
    >
      {content}
    </a>
  ) : (
    <button role="menuitem" type="button" className={styles.item} tabIndex={tabIndex} onClick={onClick} {...hoverProps}>
      {content}
    </button>
  );
}
