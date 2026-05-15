"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import { CAFE_IMAGES, SOCIAL } from "@/lib/constants";

const galleryImages = [
  { ...CAFE_IMAGES[0], span: "col-span-1 row-span-2" },
  { ...CAFE_IMAGES[1], span: "col-span-1 row-span-1" },
  { ...CAFE_IMAGES[2], span: "col-span-1 row-span-1" },
  { ...CAFE_IMAGES[3], span: "col-span-1 row-span-1" },
  { ...CAFE_IMAGES[4], span: "col-span-1 row-span-1" },
];

export default function GalleryPreview() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "#1C1C1C" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <span
              className="text-5xl block mb-2"
              style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}
            >
              Our World
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Instagram{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #D4A017, #E8C060)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Moments
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <InstagramIcon size={20} color="#D46A7E" />
            <a
              href="https://www.instagram.com/lavieenroseaddis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 text-sm hover:text-[#D46A7E] transition-colors"
              style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
            >
              {SOCIAL.instagramHandle}
            </a>
          </div>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10" style={{ gridAutoRows: "200px" }}>
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${img.span}`}
              style={{ borderRadius: "4px" }}
            >
              <div
                className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${img.src}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: "rgba(212, 106, 126, 0.6)" }}
              >
                <InstagramIcon size={32} color="white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 group"
          >
            <span
              className="text-sm tracking-widest uppercase font-semibold"
              style={{ color: "#D46A7E", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
            >
              View Full Gallery
            </span>
            <motion.div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "rgba(212, 106, 126, 0.1)", border: "1px solid #D46A7E" }}
              whileHover={{ x: 4 }}
            >
              <ArrowRight size={14} style={{ color: "#D46A7E" }} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
