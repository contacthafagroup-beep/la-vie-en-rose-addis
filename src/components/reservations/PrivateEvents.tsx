"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Users, Music, Camera } from "lucide-react";

const events = [
  {
    icon: Sparkles,
    title: "Birthday Celebrations",
    description: "Personalized table décor, custom cake arrangement, and a dedicated host for your special day.",
  },
  {
    icon: Users,
    title: "Corporate Dinners",
    description: "Impress your clients with a private dining experience in our exclusive salon — catering for up to 20 guests.",
  },
  {
    icon: Music,
    title: "Anniversary Evenings",
    description: "Romantic candlelit setup, curated menu, and optional live acoustic music for an unforgettable evening.",
  },
  {
    icon: Camera,
    title: "Photo & Content Shoots",
    description: "Book the café for exclusive content creation sessions — perfect for influencers, brands, and photographers.",
  },
];

export default function PrivateEvents() {
  return (
    <section className="section-padding" style={{ background: "#1C1C1C" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-5xl block mb-2" style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}>
            Private Events
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Celebrate in{" "}
            <span style={{ background: "linear-gradient(135deg, #D4A017, #E8C060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Style
            </span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "18px" }}>
            From intimate dinners to grand celebrations, we create bespoke experiences tailored to your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="p-7 group transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-all group-hover:scale-110"
                style={{ background: "rgba(212,106,126,0.15)", border: "1px solid rgba(212,106,126,0.3)" }}
              >
                <event.icon size={22} style={{ color: "#D46A7E" }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>{event.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "15px" }}>{event.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/50 mb-5" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "18px" }}>
            For private event inquiries, contact us directly or fill out the reservation form above.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-3.5 text-sm tracking-widest uppercase font-semibold text-white transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #D46A7E, #B85570)", borderRadius: "2px", fontFamily: "var(--font-montserrat), system-ui, sans-serif", boxShadow: "0 8px 30px rgba(212,106,126,0.3)" }}
            >
              Enquire Now
            </Link>
            <a
              href="tel:+251911000000"
              className="px-10 py-3.5 text-sm tracking-widest uppercase font-semibold transition-all hover:scale-105"
              style={{ background: "transparent", border: "1px solid rgba(212,160,23,0.4)", borderRadius: "2px", color: "#D4A017", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
            >
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
