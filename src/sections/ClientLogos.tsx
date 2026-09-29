import { clientLogos } from "../data/content";
import styles from "./ClientLogos.module.css";

/** "Client Logo Ticker": an endless marquee. The list is rendered twice for a seamless loop. */
export function ClientLogos() {
  return (
    <section className={styles.section} aria-label="Clients">
      <div className={styles.inside}>
        <div className={styles.viewport}>
          <ul className={styles.track}>
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <li key={i} className={styles.item} aria-hidden={i >= clientLogos.length}>
                <img src={logo.src} alt={i < clientLogos.length ? logo.name : ""} height={30} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
