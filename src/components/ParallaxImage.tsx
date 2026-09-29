import { useEffect, useRef } from "react";
import styles from "./ParallaxImage.module.css";

type Props = {
  src: string;
  alt?: string;
  /** Total vertical travel in px across the element's pass through the viewport. */
  amount?: number;
  className?: string;
};

/** Replacement for the Framer "ImageParallax" module. Disabled for reduced motion. */
export function ParallaxImage({ src, alt = "", amount = 120, className }: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const img = imgRef.current;
    if (!frame || !img || amount === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = frame.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) return;
      // -0.5 when the frame enters from below, +0.5 when it leaves at the top.
      const progress = (vh - rect.top) / (vh + rect.height) - 0.5;
      img.style.transform = `translate3d(0, ${(-progress * amount).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [amount]);

  return (
    <div ref={frameRef} className={[styles.frame, className].filter(Boolean).join(" ")} style={{ ["--travel" as string]: `${amount}px` }}>
      <img ref={imgRef} src={src} alt={alt} className={styles.image} loading="lazy" />
    </div>
  );
}
