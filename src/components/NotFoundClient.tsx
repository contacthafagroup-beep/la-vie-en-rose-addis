"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFoundClient() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "#1C1C1C" }}>
      {/* Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/images/unnamed.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(212,106,126,0.08) 0%, transparent 70%)" }} />

      {/* Corner ornaments */}
      {["top-8 left-8 border-r-0 border-b-0", "top-8 right-8 border-l-0 border-b-0", "bottom-8 left-8 border-r-0 border-t-0", "bottom-8 right-8 border-l-0 border-t-0"].map((cls, i) => (
        <div key={i} className={`absolute w-16 h-16 opacity-20 ${cls}`} style={{ border: "1px solid #D4A017" }} />
      ))}

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-8xl block mb-4" style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}>
            Oh là là...
          </span>

          <div
            className="text-[120px] md:text-[160px] font-bold leading-none mb-4"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              background: "linear-gradient(135deg, rgba(212,160,23,0.3), rgba(212,106,126,0.3))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4A017]" />
            <div className="w-2 h-2 rotate-45 bg-[#D4A017]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4A017]" />
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            This Page Has Left the Building
          </h1>
          <p className="text-white/50 leading-relaxed mb-10" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "18px" }}>
            The page you&apos;re looking for seems to have wandered off to Paris. Let us guide you back to something beautiful.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm tracking-widest uppercase font-semibold text-white transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #D46A7E, #B85570)", borderRadius: "2px", boxShadow: "0 8px 30px rgba(212,106,126,0.3)", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
            >
              <Home size={16} />
              Back to Home
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm tracking-widest uppercase font-semibold transition-all hover:scale-105"
              style={{ background: "transparent", border: "1px solid rgba(212,160,23,0.4)", borderRadius: "2px", color: "#D4A017", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
            >
              <ArrowLeft size={16} />
              View Menu
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
