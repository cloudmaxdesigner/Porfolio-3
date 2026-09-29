import { DribbbleLogo, InstagramLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";
import { site } from "../data/content";
import styles from "./SocialLinks.module.css";

const links = [
  { label: "X / Twitter", href: site.socials.x, Icon: XLogo },
  { label: "Instagram", href: site.socials.instagram, Icon: InstagramLogo },
  { label: "Dribbble", href: site.socials.dribbble, Icon: DribbbleLogo },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedinLogo },
];

export function SocialLinks() {
  return (
    <ul className={styles.list}>
      {links.map(({ label, href, Icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={styles.link}>
            <Icon size={20} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
