"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "@/components/SocialIcons";
import { CONTACT, HOURS, SOCIAL } from "@/lib/constants";

const footerLinks = [
  { href: "/",            label: "Home" },
  { href: "/about",       label: "About Us" },
  { href: "/menu",        label: "Our Menu" },
  { href: "/gallery",     label: "Gallery" },
  { href: "/reservations",label: "Reservations" },
  { href: "/contact",     label: "Contact" },
];

const socialLinks = [
  { icon: InstagramIcon, href: SOCIAL.instagram, label: "Follow us on Instagram" },
  { icon: FacebookIcon,  href: SOCIAL.facebook,  label: "Follow us on Facebook" },
  { icon: TwitterIcon,   href: SOCIAL.twitter,   label: "Follow us on Twitter" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#1C1C1C" }} role="contentinfo">
      {/* Top decorative border */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #D4A017, #D46A7E, #D4A017, transparent)" }} aria-hidden="true" />

      {/* Newsletter */}
      <div className="py-16 px-6 text-center relative" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl mx-auto">
          <span className="text-4xl block mb-2" style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}>
            Stay in Touch
          </span>
          <p className="text-white/50 text-sm mb-6 tracking-wider" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
            Subscribe for exclusive offers, new menu launches &amp; events
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" aria-label="Newsletter signup">
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input
              id="footer-email"
              type="email"
              placeholder="Your email address"
              autoComplete="email"
              className="flex-1 px-4 py-3 text-sm text-white/80 outline-none focus:ring-2 focus:ring-[#D46A7E]"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "2px", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
            />
            <button
              type="submit"
              className="px-6 py-3 text-xs tracking-widest uppercase font-semibold text-white transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#D46A7E]"
              style={{ background: "linear-gradient(135deg, #D46A7E, #B85570)", borderRadius: "2px", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" aria-label="La Vie En Rose Addis — Home">
            <span className="text-4xl block mb-3" style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}>
              La Vie En Rose
            </span>
          </Link>
          <span className="text-xs tracking-[0.3em] uppercase block mb-4" style={{ color: "#D4A017", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
            Addis · Bole Rwanda
          </span>
          <p className="text-white/40 text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "15px" }}>
            Where the elegance of Paris meets the warmth of Addis Ababa. A sanctuary of fine coffee, artisan pastries, and unforgettable moments.
          </p>
          <div className="flex gap-3" role="list" aria-label="Social media links">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                role="listitem"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#D46A7E]"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <Icon size={16} color="#D46A7E" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer navigation">
          <h2 className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "#D4A017", fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 600 }}>
            Quick Links
          </h2>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/50 hover:text-[#D46A7E] transition-colors text-sm tracking-wide focus:outline-none focus:text-[#D46A7E]" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <address style={{ fontStyle: "normal" }}>
          <h2 className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "#D4A017", fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 600 }}>
            Contact Us
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "#D46A7E" }} aria-hidden="true" />
              <span className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                {CONTACT.address}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0" style={{ color: "#D46A7E" }} aria-hidden="true" />
              <a href={`tel:${CONTACT.phoneTel}`} className="text-white/50 hover:text-[#D46A7E] transition-colors text-sm" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0" style={{ color: "#D46A7E" }} aria-hidden="true" />
              <a href={`mailto:${CONTACT.email}`} className="text-white/50 hover:text-[#D46A7E] transition-colors text-sm break-all" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </address>

        {/* Hours */}
        <div>
          <h2 className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "#D4A017", fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontWeight: 600 }}>
            Opening Hours
          </h2>
          <ul className="space-y-3">
            {HOURS.map(({ day, hours }) => (
              <li key={day} className="flex items-start gap-3">
                <Clock size={14} className="mt-0.5 shrink-0" style={{ color: "#D4A017" }} aria-hidden="true" />
                <div>
                  <p className="text-white/70 text-xs tracking-wider" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>{day}</p>
                  <p className="text-white/40 text-xs mt-0.5" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>{hours}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p className="text-white/25 text-xs tracking-wider" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
          © {new Date().getFullYear()} La Vie En Rose Addis. All rights reserved.
        </p>
        <p className="text-white/25 text-xs tracking-wider" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
          Bole Rwanda Branch · Addis Ababa, Ethiopia
        </p>
      </div>
    </footer>
  );
}
