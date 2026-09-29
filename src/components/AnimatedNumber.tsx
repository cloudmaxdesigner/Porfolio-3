import NumberFlow from "@number-flow/react";
import { useInView } from "../hooks/useInView";
import { AnimatedLine } from "./AnimatedLine";
import { Text } from "./Text";
import styles from "./AnimatedNumber.module.css";

type Props = {
  start?: number;
  end: number;
  decimals?: number;
  commas?: boolean;
  prefix?: string;
  suffix?: string;
  text: string;
  variant?: "bento" | "about";
};

/** "Animated Number": counts from `start` to `end` once in view, over a caption and a rule. */
export function AnimatedNumber({
  start = 0,
  end,
  decimals = 0,
  commas = true,
  prefix = "",
  suffix = "",
  text,
  variant = "bento",
}: Props) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={styles.root} data-variant={variant}>
      <div className={styles.content}>
        <NumberFlow
          className={styles.number}
          value={inView ? end : start}
          prefix={prefix}
          suffix={suffix}
          format={{ useGrouping: commas, minimumFractionDigits: decimals, maximumFractionDigits: decimals }}
          transformTiming={{ duration: 1400, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }}
          spinTiming={{ duration: 1400, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }}
        />
        <Text variant={variant === "bento" ? "b-small" : "b-medium"}>{text}</Text>
      </div>
      <AnimatedLine />
    </div>
  );
}
