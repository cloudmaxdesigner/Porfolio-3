import { useCallback, useState } from "react";

/**
 * Tracks the Framer "on hover" variant in React state. Focus counts as hover so
 * keyboard users get the same state change.
 */
export function useHover() {
  const [hovered, setHovered] = useState(false);
  const on = useCallback(() => setHovered(true), []);
  const off = useCallback(() => setHovered(false), []);
  return [
    hovered,
    { onMouseEnter: on, onMouseLeave: off, onFocus: on, onBlur: off },
  ] as const;
}
