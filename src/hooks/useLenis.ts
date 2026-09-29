import { useEffect } from "react";
import Lenis from "lenis";

let instance: Lenis | null = null;

/** Smooth scrolling (Framer "Lenis" component: smooth, intensity 8, vertical). */
export function useLenis() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.08, orientation: "vertical", infinite: false, anchors: true });
    instance = lenis;
    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      instance = null;
    };
  }, []);
}

/** Pause / resume smooth scrolling, e.g. while an overlay is open. */
export function setScrollLocked(locked: boolean) {
  if (instance) {
    if (locked) instance.stop();
    else instance.start();
  }
  document.documentElement.style.overflow = locked ? "hidden" : "";
}
