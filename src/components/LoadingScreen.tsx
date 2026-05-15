"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "#1C1C1C" }}
        >
          {/* Decorative rings */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute w-96 h-96 rounded-full border border-[#D4A017]"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="absolute w-80 h-80 rounded-full border border-[#D46A7E]"
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center gap-3 z-10"
          >
            <motion.span
              className="text-7xl"
              style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              La Vie En Rose
            </motion.span>

            <div className="flex items-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4A017]" />
              <span
                className="text-xs tracking-[0.4em] uppercase text-[#D4A017]"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
              >
                Addis Ababa
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4A017]" />
            </div>

            <span
              className="text-sm tracking-[0.2em] text-white/40 mt-1"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontStyle: "italic" }}
            >
              Where Addis Meets Paris
            </span>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-16 w-48 h-0.5 bg-white/10 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #D46A7E, #D4A017)" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
