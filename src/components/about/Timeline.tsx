"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2019",
    title: "The Vision",
    description: "Our founder returns from Paris with a dream: to bring the magic of French café culture to Addis Ababa.",
  },
  {
    year: "2020",
    title: "Grand Opening",
    description: "La Vie En Rose opens its doors in Bole Rwanda, Addis Ababa — welcomed with overwhelming love from the community.",
  },
  {
    year: "2021",
    title: "First Award",
    description: "Named 'Best New Café in Addis Ababa' by the Ethiopia Food & Hospitality Awards.",
  },
  {
    year: "2022",
    title: "Menu Expansion",
    description: "Launched our full fine dining menu, bringing authentic French cuisine to the heart of Ethiopia.",
  },
  {
    year: "2023",
    title: "5,000 Guests",
    description: "Celebrated serving over 5,000 happy guests and became a landmark destination in Bole Rwanda.",
  },
  {
    year: "2024",
    title: "Growing Legacy",
    description: "Recognized by international travel publications as one of Africa's most beautiful café experiences.",
  },
];

export default function Timeline() {
  return (
    <section className="section-padding" style={{ background: "#F8F3EE" }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-5xl block mb-2" style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}>
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#1C1C1C" }}>
            Milestones &{" "}
            <span style={{ background: "linear-gradient(135deg, #D46A7E, #B85570)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Memories
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{ background: "linear-gradient(to bottom, transparent, #D4A017, #D46A7E, transparent)" }}
          />

          <div className="space-y-8 md:space-y-0">
            {milestones.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className={`relative md:grid md:grid-cols-2 md:gap-8 mb-8 ${i % 2 === 0 ? "" : "md:direction-rtl"}`}
              >
                {i % 2 === 0 ? (
                  <>
                    {/* Left content */}
                    <div className="md:text-right md:pr-12">
                      <div
                        className="inline-block px-4 py-2 mb-3"
                        style={{ background: "linear-gradient(135deg, #D4A017, #E8C060)", borderRadius: "2px" }}
                      >
                        <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#1C1C1C] mb-2" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>{item.title}</h3>
                      <p className="text-[#5C4033]/70 leading-relaxed" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "17px" }}>{item.description}</p>
                    </div>
                    {/* Right spacer with dot */}
                    <div className="hidden md:flex items-start justify-start pl-12 pt-2">
                      <div className="w-4 h-4 rounded-full -ml-[calc(2rem+8px)] mt-1 shrink-0" style={{ background: "#D4A017", boxShadow: "0 0 0 4px rgba(212,160,23,0.2)" }} />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left spacer with dot */}
                    <div className="hidden md:flex items-start justify-end pr-12 pt-2">
                      <div className="w-4 h-4 rounded-full -mr-[calc(2rem+8px)] mt-1 shrink-0" style={{ background: "#D46A7E", boxShadow: "0 0 0 4px rgba(212,106,126,0.2)" }} />
                    </div>
                    {/* Right content */}
                    <div className="md:pl-12">
                      <div
                        className="inline-block px-4 py-2 mb-3"
                        style={{ background: "linear-gradient(135deg, #D46A7E, #B85570)", borderRadius: "2px" }}
                      >
                        <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#1C1C1C] mb-2" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>{item.title}</h3>
                      <p className="text-[#5C4033]/70 leading-relaxed" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "17px" }}>{item.description}</p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
