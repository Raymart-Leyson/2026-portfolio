"use client";

import { useEffect, useState } from "react";

/**
 * useIsMobile
 * Detects if viewport width is below a given breakpoint (default: 640px / sm)
 * Useful to tone down animations and adjust layout for small screens.
 */
export function useIsMobile(breakpoint: number = 640) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const matches = "matches" in e ? e.matches : (e as MediaQueryList).matches;
      setIsMobile(matches);
    };

    setIsMobile(mq.matches);
    // Modern browsers: addEventListener
    mq.addEventListener?.("change", onChange as EventListener);
    // Fallback for older: addListener
    // @ts-ignore
    mq.addListener?.(onChange);

    return () => {
      mq.removeEventListener?.("change", onChange as EventListener);
      // @ts-ignore
      mq.removeListener?.(onChange);
    };
  }, [breakpoint]);

  return isMobile;
}
