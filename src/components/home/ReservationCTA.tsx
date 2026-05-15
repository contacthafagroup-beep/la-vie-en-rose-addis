"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ReservationCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-fixed-safe"
        style={{
          backgroundImage: `url('/images/unnamed (9).jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(28,28,28,0.92) 0%, rgba(92,64,51,0.85) 50%, rgba(28,28,28,0.92) 100%)",
        }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8 w-32 h-32 opacity-20"
          style={{ border: "1px solid #D4A017", borderRight: "none", borderBottom: "none" }} />
        <div className="absolute bottom-8 right-8 w-32 h-32 opacity-20"
          style={{ border: "1px solid #D4A017", borderLeft: "none", borderTop: "none" }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="text-6xl block mb-4"
            style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}
          >
            Reserve Your Table
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            An Unforgettable{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4A017, #E8C060)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Experience
            </span>{" "}
            Awaits
          </h2>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#D4A017]" />
            <div className="w-2 h-2 rotate-45 bg-[#D4A017]" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#D4A017]" />
          </div>

          <p
            className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "20px" }}
          >
            Whether it&apos;s a romantic dinner, a business meeting, or a celebration with loved ones — 
            La Vie En Rose sets the perfect stage for every occasion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservations"
              className="px-12 py-4 text-sm tracking-widest uppercase font-semibold text-white transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #D46A7E, #B85570)",
                borderRadius: "2px",
                boxShadow: "0 8px 30px rgba(212, 106, 126, 0.4)",
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              }}
            >
              Book a Table
            </Link>
            <a
              href="tel:+251911000000"
              className="px-12 py-4 text-sm tracking-widest uppercase font-semibold transition-all hover:scale-105"
              style={{
                background: "transparent",
                border: "1px solid rgba(212, 160, 23, 0.5)",
                borderRadius: "2px",
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                color: "#D4A017",
              }}
            >
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
