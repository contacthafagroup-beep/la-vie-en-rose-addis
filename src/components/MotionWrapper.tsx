"use client";

/**
 * FadeIn — replaces motion.div with whileInView.
 * On touch/mobile: renders children immediately with no animation.
 * On desktop: fades + slides in when scrolled into view.
 *
 * This eliminates the #1 cause of mobile scroll glitch:
 * 166 simultaneous opacity/transform repaints firing as the user scrolls.
 */

import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode, type CSSProperties } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  style?: CSSProperties;
  once?: boolean;
}

function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
  }, []);
  return isTouch;
}

const directionMap = {
  up:    { y: 30 },
  down:  { y: -30 },
  left:  { x: -40 },
  right: { x: 40 },
  none:  {},
};

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
  style,
  once = true,
}: FadeInProps) {
  const isTouch = useIsTouchDevice();

  // On mobile: just render — no animation, no repaint overhead
  if (isTouch) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const initial = { opacity: 0, ...directionMap[direction] };
  const animate = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/**
 * Same but for inline elements (span, p, etc.)
 */
export function FadeInSpan({
  children,
  delay = 0,
  className,
  style,
}: Omit<FadeInProps, "direction" | "once">) {
  const isTouch = useIsTouchDevice();

  if (isTouch) {
    return <span className={className} style={style}>{children}</span>;
  }

  return (
    <motion.span
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.span>
  );
}
