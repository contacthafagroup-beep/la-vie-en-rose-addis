"use client";

/**
 * Detects touch devices and:
 * 1. Adds `touch-device` class to <body> for CSS targeting
 * 2. Overrides Framer Motion's whileInView so elements are
 *    immediately visible instead of animating in on scroll.
 *
 * This eliminates the 166 simultaneous opacity/transform repaints
 * that cause blur/glitch when scrolling on mobile.
 */

import { useEffect } from "react";

export default function MobileMotionDisabler() {
  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (!isTouch) return;

    // Add class for CSS targeting
    document.body.classList.add("touch-device");

    // Inject a style tag that forces all Framer Motion animated elements
    // to their final state immediately — no scroll-triggered repaints
    const style = document.createElement("style");
    style.id = "mobile-motion-override";
    style.textContent = `
      /* On touch devices: show all content immediately, no scroll animations */
      body.touch-device [style*="opacity: 0"],
      body.touch-device [style*="opacity:0"] {
        opacity: 1 !important;
      }
      body.touch-device [style*="translateY(30px)"],
      body.touch-device [style*="translateY(40px)"],
      body.touch-device [style*="translateY(20px)"],
      body.touch-device [style*="translateY(-20px)"],
      body.touch-device [style*="translateX(-40px)"],
      body.touch-device [style*="translateX(-50px)"],
      body.touch-device [style*="translateX(-60px)"],
      body.touch-device [style*="translateX(40px)"],
      body.touch-device [style*="translateX(50px)"],
      body.touch-device [style*="translateX(60px)"] {
        transform: none !important;
        opacity: 1 !important;
      }
      /* Disable all transitions on scroll-animated elements */
      body.touch-device section > div,
      body.touch-device section > div > div {
        transition: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.classList.remove("touch-device");
      document.getElementById("mobile-motion-override")?.remove();
    };
  }, []);

  return null;
}
