"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 4.2,  suffix: "★",   label: "Google Rating",   decimal: true },
  { value: 257,  suffix: "+",   label: "Google Reviews" },
  { value: 462,  suffix: "+",   label: "Photos on Google" },
  { value: 5,    suffix: " Yrs",label: "Of Excellence" },
];

function AnimatedCounter({
  value,
  suffix,
  decimal,
  inView,
}: {
  value: number;
  suffix: string;
  decimal?: boolean;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {decimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #5C4033 0%, #3D2B1F 50%, #1C1C1C 100%)",
      }}
    >
      {/* Decorative overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/images/unnamed (3).jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0" style={{ background: "rgba(28,28,28,0.7)" }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span
            className="text-4xl block mb-2"
            style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}
          >
            Our Numbers
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            A Legacy of{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4A017, #E8C060)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Excellence
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center group"
            >
              <div
                className="inline-flex flex-col items-center p-8 w-full transition-all duration-300 group-hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(212, 160, 23, 0.2)",
                  borderRadius: "4px",
                }}
              >
                <span
                  className="text-5xl md:text-6xl font-bold mb-2"
                  style={{
                    background: "linear-gradient(135deg, #D4A017, #E8C060)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimal={stat.decimal}
                    inView={inView}
                  />
                </span>
                <span
                  className="text-white/60 text-sm tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                >
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
