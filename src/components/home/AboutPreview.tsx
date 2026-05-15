"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="section-padding overflow-hidden" style={{ background: "#F8F3EE" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images collage */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            {/* Main image */}
            <div
              className="absolute top-0 left-0 w-3/4 h-4/5 rounded-sm overflow-hidden shadow-2xl"
              style={{ border: "4px solid white" }}
            >
              <div
                className="w-full h-full"
                role="img"
                aria-label="La Vie En Rose café interior"
                style={{
                  backgroundImage: `url('/images/unnamed.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>

            {/* Secondary image */}
            <div
              className="absolute bottom-0 right-0 w-1/2 h-2/3 rounded-sm overflow-hidden shadow-2xl"
              style={{ border: "4px solid white" }}
            >
              <div
                className="w-full h-full"
                role="img"
                aria-label="Specialty coffee at La Vie En Rose"
                style={{
                  backgroundImage: `url('/images/unnamed (2).jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>

            {/* Gold accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute top-1/2 right-4 -translate-y-1/2 p-5 shadow-2xl z-10"
              style={{
                background: "linear-gradient(135deg, #D4A017, #E8C060)",
                borderRadius: "2px",
                minWidth: "140px",
              }}
            >
              <p
                className="text-4xl font-bold text-white leading-none"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                4.2★
              </p>
              <p
                className="text-white/80 text-xs tracking-wider mt-1 uppercase"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
              >
                257 Google Reviews
              </p>
            </motion.div>

            {/* Decorative frame */}
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 opacity-30"
              style={{ border: "2px solid #D46A7E", borderRadius: "2px" }}
            />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl block mb-2"
              style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}
            >
              Our Story
            </motion.span>

            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#1C1C1C" }}
            >
              A Parisian Dream in the{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #D46A7E, #B85570)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Heart of Addis
              </span>
            </h2>

            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-[#D4A017] to-transparent" />
              <div className="w-2 h-2 rotate-45 bg-[#D4A017]" />
            </div>

            <p
              className="text-[#5C4033]/80 leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "18px" }}
            >
              The first instagrammable café and restaurant in Ethiopia. At La Vie En Rose, we don&apos;t just serve meals — we create moments. We offer a large selection of dishes, cakes, pastries and beverages.
            </p>

            <p
              className="text-[#5C4033]/70 leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "18px" }}
            >
              Nestled on Rwanda Street in the heart of Bole, our café is a sanctuary where the warmth of Ethiopian hospitality meets the sophistication of French café culture — creating a space that is uniquely, beautifully ours.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Premium Beans", desc: "Single-origin Ethiopian & global" },
                { label: "Artisan Pastries", desc: "Baked fresh daily" },
                { label: "Elegant Ambiance", desc: "Parisian-inspired interiors" },
                { label: "Warm Hospitality", desc: "Ethiopian heart & soul" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ background: "#D4A017" }}
                  />
                  <div>
                    <p
                      className="text-sm font-semibold text-[#1C1C1C]"
                      style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-xs text-[#5C4033]/60 mt-0.5"
                      style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 group"
            >
              <span
                className="text-sm tracking-widest uppercase font-semibold"
                style={{ color: "#D46A7E", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
              >
                Discover Our Story
              </span>
              <motion.div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "rgba(212, 106, 126, 0.1)", border: "1px solid #D46A7E" }}
                whileHover={{ x: 4 }}
              >
                <ArrowRight size={14} style={{ color: "#D46A7E" }} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
