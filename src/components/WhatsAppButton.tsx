"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { CONTACT, WHATSAPP_MESSAGE } from "@/lib/constants";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${WHATSAPP_MESSAGE}`;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="glass-dark rounded-xl p-4 max-w-xs shadow-2xl"
            role="dialog"
            aria-label="WhatsApp chat"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <p className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                  La Vie En Rose Addis
                </p>
                <p className="text-white/60 text-xs mt-0.5">Typically replies instantly</p>
              </div>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Close chat popup"
              >
                <X size={14} />
              </button>
            </div>
            <p className="text-white/80 text-xs leading-relaxed mb-3">
              👋 Hello! Ready to reserve your table or have a question? Chat with us on WhatsApp!
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-white text-xs font-semibold tracking-wider"
              style={{ background: "#25D366" }}
              aria-label="Open WhatsApp chat"
            >
              <MessageCircle size={14} />
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowTooltip(!showTooltip)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl relative"
        style={{ background: "#25D366", boxShadow: "0 4px 30px rgba(37, 211, 102, 0.5)" }}
        aria-label="Chat on WhatsApp"
      >
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{
            background: "#25D366",
            animation: "whatsappPulse 2s ease-out infinite",
          }}
          aria-hidden="true"
        />
        <style>{`
          @keyframes whatsappPulse {
            0% { transform: scale(1); opacity: 0.6; }
            100% { transform: scale(1.5); opacity: 0; }
          }
        `}</style>
        <MessageCircle size={26} color="white" fill="white" aria-hidden="true" />
      </motion.button>
    </div>
  );
}
