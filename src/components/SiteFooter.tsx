import { legalLinks, site } from "../data/content";
import { Copyright } from "./Copyright";
import { EmailMenuTrigger } from "./EmailMenu";
import { Location } from "./Location";
import { Logo } from "./Logo";
import { PrimaryLink } from "./PrimaryLink";
import { SocialLinks } from "./SocialLinks";
import { Text } from "./Text";
import styles from "./SiteFooter.module.css";

/** Minimal footer — the Framer "Nav & Footer" layout template wasn't part of the export. */
export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inside}>
        <div className={styles.top}>
          <div className={styles.group}>
            <Text variant="label-small">Let's Talk</Text>
            <EmailMenuTrigger email={site.email} bookCallLink={site.bookCallLink} />
            <Location label={site.location.label} timezone={site.location.timezone} />
          </div>
          <div className={styles.group}>
            <Text variant="label-small">Socials</Text>
            <SocialLinks />
          </div>
        </div>
        <Logo size={48} className={styles.logo} />
        <div className={styles.bottom}>
          <div className={styles.legal}>
            {legalLinks.map((link) => (
              <PrimaryLink key={link.href} text={link.text} href={link.href} />
            ))}
          </div>
          <Copyright />
        </div>
      </div>
    </footer>
  );
}
