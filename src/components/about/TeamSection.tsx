"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Chef Marie Dubois",
    role: "Head Pastry Chef",
    bio: "Trained at Le Cordon Bleu Paris, Marie brings 15 years of French pastry expertise to Addis Ababa.",
    image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80",
  },
  {
    name: "Dawit Alemu",
    role: "Head Barista & Coffee Director",
    bio: "World Barista Championship finalist, Dawit is a master of Ethiopian coffee traditions and modern specialty techniques.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Hana Girma",
    role: "Restaurant Manager",
    bio: "With a background in luxury hospitality from Dubai and Nairobi, Hana ensures every guest experience is exceptional.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
];

export default function TeamSection() {
  return (
    <section className="section-padding" style={{ background: "#F8F3EE" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="text-5xl block mb-2"
            style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}
          >
            The Artisans
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#1C1C1C" }}
          >
            Meet Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D46A7E, #B85570)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Team
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full shadow-2xl">
                <div
                  className="w-full h-full img-scale-inner"
                  style={{
                    backgroundImage: `url('${member.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                  }}
                />
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "rgba(212, 106, 126, 0.3)" }}
                />
                {/* Gold ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ border: "3px solid rgba(212, 160, 23, 0.4)" }}
                />
              </div>

              <h3
                className="text-xl font-bold text-[#1C1C1C] mb-1"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {member.name}
              </h3>
              <p
                className="text-sm tracking-widest uppercase mb-3"
                style={{ color: "#D4A017", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
              >
                {member.role}
              </p>
              <p
                className="text-[#5C4033]/70 text-sm leading-relaxed max-w-xs mx-auto"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "16px" }}
              >
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
