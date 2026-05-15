import type { Metadata } from "next";
import ReservationsPage from "@/components/reservations/ReservationsPage";
import PrivateEvents from "@/components/reservations/PrivateEvents";

export const metadata: Metadata = {
  title: "Reservations | La Vie En Rose Addis — Book Your Table",
  description:
    "Reserve your table at La Vie En Rose Addis — Bole Rwanda Branch. Book online for an unforgettable luxury dining experience in Addis Ababa.",
};

export default function Reservations() {
  return (
    <>
      <ReservationsPage />
      <PrivateEvents />
    </>
  );
}
