import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";
import FAQSection from "@/components/contact/FAQSection";

export const metadata: Metadata = {
  title: "Contact | La Vie En Rose Addis — Get in Touch",
  description:
    "Contact La Vie En Rose Addis — Bole Rwanda Branch. Find us in Bole Rwanda, Addis Ababa. Call, email, or visit us for reservations and inquiries.",
};

export default function Contact() {
  return (
    <>
      <ContactPage />
      <FAQSection />
    </>
  );
}
