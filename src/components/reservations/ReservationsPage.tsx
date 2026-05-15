"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Calendar, Clock, Users, User, Mail, Phone,
  MessageSquare, CheckCircle, Loader,
} from "lucide-react";
import { CONTACT } from "@/lib/constants";

type FormState = "idle" | "loading" | "success";

const timeSlots = [
  "8:00 AM","9:00 AM","10:00 AM","11:00 AM",
  "12:00 PM","1:00 PM","2:00 PM","3:00 PM",
  "4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM",
];

const occasions = [
  "Casual Dining","Business Meeting","Birthday Celebration",
  "Anniversary","Date Night","Family Gathering","Other",
];

const inputStyle = {
  border: "1px solid rgba(92,64,51,0.2)",
  borderRadius: "2px",
  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
  color: "#1C1C1C",
  background: "white",
};

export default function ReservationsPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", date: "", time: "",
    guests: "2", occasion: "", requests: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    await new Promise(r => setTimeout(r, 1200));
    setFormState("success");
  };

  const reset = () => {
    setFormState("idle");
    setForm({ name: "", email: "", phone: "", date: "", time: "", guests: "2", occasion: "", requests: "" });
  };

  const guestCount = parseInt(form.guests) || 0;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/unnamed (9).jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Elegant dining table at La Vie En Rose"
        />
        <div className="absolute inset-0" style={{ background: "rgba(28,28,28,0.88)" }} />
        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            className="text-6xl block mb-3"
            style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}
          >
            Reserve Your Table
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            An Experience Awaits
          </motion.h1>
        </div>
      </section>

      {/* ── Form section ── */}
      <section className="section-padding" style={{ background: "#F8F3EE" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="lg:col-span-2"
              aria-label="Reservation information"
            >
              <span className="text-4xl block mb-3" style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}>
                Plan Your Visit
              </span>
              <h2 className="text-3xl font-bold mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#1C1C1C" }}>
                Make Every Moment{" "}
                <span style={{ background: "linear-gradient(135deg, #D4A017, #E8C060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Special
                </span>
              </h2>
              <p className="text-[#5C4033]/70 leading-relaxed mb-8" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "18px" }}>
                Whether it&apos;s an intimate dinner for two or a celebration with friends, we&apos;ll ensure your experience is nothing short of extraordinary.
              </p>

              <div className="space-y-4">
                {/* Hours */}
                <div className="p-4" style={{ background: "white", border: "1px solid rgba(212,160,23,0.15)", borderRadius: "4px" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(212,106,126,0.1)", border: "1px solid rgba(212,106,126,0.2)" }}>
                      <Clock size={16} style={{ color: "#D46A7E" }} aria-hidden="true" />
                    </div>
                    <p className="font-semibold text-[#1C1C1C] text-sm" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>Opening Hours</p>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-xs text-[#5C4033]/70" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>Monday – Sunday</span>
                    <span className="text-xs font-semibold text-[#1C1C1C]" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>Open · Closes 9:00 PM</span>
                  </div>
                </div>

                {/* Group bookings */}
                <div className="flex gap-3 p-4" style={{ background: "white", border: "1px solid rgba(212,160,23,0.15)", borderRadius: "4px" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(212,106,126,0.1)", border: "1px solid rgba(212,106,126,0.2)" }}>
                    <Users size={16} style={{ color: "#D46A7E" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1C1C1C] text-sm mb-1" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>Group Bookings</p>
                    {["For groups of 8+, please call us", "Private dining available", "Event catering on request"].map(l => (
                      <p key={l} className="text-[#5C4033]/60 text-xs" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>{l}</p>
                    ))}
                  </div>
                </div>

                {/* Call */}
                <div className="flex gap-3 p-4" style={{ background: "white", border: "1px solid rgba(212,160,23,0.15)", borderRadius: "4px" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(212,106,126,0.1)", border: "1px solid rgba(212,106,126,0.2)" }}>
                    <Phone size={16} style={{ color: "#D46A7E" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1C1C1C] text-sm mb-1" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>Call to Reserve</p>
                    <a href={`tel:${CONTACT.phoneTel}`} className="text-[#5C4033]/60 text-xs hover:text-[#D46A7E] transition-colors" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                      {CONTACT.phone}
                    </a>
                    <p className="text-[#5C4033]/60 text-xs" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>WhatsApp available</p>
                  </div>
                </div>

                {/* Policies */}
                <div className="p-4" style={{ background: "rgba(212,160,23,0.06)", border: "1px solid rgba(212,160,23,0.2)", borderRadius: "4px" }}>
                  <p className="text-xs font-semibold text-[#D4A017] mb-2 tracking-wider uppercase" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>Good to Know</p>
                  {[
                    "Smart-casual dress code",
                    "Reservations held for 15 minutes",
                    "Free cancellation up to 2 hours before",
                    "Parking available nearby",
                  ].map(p => (
                    <p key={p} className="text-xs text-[#5C4033]/70 flex items-start gap-1.5 mb-1" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                      <span className="text-[#D4A017] mt-0.5" aria-hidden="true">·</span>{p}
                    </p>
                  ))}
                </div>
              </div>
            </motion.aside>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <AnimatePresence mode="wait">
                {formState !== "success" ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    aria-label="Table reservation form"
                    className="p-8 shadow-xl"
                    style={{ background: "white", border: "1px solid rgba(212,160,23,0.2)", borderRadius: "4px" }}
                  >
                    <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                      Reservation Details
                    </h2>

                    <div className="grid md:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="md:col-span-2">
                        <label htmlFor="res-name" className="block text-xs tracking-widest uppercase font-semibold text-[#5C4033] mb-2" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                          Full Name <span aria-hidden="true">*</span>
                        </label>
                        <div className="relative">
                          <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D46A7E]" aria-hidden="true" />
                          <input id="res-name" type="text" required autoComplete="name" value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            placeholder="Your full name"
                            className="w-full pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#D46A7E]"
                            style={inputStyle}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="res-email" className="block text-xs tracking-widest uppercase font-semibold text-[#5C4033] mb-2" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                          Email <span aria-hidden="true">*</span>
                        </label>
                        <div className="relative">
                          <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D46A7E]" aria-hidden="true" />
                          <input id="res-email" type="email" required autoComplete="email" value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            placeholder="your@email.com"
                            className="w-full pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#D46A7E]"
                            style={inputStyle}
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="res-phone" className="block text-xs tracking-widest uppercase font-semibold text-[#5C4033] mb-2" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                          Phone <span aria-hidden="true">*</span>
                        </label>
                        <div className="relative">
                          <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D46A7E]" aria-hidden="true" />
                          <input id="res-phone" type="tel" required autoComplete="tel" value={form.phone}
                            onChange={e => setForm({ ...form, phone: e.target.value })}
                            placeholder="+251 9XX XXX XXX"
                            className="w-full pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#D46A7E]"
                            style={inputStyle}
                          />
                        </div>
                      </div>

                      {/* Date */}
                      <div>
                        <label htmlFor="res-date" className="block text-xs tracking-widest uppercase font-semibold text-[#5C4033] mb-2" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                          Date <span aria-hidden="true">*</span>
                        </label>
                        <div className="relative">
                          <Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D46A7E]" aria-hidden="true" />
                          <input id="res-date" type="date" required min={today} value={form.date}
                            onChange={e => setForm({ ...form, date: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#D46A7E]"
                            style={inputStyle}
                          />
                        </div>
                      </div>

                      {/* Time */}
                      <div>
                        <label htmlFor="res-time" className="block text-xs tracking-widest uppercase font-semibold text-[#5C4033] mb-2" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                          Time <span aria-hidden="true">*</span>
                        </label>
                        <div className="relative">
                          <Clock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D46A7E]" aria-hidden="true" />
                          <select id="res-time" required value={form.time}
                            onChange={e => setForm({ ...form, time: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 text-sm outline-none appearance-none focus:ring-2 focus:ring-[#D46A7E]"
                            style={{ ...inputStyle, color: form.time ? "#1C1C1C" : "#9CA3AF" }}
                          >
                            <option value="">Select time</option>
                            {timeSlots.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                      </div>

                      {/* Guests */}
                      <div>
                        <label htmlFor="res-guests" className="block text-xs tracking-widest uppercase font-semibold text-[#5C4033] mb-2" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                          Guests <span aria-hidden="true">*</span>
                        </label>
                        <div className="relative">
                          <Users size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D46A7E]" aria-hidden="true" />
                          <select id="res-guests" value={form.guests}
                            onChange={e => setForm({ ...form, guests: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 text-sm outline-none appearance-none focus:ring-2 focus:ring-[#D46A7E]"
                            style={inputStyle}
                          >
                            {[1,2,3,4,5,6,7,8].map(n => (
                              <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                            ))}
                            <option value="9">9+ Guests (Group)</option>
                          </select>
                        </div>
                      </div>

                      {/* Occasion */}
                      <div>
                        <label htmlFor="res-occasion" className="block text-xs tracking-widest uppercase font-semibold text-[#5C4033] mb-2" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                          Occasion
                        </label>
                        <select id="res-occasion" value={form.occasion}
                          onChange={e => setForm({ ...form, occasion: e.target.value })}
                          className="w-full px-4 py-3 text-sm outline-none appearance-none focus:ring-2 focus:ring-[#D46A7E]"
                          style={{ ...inputStyle, color: form.occasion ? "#1C1C1C" : "#9CA3AF" }}
                        >
                          <option value="">Select occasion (optional)</option>
                          {occasions.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>

                      {/* Special requests */}
                      <div className="md:col-span-2">
                        <label htmlFor="res-requests" className="block text-xs tracking-widest uppercase font-semibold text-[#5C4033] mb-2" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                          Special Requests
                        </label>
                        <div className="relative">
                          <MessageSquare size={15} className="absolute left-3 top-3 text-[#D46A7E]" aria-hidden="true" />
                          <textarea id="res-requests" value={form.requests}
                            onChange={e => setForm({ ...form, requests: e.target.value })}
                            placeholder="Dietary requirements, allergies, special arrangements..."
                            rows={3}
                            className="w-full pl-10 pr-4 py-3 text-sm outline-none resize-none focus:ring-2 focus:ring-[#D46A7E]"
                            style={inputStyle}
                          />
                        </div>
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={formState === "loading"}
                      whileHover={{ scale: formState === "loading" ? 1 : 1.02 }}
                      whileTap={{ scale: formState === "loading" ? 1 : 0.98 }}
                      className="w-full mt-6 py-4 flex items-center justify-center gap-2 text-sm tracking-widest uppercase font-semibold text-white disabled:opacity-70"
                      style={{ background: "linear-gradient(135deg, #D46A7E, #B85570)", borderRadius: "2px", boxShadow: "0 8px 30px rgba(212,106,126,0.4)", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                      aria-busy={formState === "loading"}
                    >
                      {formState === "loading"
                        ? <><Loader size={16} className="animate-spin" aria-hidden="true" /> Confirming...</>
                        : "Confirm Reservation"
                      }
                    </motion.button>

                    <p className="text-center text-xs text-[#5C4033]/50 mt-4" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                      We&apos;ll confirm your reservation within 2 hours via email or phone.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-12 text-center shadow-xl"
                    style={{ background: "white", border: "1px solid rgba(212,160,23,0.2)", borderRadius: "4px" }}
                    role="status"
                    aria-live="polite"
                  >
                    <motion.div
                      initial={{ scale: 0 }} animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{ background: "linear-gradient(135deg, #D46A7E, #B85570)" }}
                    >
                      <CheckCircle size={40} color="white" aria-hidden="true" />
                    </motion.div>
                    <span className="text-5xl block mb-3" style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}>Merci!</span>
                    <h2 className="text-2xl font-bold text-[#1C1C1C] mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                      Reservation Received
                    </h2>
                    <p className="text-[#5C4033]/70 leading-relaxed mb-3" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "18px" }}>
                      Thank you, <strong>{form.name}</strong>! We&apos;ve received your request for{" "}
                      <strong>{form.guests} {guestCount === 1 ? "guest" : "guests"}</strong> on{" "}
                      <strong>{form.date}</strong> at <strong>{form.time}</strong>.
                    </p>
                    <p className="text-[#5C4033]/50 text-sm mb-8" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                      A confirmation will be sent to {form.email}
                    </p>
                    <button
                      onClick={reset}
                      className="px-8 py-3 text-xs tracking-widest uppercase font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#D46A7E]"
                      style={{ background: "linear-gradient(135deg, #D46A7E, #B85570)", borderRadius: "2px", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                    >
                      Make Another Reservation
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
