import type { ReactNode } from "react";
import { SectionNumber } from "./SectionNumber";
import { Text } from "./Text";
import styles from "./Section.module.css";

type SectionProps = {
  id?: string;
  children: ReactNode;
  /** Top border (every section after the hero has one). */
  bordered?: boolean;
  tone?: "black" | "black-90";
  className?: string;
  "aria-labelledby"?: string;
};

/** Outer section frame + the "Inside Container" (max 1920px, responsive gutters). */
export function Section({ id, children, bordered = true, tone = "black", className, ...rest }: SectionProps) {
  return (
    <section
      id={id}
      className={[styles.section, className].filter(Boolean).join(" ")}
      data-bordered={bordered}
      data-tone={tone}
      {...rest}
    >
      <div className={styles.inside}>{children}</div>
    </section>
  );
}

type HeaderProps = {
  count: number;
  title: string;
  headingId?: string;
  heading: string;
  headingSize?: "large" | "medium";
  description?: ReactNode;
  descriptionSize?: "medium" | "large";
};

/** The recurring 9-column "Header / section" row: section number (3 cols) + heading and copy (6 cols). */
export function SectionHeader({
  count,
  title,
  headingId,
  heading,
  headingSize = "medium",
  description,
  descriptionSize = "medium",
}: HeaderProps) {
  return (
    <div className={styles.header}>
      <SectionNumber count={count} title={title} />
      <div className={styles.headingBlock}>
        <Text variant={headingSize === "large" ? "h2-large" : "h2-medium"} id={headingId}>
          {heading}
        </Text>
        {description && <Text variant={descriptionSize === "large" ? "b-large" : "b-medium"}>{description}</Text>}
      </div>
    </div>
  );
}
