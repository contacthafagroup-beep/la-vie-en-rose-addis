"use client";

import { motion } from "framer-motion";
import { Clock, Tag, Gift } from "lucide-react";

const offers = [
  {
    icon: Clock,
    badge: "Daily",
    title: "Morning Ritual",
    subtitle: "7AM – 10AM",
    description: "Start your day right — any specialty coffee + fresh croissant for a special bundled price. The perfect Parisian morning.",
    highlight: "Coffee + Croissant",
    color: "#D4A017",
    bg: "rgba(212, 160, 23, 0.08)",
    border: "rgba(212, 160, 23, 0.25)",
  },
  {
    icon: Tag,
    badge: "Weekend",
    title: "Brunch Luxe",
    subtitle: "Saturday & Sunday",
    description: "Our signature weekend brunch experience — a curated 3-course menu with bottomless coffee and fresh-squeezed juice.",
    highlight: "3-Course Brunch",
    color: "#D46A7E",
    bg: "rgba(212, 106, 126, 0.08)",
    border: "rgba(212, 106, 126, 0.25)",
  },
  {
    icon: Gift,
    badge: "Special",
    title: "Celebration Package",
    subtitle: "Birthdays & Anniversaries",
    description: "Make your special occasion unforgettable. Includes a decorated table, complimentary dessert, and a personalized message.",
    highlight: "Private Dining",
    color: "#5C4033",
    bg: "rgba(92, 64, 51, 0.08)",
    border: "rgba(92, 64, 51, 0.25)",
  },
];

export default function SpecialOffers() {
  return (
    <section className="section-padding" style={{ background: "#F8F3EE" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-5xl block mb-2" style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}>
            Special Offers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#1C1C1C" }}>
            Curated{" "}
            <span style={{ background: "linear-gradient(135deg, #D4A017, #E8C060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Experiences
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4A017]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#D4A017]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4A017]" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}
              className="relative p-8 overflow-hidden group cursor-pointer transition-all duration-400"
              style={{ background: offer.bg, border: `1px solid ${offer.border}`, borderRadius: "4px" }}
            >
              {/* Badge */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ background: offer.color, color: "white", borderRadius: "2px", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
              >
                <offer.icon size={11} />
                {offer.badge}
              </div>

              <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#1C1C1C" }}>
                {offer.title}
              </h3>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: offer.color, fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                {offer.subtitle}
              </p>
              <p className="text-[#5C4033]/70 leading-relaxed mb-6" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "17px" }}>
                {offer.description}
              </p>

              <div
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase"
                style={{ background: "white", border: `1px solid ${offer.border}`, borderRadius: "2px", color: offer.color, fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
              >
                {offer.highlight}
              </div>

              {/* Decorative corner */}
              <div
                className="absolute bottom-0 right-0 w-20 h-20 opacity-10 transition-opacity group-hover:opacity-20"
                style={{ background: `radial-gradient(circle at bottom right, ${offer.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
