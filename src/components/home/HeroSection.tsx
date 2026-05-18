"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ChevronDown, Star, MapPin } from "lucide-react";

// Detect mobile/touch device — parallax is disabled on touch screens
function useIsDesktop() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Only apply parallax transform on desktop — on mobile keep it static
  const yDesktop = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacityDesktop = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center"
    >
      {/* Background — no scale-110, no motion on mobile */}
      <motion.div
        style={isDesktop ? { y: yDesktop } : {}}
        className="absolute inset-0"
        // will-change tells the GPU to promote this layer ahead of time
        // preventing repaint jank during scroll
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/unnamed.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // Promote to its own GPU layer — eliminates blur/ghosting
            transform: "translateZ(0)",
            willChange: isDesktop ? "transform" : "auto",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(28,28,28,0.88) 0%, rgba(92,64,51,0.55) 50%, rgba(28,28,28,0.92) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 20%, rgba(28,28,28,0.65) 100%)",
          }}
        />
      </motion.div>

      {/* Corner ornaments — static on mobile, animated on desktop */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[
          "top-24 left-8 border-r-0 border-b-0",
          "top-24 right-8 border-l-0 border-b-0",
          "bottom-16 left-8 border-r-0 border-t-0",
          "bottom-16 right-8 border-l-0 border-t-0",
        ].map((cls, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
            className={`absolute w-16 h-16 md:w-24 md:h-24 ${cls}`}
            style={{ border: "1px solid #D4A017" }}
          />
        ))}

        {/* Floating particles — desktop only, they cause jank on mobile */}
        {isDesktop &&
          [...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full hidden md:block"
              style={{
                width: "3px",
                height: "3px",
                background: i % 2 === 0 ? "#D4A017" : "#D46A7E",
                left: `${15 + i * 13}%`,
                top: `${20 + (i % 3) * 22}%`,
              }}
              animate={{ y: [-10, 10, -10], opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
            />
          ))}
      </div>

      {/* Main content — fade-out on scroll only on desktop */}
      <motion.div
        style={isDesktop ? { opacity: opacityDesktop } : {}}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-3"
        >
          <span
            className="text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}
          >
            Bienvenue à
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-5"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "white" }}
        >
          Where{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #D46A7E, #E8A0AE)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Addis
          </span>{" "}
          Meets{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #D4A017, #E8C060)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Paris
          </span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#D4A017]" />
          <div className="w-2 h-2 rotate-45 bg-[#D4A017]" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#D4A017]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "20px" }}
        >
          Indulge in premium specialty coffee, artisan pastries, and fine dining —
          a Parisian sanctuary nestled in the heart of Bole Rwanda, Addis Ababa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link
            href="/menu"
            className="px-10 py-4 text-sm tracking-widest uppercase font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #D46A7E, #B85570)",
              borderRadius: "2px",
              boxShadow: "0 8px 30px rgba(212,106,126,0.45)",
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            }}
          >
            Explore Menu
          </Link>
          <Link
            href="/reservations"
            className="px-10 py-4 text-sm tracking-widest uppercase font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: "transparent",
              border: "1px solid rgba(212,160,23,0.65)",
              borderRadius: "2px",
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              color: "#D4A017",
            }}
          >
            Reserve a Table
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-8"
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} size={13} fill={i <= 4 ? "#D4A017" : "none"} stroke="#D4A017" aria-hidden="true" />
              ))}
            </div>
            <span className="text-white/60 text-xs tracking-wider" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
              4.2 · 257 Reviews
            </span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden md:block" />
          <div className="flex items-center gap-1.5">
            <MapPin size={13} style={{ color: "#D46A7E" }} aria-hidden="true" />
            <span className="text-white/60 text-xs tracking-wider" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
              Rwanda St, Bole, Addis Ababa
            </span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden md:block" />
          <span className="text-white/60 text-xs tracking-wider" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
            Open · Closes 9 PM
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span
          className="text-white/40 text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
        >
          Scroll
        </span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={20} className="text-[#D4A017]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
