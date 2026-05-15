import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LoadingScreen from "@/components/LoadingScreen";
import PageTransition from "@/components/PageTransition";

/* ─── Font definitions — loaded at build time, no external request needed ─── */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Vie En Rose Addis | Bole Rwanda Branch — Luxury Café in Addis Ababa",
  description:
    "Experience the finest Parisian-inspired café in Addis Ababa. Premium specialty coffee, artisan pastries, and fine dining at La Vie En Rose — Bole Rwanda Branch. Where Addis Meets Paris.",
  keywords: [
    "luxury café Addis Ababa",
    "La Vie En Rose",
    "Bole Rwanda café",
    "French café Ethiopia",
    "specialty coffee Addis",
    "fine dining Addis Ababa",
    "premium café Ethiopia",
    "Parisian café Addis",
  ],
  authors: [{ name: "La Vie En Rose Addis" }],
  openGraph: {
    title: "La Vie En Rose Addis | Bole Rwanda Branch",
    description: "Where Addis Meets Paris — Luxury café experience in the heart of Bole Rwanda, Addis Ababa.",
    type: "website",
    locale: "en_US",
    siteName: "La Vie En Rose Addis",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Vie En Rose Addis | Bole Rwanda Branch",
    description: "Where Addis Meets Paris — Luxury café experience in Addis Ababa.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${cormorant.variable} ${montserrat.variable} ${greatVibes.variable}`}
    >
      <body
        className="antialiased"
        style={{
          fontFamily: "var(--font-montserrat), system-ui, sans-serif",
          backgroundColor: "var(--cream)",
          color: "var(--black)",
        }}
      >
        <LoadingScreen />
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
