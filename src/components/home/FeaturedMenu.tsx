"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredItems = [
  {
    category: "Signature Coffee",
    name: "Rose Latte",
    description: "Velvety espresso with rose-infused steamed milk, topped with edible rose petals",
    price: "320 ETB",
    image: "/images/unnamed (8).jpg",
    tag: "Bestseller",
    tagColor: "#D46A7E",
  },
  {
    category: "Pastry",
    name: "Croissant au Beurre",
    description: "Flaky, buttery French croissant baked fresh every morning with premium imported butter",
    price: "180 ETB",
    image: "/images/unnamed (4).jpg",
    tag: "Chef's Pick",
    tagColor: "#D4A017",
  },
  {
    category: "Specialty",
    name: "Ethiopian Macchiato",
    description: "Traditional Ethiopian coffee ceremony style, served with a modern luxury twist",
    price: "150 ETB",
    image: "/images/unnamed (1).jpg",
    tag: "Local Favorite",
    tagColor: "#5C4033",
  },
  {
    category: "Dessert",
    name: "Tarte aux Fraises",
    description: "Classic French strawberry tart with vanilla custard cream and fresh seasonal berries",
    price: "280 ETB",
    image: "/images/unnamed (7).jpg",
    tag: "New",
    tagColor: "#D46A7E",
  },
];

export default function FeaturedMenu() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "#1C1C1C" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="text-5xl block mb-2"
            style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}
          >
            Signature Selections
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Crafted with{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4A017, #E8C060)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Passion
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#D4A017]" />
            <div className="w-2 h-2 rotate-45 bg-[#D4A017]" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#D4A017]" />
          </div>
          <p
            className="text-white/50 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "18px" }}
          >
            Each item on our menu is a carefully curated experience, blending French culinary tradition with Ethiopian flavors
          </p>
        </motion.div>

        {/* Menu cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "4px",
                transition: "all 0.4s ease",
              }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <div
                  className="w-full h-full img-scale-inner"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(28,28,28,0.8) 0%, transparent 60%)",
                  }}
                />
                {/* Tag */}
                <div
                  className="absolute top-3 left-3 px-3 py-1 text-white text-xs font-semibold tracking-wider"
                  style={{
                    background: item.tagColor,
                    borderRadius: "2px",
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  }}
                >
                  {item.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p
                  className="text-xs tracking-widest uppercase mb-2"
                  style={{ color: "#D4A017", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                >
                  {item.category}
                </p>
                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {item.name}
                </h3>
                <p
                  className="text-white/50 text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "15px" }}
                >
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-lg font-bold"
                    style={{
                      background: "linear-gradient(135deg, #D4A017, #E8C060)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    {item.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-xs tracking-wider uppercase px-3 py-1.5 text-white/70 hover:text-white transition-colors"
                    style={{
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "2px",
                      fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    }}
                  >
                    Order
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View full menu CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-3 group"
          >
            <span
              className="text-sm tracking-widest uppercase font-semibold"
              style={{ color: "#D4A017", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
            >
              View Full Menu
            </span>
            <motion.div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "rgba(212, 160, 23, 0.1)", border: "1px solid #D4A017" }}
              whileHover={{ x: 4 }}
            >
              <ArrowRight size={14} style={{ color: "#D4A017" }} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
