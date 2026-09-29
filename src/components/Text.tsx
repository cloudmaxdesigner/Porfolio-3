import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

/** Framer text styles. Each maps to a `.t-*` class in styles/typography.css. */
export type TextStyle =
  | "b-big"
  | "b-xlarge"
  | "b-large"
  | "b-medium"
  | "b-small"
  | "h1-medium"
  | "h2-large"
  | "h2-medium"
  | "h3"
  | "label-big"
  | "label-small"
  | "label-small-lh";

const defaultTag: Record<TextStyle, ElementType> = {
  "b-big": "p",
  "b-xlarge": "p",
  "b-large": "p",
  "b-medium": "p",
  "b-small": "p",
  "h1-medium": "h1",
  "h2-large": "h2",
  "h2-medium": "h2",
  h3: "h3",
  "label-big": "p",
  "label-small": "p",
  "label-small-lh": "p",
};

type TextProps<T extends ElementType> = {
  variant: TextStyle;
  as?: T;
  color?: "white" | "gray-40" | "gray-50";
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "color">;

export function Text<T extends ElementType = "p">({
  variant,
  as,
  color,
  className,
  children,
  ...rest
}: TextProps<T>) {
  const Tag = as ?? defaultTag[variant];
  const classes = ["t", `t-${variant}`, color && `t-${color}`, className].filter(Boolean).join(" ");
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
