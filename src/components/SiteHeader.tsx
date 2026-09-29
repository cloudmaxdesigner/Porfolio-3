import { useCallback, useState } from "react";
import { hero, site } from "../data/content";
import { Availability } from "./Availability";
import { Hamburger } from "./Hamburger";
import { Logo } from "./Logo";
import { OverlayMenu } from "./OverlayMenu";
import styles from "./SiteHeader.module.css";

const MENU_ID = "site-menu";

/**
 * Top bar. The Framer "Nav & Footer" layout template wasn't part of the export, so this
 * is a minimal reconstruction: logo, availability and the hamburger that opens the overlay menu.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <header className={styles.header}>
        <a href="/" className={styles.logo} aria-label={`${site.name} — home`}>
          <Logo size={22} />
        </a>
        <div className={styles.right}>
          <span className={styles.availability}>
            <Availability openSlots={hero.meeting.openSlots} month={hero.meeting.month} />
          </span>
          <Hamburger open={open} onToggle={() => setOpen((o) => !o)} controls={MENU_ID} />
        </div>
      </header>
      <OverlayMenu id={MENU_ID} open={open} onClose={close} />
    </>
  );
}
