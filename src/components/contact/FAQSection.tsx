"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do I need a reservation to visit?",
    a: "Walk-ins are welcome, but we strongly recommend reserving a table — especially on weekends and evenings — to guarantee your preferred seating and time.",
  },
  {
    q: "Is there a dress code?",
    a: "We maintain a smart-casual dress code. We want you to feel comfortable while honoring the elegant atmosphere of La Vie En Rose.",
  },
  {
    q: "Do you offer takeaway and delivery?",
    a: "Yes! We offer both takeaway and contactless delivery. You can order via phone or WhatsApp. Delivery is available within a 5km radius of Bole Rwanda.",
  },
  {
    q: "Can you accommodate dietary restrictions?",
    a: "Absolutely. We cater to vegetarian, vegan, gluten-free, and other dietary needs. Please mention your requirements when booking or ordering.",
  },
  {
    q: "Do you host private events?",
    a: "Yes — we offer private dining for birthdays, anniversaries, corporate events, and more. Contact us to discuss your vision and we'll create a bespoke experience.",
  },
  {
    q: "Is parking available?",
    a: "Yes, there is parking available near our location in Bole Rwanda. Our staff can guide you to the nearest parking area upon arrival.",
  },
  {
    q: "Do you have Wi-Fi?",
    a: "Yes, complimentary high-speed Wi-Fi is available for all guests. Ask our staff for the password when you arrive.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-padding" style={{ background: "#1C1C1C" }}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-5xl block mb-2" style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}>
            Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Frequently Asked{" "}
            <span style={{ background: "linear-gradient(135deg, #D4A017, #E8C060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Questions
            </span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors"
                style={{ background: open === i ? "rgba(212,106,126,0.08)" : "rgba(255,255,255,0.03)" }}
              >
                <span
                  className="font-semibold text-white text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                >
                  {faq.q}
                </span>
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all"
                  style={{ background: open === i ? "#D46A7E" : "rgba(255,255,255,0.08)" }}
                >
                  {open === i
                    ? <Minus size={14} color="white" />
                    : <Plus size={14} color="white" />
                  }
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="px-5 pb-5"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      <p
                        className="text-white/60 leading-relaxed pt-4"
                        style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "17px" }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
