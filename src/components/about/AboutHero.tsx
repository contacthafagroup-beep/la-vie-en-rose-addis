"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/unnamed (6).jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label="La Vie En Rose Addis — elegant café interior"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(28,28,28,0.88) 0%, rgba(92,64,51,0.7) 100%)",
        }}
      />

      <div className="relative z-10 text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl block mb-3"
          style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}
        >
          Our Story
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          About La Vie En Rose
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4A017]" />
          <div className="w-2 h-2 rotate-45 bg-[#D4A017]" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4A017]" />
        </motion.div>
      </div>
    </section>
  );
}
