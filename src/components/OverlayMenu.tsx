import { useEffect, useRef } from "react";
import { articles, legalLinks, navLinks, projects, site } from "../data/content";
import { setScrollLocked } from "../hooks/useLenis";
import { AnimatedLine } from "./AnimatedLine";
import { Copyright } from "./Copyright";
import { EmailMenuTrigger } from "./EmailMenu";
import { Location } from "./Location";
import { NavLink } from "./NavLink";
import { PrimaryLink } from "./PrimaryLink";
import { SocialLinks } from "./SocialLinks";
import { Text } from "./Text";
import styles from "./OverlayMenu.module.css";

const counts = { projects: projects.length, articles: articles.length };

type Props = { id: string; open: boolean; onClose: () => void };

/** "Overlay menu": right-hand panel (600px desktop, full width on phones). */
export function OverlayMenu({ id, open, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    setScrollLocked(true);
    const previouslyFocused = document.activeElement as HTMLElement | null;
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      setScrollLocked(false);
      document.removeEventListener("keydown", onKey);
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  return (
    <div className={styles.root} data-open={open} aria-hidden={!open} inert={!open}>
      <div className={styles.scrim} onClick={onClose} />
      <div ref={panelRef} id={id} className={styles.panel} role="dialog" aria-modal="true" aria-label="Site menu">
        {open && <AnimatedLine orientation="vertical" className={styles.edge} />}
        <nav className={styles.menu} aria-label="Main">
          <Text variant="label-small">Menu</Text>
          <ul className={styles.links}>
            {navLinks.map((link, i) => (
              <li key={link.href} style={{ transitionDelay: open ? `${120 + i * 50}ms` : "0ms" }}>
                <NavLink
                  text={link.text}
                  href={link.href}
                  count={link.count ? counts[link.count] : undefined}
                  onNavigate={onClose}
                />
              </li>
            ))}
          </ul>
        </nav>
        {open && <AnimatedLine start="flex-end" />}
        <div className={styles.middle}>
          <div className={styles.group}>
            <Text variant="label-small">Let's Talk</Text>
            <div className={styles.contact}>
              <EmailMenuTrigger email={site.email} bookCallLink={site.bookCallLink} />
              <Location label={site.location.label} timezone={site.location.timezone} />
            </div>
          </div>
          <div className={styles.group}>
            <Text variant="label-small">Socials</Text>
            <SocialLinks />
          </div>
        </div>
        <div className={styles.legal}>
          {open && <AnimatedLine start="flex-end" className={styles.legalRule} />}
          <div className={styles.legalLinks}>
            {legalLinks.map((link) => (
              <PrimaryLink key={link.href} text={link.text} href={link.href} />
            ))}
          </div>
          <Copyright />
        </div>
      </div>
    </div>
  );
}
