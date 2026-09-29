import { Text } from "./Text";
import styles from "./AuthorCard.module.css";

type Props = {
  name: string;
  role: string;
  company?: string;
  image?: string;
  size?: "small" | "large";
};

/** "Team - author card". */
export function AuthorCard({ name, role, company, image, size = "small" }: Props) {
  const large = size === "large";
  return (
    <div className={styles.root} data-size={size}>
      {image && <img className={styles.avatar} src={image} alt="" width={large ? 48 : 38} height={large ? 64 : 38} />}
      <div className={styles.meta}>
        <Text variant={large ? "b-medium" : "label-big"} color="white">
          {name}
        </Text>
        <div className={styles.role}>
          <Text variant={large ? "label-big" : "label-small"} as="span">
            {role}
          </Text>
          {company && (
            <Text variant={large ? "label-big" : "label-small"} as="span">
              · {company}
            </Text>
          )}
        </div>
      </div>
    </div>
  );
}
