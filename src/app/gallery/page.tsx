import type { Metadata } from "next";
import GalleryPage from "@/components/gallery/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery | La Vie En Rose Addis — Café Interiors, Coffee Art & More",
  description:
    "Explore the visual world of La Vie En Rose Addis. Stunning café interiors, coffee art, artisan pastries, and the vibrant Addis Ababa lifestyle.",
};

export default function Gallery() {
  return <GalleryPage />;
}
