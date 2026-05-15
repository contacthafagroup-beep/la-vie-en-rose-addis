import type { Metadata } from "next";
import NotFoundClient from "@/components/NotFoundClient";

export const metadata: Metadata = {
  title: "Page Not Found | La Vie En Rose Addis",
};

export default function NotFound() {
  return <NotFoundClient />;
}
