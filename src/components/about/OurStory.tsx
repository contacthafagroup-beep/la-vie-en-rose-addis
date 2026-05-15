"use client";

import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="section-padding" style={{ background: "#F8F3EE" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <span
              className="text-5xl block mb-3"
              style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}
            >
              The Beginning
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#1C1C1C" }}
            >
              A Dream Born in{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #D46A7E, #B85570)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Two Cities
              </span>
            </h2>

            <div className="space-y-5">
              {[
                "La Vie En Rose was born from a simple yet profound dream — to create a space where the timeless elegance of Parisian café culture could flourish in the vibrant heart of Addis Ababa. Our founder, inspired by years spent in the cafés of Paris, returned to Ethiopia with a vision: to bring that same magic home.",
                "Nestled in the bustling neighborhood of Bole Rwanda, our café opened its doors as more than just a coffee shop. It became a destination — a place where Addis Ababa's creative class, business leaders, and dreamers could gather in an atmosphere of refined beauty and genuine warmth.",
                "Every detail of La Vie En Rose has been thoughtfully curated: from the hand-selected single-origin Ethiopian coffee beans to the imported French pastry techniques, from the rose-gold accents in our décor to the carefully composed playlist that fills our space with the perfect ambiance.",
                "Today, La Vie En Rose stands as a testament to what happens when two great cultures meet — the sophistication of Paris and the soul of Addis Ababa, united in every cup, every bite, every moment shared within our walls.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-[#5C4033]/80 leading-relaxed"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "18px" }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div
                className="h-64 rounded-sm overflow-hidden shadow-xl"
                style={{ border: "3px solid white" }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url('/images/unnamed (2).jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <div
                className="h-64 rounded-sm overflow-hidden shadow-xl mt-8"
                style={{ border: "3px solid white" }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url('/images/unnamed (3).jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <div
                className="h-48 rounded-sm overflow-hidden shadow-xl"
                style={{ border: "3px solid white" }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url('/images/unnamed (4).jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <div
                className="h-48 rounded-sm overflow-hidden shadow-xl -mt-4"
                style={{ border: "3px solid white" }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url('/images/unnamed (7).jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 p-6 shadow-2xl z-10"
              style={{
                background: "#1C1C1C",
                border: "1px solid rgba(212, 160, 23, 0.3)",
                borderRadius: "4px",
              }}
            >
              <p
                className="text-4xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #D4A017, #E8C060)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                }}
              >
                2020
              </p>
              <p
                className="text-white/50 text-xs tracking-widest uppercase mt-1"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
              >
                Est. Addis Ababa
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
