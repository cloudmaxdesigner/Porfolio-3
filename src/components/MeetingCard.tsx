import { useHover } from "../hooks/useHover";
import { ArrowIcon } from "./ArrowIcon";
import { Availability } from "./Availability";
import { PrimaryButton } from "./PrimaryButton";
import { Text } from "./Text";
import styles from "./MeetingCard.module.css";

type Props = {
  picture: string;
  name: string;
  role: string;
  buttonText: string;
  bookCallLink: string;
  pricingLink: string;
  planCost: string;
  openSlots: number;
  month: string;
};

/** "Meeting Card": team member photo with availability, pricing teaser and a book-call button. */
export function MeetingCard(props: Props) {
  const [priceHover, hoverProps] = useHover();
  return (
    <article className={styles.card}>
      <div className={styles.picture}>
        <img src={props.picture} alt={props.name} width={250} height={200} />
        <div className={styles.availability}>
          <Availability openSlots={props.openSlots} month={props.month} />
        </div>
      </div>
      <div className={styles.person}>
        <Text variant="b-large">{props.name}</Text>
        <Text variant="b-small">{props.role}</Text>
      </div>
      <a href={props.pricingLink} className={styles.plan} {...hoverProps}>
        <span className={styles.planText}>
          <span className={styles.cost}>
            <Text variant="b-small" as="span">
              Plans start at
            </Text>
            <Text variant="b-small" as="span" color="white">
              {props.planCost}
            </Text>
          </span>
          <Text variant="b-small" as="span" color="white" className={styles.seePricing} data-hover={priceHover}>
            See Pricing
          </Text>
        </span>
        <ArrowIcon variant={priceHover ? "plus" : "arrow"} />
      </a>
      <PrimaryButton text={props.buttonText} href={props.bookCallLink} tone="light" plusArrowIcon={false} iconVisible fullWidth />
    </article>
  );
}
