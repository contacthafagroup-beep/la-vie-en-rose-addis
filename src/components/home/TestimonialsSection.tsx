"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote, Star } from "lucide-react";
import { REVIEWS, CAFE } from "@/lib/constants";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % REVIEWS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const review = REVIEWS[active];

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "#F8F3EE" }}>
      {/* Decorative bg */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-5"
        style={{ backgroundImage: `url('/images/unnamed (3).jpg')`, backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-5xl block mb-2" style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}>
            What They Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#1C1C1C" }}>
            Real Guest{" "}
            <span style={{ background: "linear-gradient(135deg, #D46A7E, #B85570)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Experiences
            </span>
          </h2>
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={18} fill={i <= 4 ? "#D4A017" : "none"} stroke="#D4A017" aria-hidden="true" />
              ))}
            </div>
            <span className="text-[#1C1C1C] font-bold text-lg" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>{CAFE.rating}</span>
            <span className="text-[#5C4033]/60 text-sm" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
              ({CAFE.reviewCount} Google reviews)
            </span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative min-h-[300px] flex items-center justify-center"
          aria-live="polite"
          aria-atomic="true"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="text-center max-w-3xl mx-auto w-full"
            >
              {/* Quote icon */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ background: "linear-gradient(135deg, #D46A7E, #B85570)", boxShadow: "0 8px 30px rgba(212,106,126,0.3)" }}
                aria-hidden="true"
              >
                <Quote size={24} color="white" />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4" aria-label={`${review.rating} out of 5 stars`}>
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={18} fill={i <= review.rating ? "#D4A017" : "none"} stroke="#D4A017" aria-hidden="true" />
                ))}
              </div>

              {/* Meal tag */}
              <span
                className="inline-block px-3 py-1 text-xs tracking-widest uppercase font-semibold mb-5"
                style={{ background: "rgba(212,106,126,0.1)", color: "#D46A7E", borderRadius: "2px", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
              >
                {review.meal}
              </span>

              {/* Review text */}
              <p
                className="text-[#5C4033] leading-relaxed mb-7 italic"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "21px" }}
              >
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author + scores */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ background: "linear-gradient(135deg, #D46A7E, #B85570)", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                    aria-hidden="true"
                  >
                    {review.avatar}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-[#1C1C1C]" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                      {review.name}
                    </p>
                    <p className="text-xs text-[#5C4033]/50" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                      Google Review · {review.date}
                    </p>
                  </div>
                </div>

                {/* Food / Service / Atmosphere scores */}
                <div className="flex gap-4 flex-wrap justify-center">
                  {Object.entries(review.highlights).map(([key, val]) => (
                    <div key={key} className="flex items-center gap-1.5">
                      <span className="text-xs text-[#5C4033]/50 capitalize" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>{key}</span>
                      <span className="text-xs font-bold text-[#D4A017]" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>{val}/5</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8" role="tablist" aria-label="Review navigation">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Review ${i + 1} by ${REVIEWS[i].name}`}
              onClick={() => setActive(i)}
              className="transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D46A7E] rounded-full"
              style={{
                width: i === active ? "32px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === active ? "#D46A7E" : "rgba(212,106,126,0.3)",
              }}
            />
          ))}
        </div>

        {/* Google attribution */}
        <p className="text-center text-xs text-[#5C4033]/40 mt-6" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
          Reviews sourced from Google Maps · La Vie En Rose Addis, Bole Rwanda Branch
        </p>
      </div>
    </section>
  );
}
