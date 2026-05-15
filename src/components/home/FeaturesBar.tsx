"use client";

import { motion } from "framer-motion";
import { Coffee, Truck, UtensilsCrossed, Star } from "lucide-react";

const features = [
  {
    icon: UtensilsCrossed,
    title: "Dine-In",
    desc: "Elegant table service",
  },
  {
    icon: Coffee,
    title: "First Instagrammable Café",
    desc: "In Ethiopia",
  },
  {
    icon: Truck,
    title: "Takeaway Available",
    desc: "Quick & convenient",
  },
  {
    icon: Star,
    title: "4.2 ★ on Google",
    desc: "257 verified reviews",
  },
];

export default function FeaturesBar() {
  return (
    <section className="py-8 relative overflow-hidden" style={{ background: "#1C1C1C" }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #D4A017, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #D46A7E, transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 group"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
                style={{ background: "rgba(212,106,126,0.15)", border: "1px solid rgba(212,106,126,0.3)" }}
                aria-hidden="true"
              >
                <feature.icon size={18} style={{ color: "#D46A7E" }} />
              </div>
              <div>
                <p className="text-white text-sm font-semibold" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                  {feature.title}
                </p>
                <p className="text-white/40 text-xs mt-0.5" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
