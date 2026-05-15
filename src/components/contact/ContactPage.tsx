"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader } from "lucide-react";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "@/components/SocialIcons";
import { CONTACT, HOURS, SOCIAL } from "@/lib/constants";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setFormState("loading");
    // Simulate async submission
    await new Promise(r => setTimeout(r, 1200));
    setFormState("success");
  };

  const contactItems = [
    { icon: MapPin, title: "Location",     content: CONTACT.address,      sub: "Near Bole Rwanda Roundabout", href: undefined },
    { icon: Phone,  title: "Phone",        content: CONTACT.phone,         sub: "WhatsApp available",          href: `tel:${CONTACT.phoneTel}` },
    { icon: Mail,   title: "Email",        content: CONTACT.email,         sub: "We reply within 24 hours",    href: `mailto:${CONTACT.email}` },
    { icon: Clock,  title: "Hours",        content: "Mon–Fri: 7:00 AM – 10:00 PM", sub: "Sat: 8AM–11PM · Sun: 9AM–9PM", href: undefined },
  ];

  const socialItems = [
    { icon: InstagramIcon, label: "Instagram", handle: SOCIAL.instagramHandle, href: SOCIAL.instagram },
    { icon: FacebookIcon,  label: "Facebook",  handle: "La Vie En Rose Addis",  href: SOCIAL.facebook },
    { icon: TwitterIcon,   label: "Twitter",   handle: "@lavieaddis",           href: SOCIAL.twitter },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url('/images/unnamed (5).jpg')`, backgroundSize: "cover", backgroundPosition: "center" }}
          role="img"
          aria-label="La Vie En Rose café interior"
        />
        <div className="absolute inset-0" style={{ background: "rgba(28,28,28,0.88)" }} />
        <div className="relative z-10 text-center px-6">
          <motion.span initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl block mb-3" style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}>
            Get in Touch
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            We&apos;d Love to Hear From You
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding" style={{ background: "#F8F3EE" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left — info */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-4xl block mb-3" style={{ fontFamily: "var(--font-script), cursive", color: "#D46A7E" }}>Find Us</span>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#1C1C1C" }}>
                Visit La Vie En Rose
              </h2>

              <div className="space-y-4 mb-10">
                {contactItems.map((item) => (
                  <div key={item.title} className="flex gap-4 p-5" style={{ background: "white", border: "1px solid rgba(212,160,23,0.15)", borderRadius: "4px", boxShadow: "0 2px 15px rgba(0,0,0,0.04)" }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, rgba(212,106,126,0.15), rgba(212,106,126,0.05))", border: "1px solid rgba(212,106,126,0.25)" }}>
                      <item.icon size={20} style={{ color: "#D46A7E" }} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase font-semibold text-[#D4A017] mb-1" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>{item.title}</p>
                      {item.href ? (
                        <a href={item.href} className="text-[#1C1C1C] font-medium hover:text-[#D46A7E] transition-colors focus:outline-none focus:text-[#D46A7E]" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontSize: "15px" }}>
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-[#1C1C1C] font-medium" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontSize: "15px" }}>{item.content}</p>
                      )}
                      <p className="text-[#5C4033]/50 text-xs mt-0.5" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Opening hours detail */}
              <div className="p-5 mb-8" style={{ background: "white", border: "1px solid rgba(212,160,23,0.15)", borderRadius: "4px" }}>
                <p className="text-xs tracking-widest uppercase font-semibold text-[#D4A017] mb-4" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>Full Opening Hours</p>
                <ul className="space-y-2">
                  {HOURS.map(({ day, hours }) => (
                    <li key={day} className="flex items-center justify-between">
                      <span className="text-sm text-[#5C4033]" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>{day}</span>
                      <span className="text-sm font-semibold text-[#1C1C1C]" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>{hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div>
                <p className="text-xs tracking-widest uppercase font-semibold text-[#D4A017] mb-4" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>Follow Us</p>
                <div className="flex flex-wrap gap-3">
                  {socialItems.map(({ icon: Icon, label, handle, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${label}`}
                      className="flex items-center gap-2 px-4 py-2 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#D46A7E]"
                      style={{ background: "white", border: "1px solid rgba(212,106,126,0.2)", borderRadius: "2px" }}
                    >
                      <Icon size={16} color="#D46A7E" />
                      <span className="text-xs text-[#5C4033]" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>{handle}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — map + form */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              {/* Map */}
              <div className="relative h-64 overflow-hidden" style={{ borderRadius: "4px", border: "3px solid white", boxShadow: "0 4px 30px rgba(0,0,0,0.1)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.7969!3d9.0054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sLa%20Vie%20En%20Rose%20Addis%20%7C%20Bole%20Rawanda%20Branch!5e0!3m2!1sen!2set!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(20%) sepia(10%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="La Vie En Rose Addis Location — Bole Rwanda, Addis Ababa"
                />
                <div className="absolute bottom-3 left-3 px-3 py-2 shadow-lg" style={{ background: "rgba(28,28,28,0.9)", borderRadius: "2px", border: "1px solid rgba(212,160,23,0.3)" }}>
                  <p className="text-white text-xs font-semibold" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>📍 La Vie En Rose Addis</p>
                  <p className="text-white/50 text-xs" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>{CONTACT.addressShort}</p>
                </div>
              </div>

              {/* Contact form */}
              {formState !== "success" ? (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                  className="p-8 shadow-xl"
                  style={{ background: "white", border: "1px solid rgba(212,160,23,0.2)", borderRadius: "4px" }}
                >
                  <h2 className="text-xl font-bold text-[#1C1C1C] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                    Send Us a Message
                  </h2>

                  {formState === "error" && (
                    <div className="mb-4 p-3 text-sm text-red-700 bg-red-50 rounded" role="alert">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs tracking-widest uppercase font-semibold text-[#5C4033] mb-2" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                        Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                        aria-invalid={!!errors.name}
                        className="w-full px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#D46A7E]"
                        style={{ border: `1px solid ${errors.name ? "#ef4444" : "rgba(92,64,51,0.2)"}`, borderRadius: "2px", fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#1C1C1C" }}
                      />
                      {errors.name && <p id="contact-name-error" className="text-xs text-red-600 mt-1" role="alert">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs tracking-widest uppercase font-semibold text-[#5C4033] mb-2" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                        Email <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                        aria-invalid={!!errors.email}
                        className="w-full px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#D46A7E]"
                        style={{ border: `1px solid ${errors.email ? "#ef4444" : "rgba(92,64,51,0.2)"}`, borderRadius: "2px", fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#1C1C1C" }}
                      />
                      {errors.email && <p id="contact-email-error" className="text-xs text-red-600 mt-1" role="alert">{errors.email}</p>}
                    </div>

                    {/* Subject */}
                    <div className="md:col-span-2">
                      <label htmlFor="contact-subject" className="block text-xs tracking-widest uppercase font-semibold text-[#5C4033] mb-2" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>Subject</label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={form.subject}
                        onChange={e => setForm({ ...form, subject: e.target.value })}
                        placeholder="How can we help?"
                        className="w-full px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#D46A7E]"
                        style={{ border: "1px solid rgba(92,64,51,0.2)", borderRadius: "2px", fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#1C1C1C" }}
                      />
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2">
                      <label htmlFor="contact-message" className="block text-xs tracking-widest uppercase font-semibold text-[#5C4033] mb-2" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                        Message <span aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="Your message..."
                        rows={4}
                        aria-describedby={errors.message ? "contact-message-error" : undefined}
                        aria-invalid={!!errors.message}
                        className="w-full px-4 py-3 text-sm outline-none resize-none focus:ring-2 focus:ring-[#D46A7E]"
                        style={{ border: `1px solid ${errors.message ? "#ef4444" : "rgba(92,64,51,0.2)"}`, borderRadius: "2px", fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#1C1C1C" }}
                      />
                      {errors.message && <p id="contact-message-error" className="text-xs text-red-600 mt-1" role="alert">{errors.message}</p>}
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formState === "loading"}
                    whileHover={{ scale: formState === "loading" ? 1 : 1.02 }}
                    whileTap={{ scale: formState === "loading" ? 1 : 0.98 }}
                    className="w-full mt-5 py-3.5 flex items-center justify-center gap-2 text-sm tracking-widest uppercase font-semibold text-white disabled:opacity-70"
                    style={{ background: "linear-gradient(135deg, #D46A7E, #B85570)", borderRadius: "2px", boxShadow: "0 8px 30px rgba(212,106,126,0.3)", fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                    aria-busy={formState === "loading"}
                  >
                    {formState === "loading" ? (
                      <><Loader size={16} className="animate-spin" aria-hidden="true" /> Sending...</>
                    ) : (
                      <><Send size={16} aria-hidden="true" /> Send Message</>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-10 text-center shadow-xl"
                  style={{ background: "white", border: "1px solid rgba(212,160,23,0.2)", borderRadius: "4px" }}
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, #D46A7E, #B85570)" }}>
                    <CheckCircle size={32} color="white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1C1C] mb-2" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Message Sent!</h3>
                  <p className="text-[#5C4033]/70 text-sm" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "16px" }}>
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setFormState("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-6 text-xs text-[#D46A7E] hover:underline focus:outline-none focus:underline"
                    style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
