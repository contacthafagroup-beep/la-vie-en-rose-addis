"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const navLinks = [
  { href: "/",             label: "Home" },
  { href: "/about",        label: "About" },
  { href: "/menu",         label: "Menu" },
  { href: "/gallery",      label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact",      label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#1C1C1C]/95 backdrop-blur-xl shadow-2xl py-3" : "bg-transparent py-5"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start group" aria-label="La Vie En Rose Addis — Home">
            <span className="text-3xl leading-none" style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}>
              La Vie En Rose
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase mt-0.5" style={{ color: "#D4A017", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
              Addis · Bole Rwanda
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`relative text-sm tracking-widest uppercase transition-colors duration-300 animated-underline focus:outline-none focus:text-[#D46A7E] ${
                  pathname === link.href ? "text-[#D4A017]" : "text-white/80 hover:text-[#D46A7E]"
                }`}
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 500 }}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span layoutId="activeNav" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4A017]" aria-hidden="true" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/reservations"
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 text-xs tracking-widest uppercase font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#D46A7E]"
              style={{ background: "linear-gradient(135deg, #D46A7E, #B85570)", color: "white", fontFamily: "var(--font-montserrat), system-ui, sans-serif", borderRadius: "2px", boxShadow: "0 4px 20px rgba(212, 106, 126, 0.4)" }}
            >
              Reserve a Table
            </Link>

            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="hidden lg:flex items-center gap-1.5 text-[#D4A017] hover:text-[#E8C060] transition-colors focus:outline-none focus:text-[#E8C060]"
              aria-label={`Call us at ${CONTACT.phone}`}
            >
              <Phone size={16} aria-hidden="true" />
              <span className="text-xs tracking-wider" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                {CONTACT.phone}
              </span>
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-[#D46A7E] rounded"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: "#1C1C1C" }}
          >
            {/* Close button top-right */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-white/60 hover:text-white p-2 focus:outline-none focus:ring-2 focus:ring-[#D46A7E] rounded"
              aria-label="Close navigation menu"
            >
              <X size={24} aria-hidden="true" />
            </button>

            <div className="flex flex-col items-center justify-center h-full gap-7 px-8">
              <span className="text-5xl mb-2" style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }} aria-hidden="true">
                La Vie En Rose
              </span>

              <nav aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="text-center mb-5"
                  >
                    <Link
                      href={link.href}
                      aria-current={pathname === link.href ? "page" : undefined}
                      className={`text-2xl tracking-widest uppercase transition-colors focus:outline-none ${
                        pathname === link.href ? "text-[#D4A017]" : "text-white/80 hover:text-[#D46A7E]"
                      }`}
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 500 }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
                <Link
                  href="/reservations"
                  className="px-8 py-3 text-sm tracking-widest uppercase font-semibold text-white focus:outline-none focus:ring-2 focus:ring-white"
                  style={{ background: "linear-gradient(135deg, #D46A7E, #B85570)", borderRadius: "2px", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                >
                  Reserve a Table
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} className="flex items-center gap-2 text-[#D4A017]">
                <Phone size={16} aria-hidden="true" />
                <a href={`tel:${CONTACT.phoneTel}`} className="text-sm tracking-wider focus:outline-none focus:underline" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                  {CONTACT.phone}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
