import { ReservationForm } from "@/components/ReservationForm";

export const metadata = {
  title: "Reservations",
  description: "Reserve a table at Habesh Table."
};

export default function ReservationsPage() {
  return (
    <section className="section container">
      <h1>Reserve a Table</h1>
      <p>Planning a dinner with friends or family? Submit your request and our team will confirm shortly.</p>
      <ReservationForm />
    </section>
  );
}
