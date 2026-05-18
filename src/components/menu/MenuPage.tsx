"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { Coffee, Leaf, Croissant, Sunrise, UtensilsCrossed, IceCream, Wine, Search, X, Info } from "lucide-react";
import { menuItems, dietaryConfig, type DietaryTag } from "@/lib/menuData";

const categories = [
  { id: "all",       label: "All Items",        icon: UtensilsCrossed },
  { id: "coffee",    label: "Specialty Coffee", icon: Coffee },
  { id: "tea",       label: "Tea Collection",   icon: Leaf },
  { id: "pastries",  label: "Pastries",         icon: Croissant },
  { id: "breakfast", label: "Breakfast",        icon: Sunrise },
  { id: "mains",     label: "Main Dishes",      icon: UtensilsCrossed },
  { id: "desserts",  label: "Desserts",         icon: IceCream },
  { id: "drinks",    label: "Signature Drinks", icon: Wine },
];

const dietaryFilters: { id: DietaryTag | "all"; label: string }[] = [
  { id: "all",          label: "All" },
  { id: "vegan",        label: "🌱 Vegan" },
  { id: "vegetarian",   label: "🥗 Vegetarian" },
  { id: "gluten-free",  label: "🌾 Gluten-Free" },
];

function DietaryBadge({ tag }: { tag: DietaryTag }) {
  const cfg = dietaryConfig[tag];
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 text-[10px] font-semibold tracking-wide rounded-sm"
      style={{ color: cfg.color, background: cfg.bg, fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
    >
      {cfg.label}
    </span>
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeDietary, setActiveDietary] = useState<DietaryTag | "all">("all");
  const [search, setSearch] = useState("");
  const [showAllergens, setShowAllergens] = useState<number | null>(null);

  const filtered = useMemo(() => {
    let items = activeCategory === "all" ? menuItems : menuItems.filter(i => i.category === activeCategory);
    if (activeDietary !== "all") items = items.filter(i => i.dietary.includes(activeDietary));
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(i => i.name.toLowerCase().includes(q) || i.description.toLowerCase().includes(q));
    }
    return items;
  }, [activeCategory, activeDietary, search]);

  const countFor = useMemo(() => (catId: string) =>
    catId === "all" ? menuItems.length : menuItems.filter(i => i.category === catId).length,
    []
  );

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url('/images/unnamed (9).jpg')`, backgroundSize: "cover", backgroundPosition: "center" }}
          role="img"
          aria-label="Elegant café dining table with fine food"
        />
        <div className="absolute inset-0" style={{ background: "rgba(28,28,28,0.88)" }} />
        <div className="relative z-10 text-center px-6">
          <motion.span initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl block mb-3" style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}>
            Our Menu
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Crafted with Love & Expertise
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-white/50" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "18px" }}>
            {menuItems.length} curated items across {categories.length - 1} categories
          </motion.p>
        </div>
      </section>

      {/* Menu content */}
      <section className="section-padding" style={{ background: "#F8F3EE" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Sticky sidebar */}
            <aside className="lg:w-64 shrink-0" aria-label="Menu filters">
              <div className="lg:sticky lg:top-24 space-y-2">
                {/* Search */}
                <div className="relative mb-5">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#D46A7E" }} aria-hidden="true" />
                  <input
                    type="search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search menu..."
                    aria-label="Search menu items"
                    className="w-full pl-9 pr-9 py-3 text-sm outline-none focus:ring-2"
                    style={{ background: "white", border: "1px solid rgba(212,160,23,0.2)", borderRadius: "2px", fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#1C1C1C" }}
                  />
                  {search && (
                    <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2" aria-label="Clear search">
                      <X size={14} style={{ color: "#5C4033" }} />
                    </button>
                  )}
                </div>

                <p className="text-xs tracking-widest uppercase font-semibold text-[#D4A017] mb-3 px-1" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>Categories</p>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    aria-pressed={activeCategory === cat.id}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left transition-all duration-200"
                    style={{
                      background: activeCategory === cat.id ? "linear-gradient(135deg, #D46A7E, #B85570)" : "white",
                      border: `1px solid ${activeCategory === cat.id ? "transparent" : "rgba(92,64,51,0.12)"}`,
                      borderRadius: "2px",
                      boxShadow: activeCategory === cat.id ? "0 4px 20px rgba(212,106,126,0.25)" : "none",
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <cat.icon size={14} style={{ color: activeCategory === cat.id ? "white" : "#D46A7E" }} aria-hidden="true" />
                      <span className="text-xs font-semibold tracking-wide" style={{ color: activeCategory === cat.id ? "white" : "#5C4033", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                        {cat.label}
                      </span>
                    </div>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: activeCategory === cat.id ? "rgba(255,255,255,0.25)" : "rgba(212,106,126,0.1)", color: activeCategory === cat.id ? "white" : "#D46A7E", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                      {countFor(cat.id)}
                    </span>
                  </button>
                ))}

                {/* Dietary filter */}
                <div className="pt-4 mt-2" style={{ borderTop: "1px solid rgba(92,64,51,0.1)" }}>
                  <p className="text-xs tracking-widest uppercase font-semibold text-[#D4A017] mb-3 px-1" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>Dietary</p>
                  {dietaryFilters.map(f => (
                    <button
                      key={f.id}
                      onClick={() => setActiveDietary(f.id)}
                      aria-pressed={activeDietary === f.id}
                      className="w-full text-left px-4 py-2.5 text-xs font-semibold tracking-wide transition-all duration-200 mb-1"
                      style={{
                        background: activeDietary === f.id ? "rgba(212,106,126,0.1)" : "transparent",
                        border: `1px solid ${activeDietary === f.id ? "rgba(212,106,126,0.3)" : "transparent"}`,
                        borderRadius: "2px",
                        color: activeDietary === f.id ? "#D46A7E" : "#5C4033",
                        fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                      }}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                {/* Allergen note */}
                <div className="mt-4 p-3 rounded-sm" style={{ background: "rgba(212,160,23,0.08)", border: "1px solid rgba(212,160,23,0.2)" }}>
                  <p className="text-[10px] text-[#5C4033]/70 leading-relaxed" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                    <strong>Allergen info</strong> is shown on each item. Please inform staff of any allergies before ordering.
                  </p>
                </div>
              </div>
            </aside>

            {/* Menu grid */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <p className="text-sm text-[#5C4033]/60" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                  Showing <span className="font-semibold text-[#1C1C1C]">{filtered.length}</span> items
                  {search && <span> for &ldquo;<span className="text-[#D46A7E]">{search}</span>&rdquo;</span>}
                </p>
                {(search || activeDietary !== "all") && (
                  <button
                    onClick={() => { setSearch(""); setActiveDietary("all"); }}
                    className="text-xs text-[#D46A7E] hover:underline"
                    style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                  >
                    Clear filters
                  </button>
                )}
              </div>

              <AnimatePresence mode="wait">
                {filtered.length === 0 ? (
                  <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-20">
                    <span className="text-5xl block mb-3" style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}>Hmm...</span>
                    <p className="text-[#5C4033]/60" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "18px" }}>No items found. Try a different search or filter.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key={activeCategory + activeDietary + search}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35 }}
                    className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5"
                  >
                    {filtered.map((item, i) => (
                      <motion.article
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04 }}
                        whileHover={{ y: -5 }}
                        className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                        style={{ border: "1px solid rgba(212,160,23,0.12)", borderRadius: "4px" }}
                      >
                        {/* Image */}
                        <div className="relative h-44 overflow-hidden">
                          <div
                            className="w-full h-full img-scale-inner"
                            style={{ backgroundImage: `url('${item.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}
                            role="img"
                            aria-label={item.name}
                          />
                          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,28,28,0.5) 0%, transparent 60%)" }} />
                          {item.tag && (
                            <div
                              className="absolute top-3 left-3 px-2.5 py-1 text-white text-[10px] font-semibold tracking-wider uppercase"
                              style={{ background: item.tagColor || "#D46A7E", borderRadius: "2px", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                            >
                              {item.tag}
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex items-start justify-between gap-2 mb-1.5">
                            <h3 className="text-base font-bold text-[#1C1C1C] leading-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>{item.name}</h3>
                            <span className="text-sm font-bold shrink-0" style={{ background: "linear-gradient(135deg, #D4A017, #E8C060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "var(--font-playfair), Georgia, serif" }}>
                              {item.price}
                            </span>
                          </div>

                          <p className="text-[#5C4033]/65 text-sm leading-relaxed mb-3 flex-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "14px" }}>
                            {item.description}
                          </p>

                          {/* Dietary badges */}
                          {item.dietary.length > 0 && (
                            <div className="flex flex-wrap gap-1 mb-3">
                              {item.dietary.map(tag => <DietaryBadge key={tag} tag={tag} />)}
                            </div>
                          )}

                          {/* Allergen toggle */}
                          {item.allergens && (
                            <div>
                              <button
                                onClick={() => setShowAllergens(showAllergens === item.id ? null : item.id)}
                                className="flex items-center gap-1.5 text-[10px] text-[#5C4033]/50 hover:text-[#D46A7E] transition-colors"
                                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                                aria-expanded={showAllergens === item.id}
                                aria-controls={`allergens-${item.id}`}
                              >
                                <Info size={11} aria-hidden="true" />
                                Allergens
                              </button>
                              <AnimatePresence>
                                {showAllergens === item.id && (
                                  <motion.p
                                    id={`allergens-${item.id}`}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="text-[10px] text-[#5C4033]/60 mt-1 overflow-hidden"
                                    style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                                  >
                                    Contains: {item.allergens}
                                  </motion.p>
                                )}
                              </AnimatePresence>
                            </div>
                          )}
                        </div>
                      </motion.article>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
