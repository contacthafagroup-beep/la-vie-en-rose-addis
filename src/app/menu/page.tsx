import type { Metadata } from "next";
import MenuPage from "@/components/menu/MenuPage";

export const metadata: Metadata = {
  title: "Menu | La Vie En Rose Addis — Specialty Coffee, Pastries & Fine Dining",
  description:
    "Explore our curated menu of specialty coffees, artisan pastries, breakfast, main dishes, and signature drinks at La Vie En Rose Addis — Bole Rwanda Branch.",
};

export default function Menu() {
  return <MenuPage />;
}
