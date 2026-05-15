"use client";

import { motion } from "framer-motion";

const atmosphereItems = [
  {
    image: "/images/unnamed (6).jpg",
    title: "The Salon",
    description: "Our main dining area — draped in warm rose and gold tones, with soft lighting that makes every moment feel cinematic.",
  },
  {
    image: "/images/unnamed.jpg",
    title: "The Terrace",
    description: "An open-air terrace overlooking the vibrant streets of Bole Rwanda — perfect for morning coffee or evening wine.",
  },
  {
    image: "/images/unnamed (5).jpg",
    title: "The Private Room",
    description: "An intimate private dining space for celebrations, business dinners, and special occasions — bookable exclusively.",
  },
];

export default function AtmosphereSection() {
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
            The Atmosphere
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Spaces That{" "}
            <span style={{ background: "linear-gradient(135deg, #D4A017, #E8C060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Inspire
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {atmosphereItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative overflow-hidden"
              style={{ borderRadius: "4px" }}
            >
              <div className="relative h-72 overflow-hidden">
                <div
                  className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(28,28,28,0.95) 0%, rgba(28,28,28,0.3) 60%, transparent 100%)" }}
                />
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
              >
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "15px" }}>{item.description}</p>
              </div>
              {/* Gold border on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ border: "2px solid rgba(212,160,23,0.5)", borderRadius: "4px" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
