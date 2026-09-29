import { useEffect, useState } from "react";
import { services } from "../data/content";
import { useHover } from "../hooks/useHover";
import { RollText } from "../components/RollText";
import { Section, SectionHeader } from "../components/Section";
import { ServiceCard } from "../components/ServiceCard";
import styles from "./Services.module.css";

/** Tracks which service card is under the middle of the viewport. */
function useActiveService(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return [active, setActive] as const;
}

const ids = services.map((s) => s.id);

export function Services() {
  const [active, setActive] = useActiveService(ids);

  return (
    <Section id="services" aria-labelledby="services-heading">
      <SectionHeader
        count={3}
        title="Services"
        heading="Services"
        headingId="services-heading"
        headingSize="large"
        description="Full-spectrum design capabilities under one roof. Whether you need a complete brand overhaul or ongoing creative support, we have the expertise to deliver. No outsourcing, no excuses, just exceptional work from our senior team."
      />
      <div className={styles.grid}>
        <nav className={styles.nav} aria-label="Services">
          <ul className={styles.navItems}>
            {services.map((s) => (
              <li key={s.id}>
                <ServiceNavItem text={s.title} href={`#${s.id}`} active={active === s.id} onSelect={() => setActive(s.id)} />
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.cards}>
          {services.map((s, i) => (
            <ServiceCard key={s.id} number={i + 1} {...s} />
          ))}
        </div>
      </div>
    </Section>
  );
}

/** "Service Nav": Inactive (gray) / Active (white) with a text roll on hover. */
function ServiceNavItem({ text, href, active, onSelect }: { text: string; href: string; active: boolean; onSelect: () => void }) {
  const [hovered, hoverProps] = useHover();
  return (
    <a href={href} className={styles.navLink} data-active={active} aria-current={active ? "true" : undefined} onClick={onSelect} {...hoverProps}>
      <RollText variant="b-big" active={hovered && !active}>
        {text}
      </RollText>
    </a>
  );
}
