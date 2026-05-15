"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import { CAFE_IMAGES, SOCIAL } from "@/lib/constants";

// Real café images + supplementary Unsplash for variety
const galleryItems = [
  ...CAFE_IMAGES.map((img, i) => ({
    id: i + 1,
    src: img.src,
    alt: img.alt,
    category: i % 4 === 0 ? "interior" : i % 4 === 1 ? "food" : i % 4 === 2 ? "coffee" : "dining",
    real: true,
  })),
  // Supplementary
  { id: 100, src: "/images/unnamed (3).jpg", alt: "Specialty coffee art", category: "coffee", real: false },
  { id: 101, src: "/images/unnamed (7).jpg", alt: "Artisan pastries", category: "food", real: false },
  { id: 102, src: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&q=80", alt: "Crème brûlée dessert", category: "food", real: false },
  { id: 103, src: "https://images.unsplash.com/photo-1558326567-98ae2405596b?w=800&q=80", alt: "French macarons", category: "food", real: false },
];

const filters = [
  { id: "all",      label: "All" },
  { id: "interior", label: "Interior" },
  { id: "coffee",   label: "Coffee" },
  { id: "food",     label: "Food & Pastries" },
  { id: "dining",   label: "Dining" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const filtered = activeFilter === "all" ? galleryItems : galleryItems.filter(i => i.category === activeFilter);

  const openLightbox = (id: number) => {
    const idx = filtered.findIndex(i => i.id === id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const prev = () => setLightboxIndex(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null);
  const next = () => setLightboxIndex(i => i !== null ? (i + 1) % filtered.length : null);

  const currentItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      {/* Hero — use a real café image */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url('/images/unnamed.jpg')`, backgroundSize: "cover", backgroundPosition: "center" }}
          role="img"
          aria-label="La Vie En Rose Addis café interior"
        />
        <div className="absolute inset-0" style={{ background: "rgba(28,28,28,0.82)" }} />
        <div className="relative z-10 text-center px-6">
          <motion.span initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl block mb-3" style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}>
            Our Gallery
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Moments Worth Remembering
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-white/50" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "18px" }}>
            {galleryItems.length} photographs from our world
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding" style={{ background: "#F8F3EE" }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Instagram handle */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <InstagramIcon size={18} color="#D46A7E" />
            <a
              href="https://www.instagram.com/lavieenroseaddis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wider text-[#5C4033]/70 hover:text-[#D46A7E] transition-colors"
              style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
            >
              Follow us {SOCIAL.instagramHandle}
            </a>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-10" role="group" aria-label="Gallery filters">
            {filters.map(filter => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-pressed={activeFilter === filter.id}
                className="px-6 py-2.5 text-xs tracking-widest uppercase font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D46A7E]"
                style={{
                  background: activeFilter === filter.id ? "linear-gradient(135deg, #D46A7E, #B85570)" : "white",
                  color: activeFilter === filter.id ? "white" : "#5C4033",
                  border: `1px solid ${activeFilter === filter.id ? "transparent" : "rgba(92,64,51,0.2)"}`,
                  borderRadius: "2px",
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  boxShadow: activeFilter === filter.id ? "0 4px 20px rgba(212,106,126,0.3)" : "none",
                }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>

          {/* Masonry grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4"
              style={{ columnGap: "1rem" }}
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="relative group cursor-pointer overflow-hidden mb-4"
                  style={{ breakInside: "avoid", borderRadius: "4px", border: "3px solid white", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
                  onClick={() => openLightbox(item.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View: ${item.alt}`}
                  onKeyDown={e => e.key === "Enter" && openLightbox(item.id)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ display: "block" }}
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2"
                    style={{ background: "rgba(212,106,126,0.72)" }}
                    aria-hidden="true"
                  >
                    <ZoomIn size={28} color="white" />
                    <p className="text-white text-xs tracking-wider text-center px-4 font-medium" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                      {item.alt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Real video section */}
      <section className="py-20" style={{ background: "#1C1C1C" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="text-5xl block mb-2" style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}>Feel the Vibe</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Experience the{" "}
              <span style={{ background: "linear-gradient(135deg, #D4A017, #E8C060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Atmosphere
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
            style={{ borderRadius: "4px", border: "3px solid rgba(212,160,23,0.2)", aspectRatio: "16/9", maxHeight: "560px" }}
          >
            {!videoPlaying ? (
              <>
                {/* Poster frame */}
                <div
                  className="w-full h-full"
                  style={{ backgroundImage: `url('/images/unnamed (2).jpg')`, backgroundSize: "cover", backgroundPosition: "center" }}
                  role="img"
                  aria-label="La Vie En Rose café video thumbnail"
                />
                <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(28,28,28,0.55)" }}>
                  <div className="text-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setVideoPlaying(true)}
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 focus:outline-none focus:ring-4 focus:ring-[#D46A7E]"
                      style={{ background: "rgba(212,106,126,0.9)", boxShadow: "0 0 0 8px rgba(212,106,126,0.2)" }}
                      aria-label="Play café video"
                    >
                      <Play size={32} color="white" fill="white" aria-hidden="true" />
                    </motion.button>
                    <p className="text-white/70 text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                      Watch Our Story
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <video
                src="/video/cafe.mp4"
                autoPlay
                controls
                className="w-full h-full object-cover"
                style={{ background: "#000" }}
                aria-label="La Vie En Rose Addis café video"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(28,28,28,0.97)" }}
            onClick={() => setLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Image: ${currentItem.alt}`}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="relative max-w-5xl w-full"
              onClick={e => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentItem.src}
                alt={currentItem.alt}
                className="w-full object-contain rounded-sm"
                style={{ maxHeight: "78vh" }}
              />
              <p className="text-white/50 text-sm text-center mt-3 italic" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "16px" }}>
                {currentItem.alt}
              </p>
              <p className="text-white/30 text-xs text-center mt-1" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                {(lightboxIndex ?? 0) + 1} / {filtered.length}
              </p>

              {/* Close */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
                style={{ background: "#D46A7E" }}
                aria-label="Close image"
              >
                <X size={18} aria-hidden="true" />
              </button>

              {/* Prev */}
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 rounded-full items-center justify-center text-white transition-all hover:scale-110 hidden md:flex focus:outline-none focus:ring-2 focus:ring-white"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
                aria-label="Previous image"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>

              {/* Next */}
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 rounded-full items-center justify-center text-white transition-all hover:scale-110 hidden md:flex focus:outline-none focus:ring-2 focus:ring-white"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
                aria-label="Next image"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
