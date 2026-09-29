import { useState } from "react";
import { LinkedinLogo, XLogo } from "@phosphor-icons/react";
import { useHover } from "../hooks/useHover";
import { useIsPhone } from "../hooks/useMediaQuery";
import { ArrowIcon } from "./ArrowIcon";
import { Text } from "./Text";
import styles from "./TeamCard.module.css";

type Props = {
  image: string;
  name: string;
  role: string;
  bio?: string;
  email?: string;
  xLink?: string;
  linkedInLink?: string;
};

/**
 * "Team Card": portrait that reveals email, bio and socials. Desktop reveals on hover
 * ("Team (on hover)"), phones toggle on tap ("Mobile" / "Mobile Click").
 */
export function TeamCard({ image, name, role, bio, email, xLink, linkedInLink }: Props) {
  const [hovered, hoverProps] = useHover();
  const [tapped, setTapped] = useState(false);
  const isPhone = useIsPhone();
  const hasInfo = Boolean(bio || email);
  const revealed = hasInfo && (isPhone ? tapped : hovered);

  return (
    <article className={styles.card} data-revealed={revealed} {...(isPhone ? {} : hoverProps)}>
      <div className={styles.media}>
        <img src={image} alt={name} className={styles.image} width={300} height={400} />
        <div className={styles.overlay} />
        {hasInfo && (
          <div className={styles.info} id={`${name}-info`}>
            <div className={styles.description}>
              {email && (
                <Text variant={isPhone ? "b-medium" : "b-large"} as="a" href={`mailto:${email}`} color="white" tabIndex={revealed ? 0 : -1}>
                  {email}
                </Text>
              )}
              {bio && <Text variant="b-small">{bio}</Text>}
            </div>
            <div className={styles.socials}>
              {xLink && (
                <a href={xLink} target="_blank" rel="noopener noreferrer" aria-label={`${name} on X`} tabIndex={revealed ? 0 : -1}>
                  <XLogo size={18} aria-hidden="true" />
                </a>
              )}
              {linkedInLink && (
                <a href={linkedInLink} target="_blank" rel="noopener noreferrer" aria-label={`${name} on LinkedIn`} tabIndex={revealed ? 0 : -1}>
                  <LinkedinLogo size={18} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        )}
        {hasInfo && (
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={revealed}
            aria-controls={`${name}-info`}
            aria-label={revealed ? `Hide details for ${name}` : `Show details for ${name}`}
            onClick={() => setTapped((t) => !t)}
          >
            <ArrowIcon variant={revealed ? "arrow" : "plus"} />
          </button>
        )}
      </div>
      <div className={styles.meta}>
        <Text variant="b-xlarge">{name}</Text>
        <Text variant="b-small">{role}</Text>
      </div>
    </article>
  );
}
