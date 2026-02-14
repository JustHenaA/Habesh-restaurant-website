export const metadata = {
  title: "Locations & Hours",
  description: "Find Habesh Table location, opening hours, and contact details."
};

export default function LocationsPage() {
  return (
    <section className="section container">
      <h1>Location & Hours</h1>
      <div className="card-grid" style={{ marginBottom: "1.2rem" }}>
        <article className="card">
          <h2>Address</h2>
          <p>123 Habesha Avenue, Suite 8, Seattle, WA 98101</p>
        </article>
        <article className="card">
          <h2>Hours</h2>
          <p>Mon–Thu: 11:30 AM – 9:30 PM</p>
          <p>Fri–Sat: 11:30 AM – 11:00 PM</p>
          <p>Sunday: 12:00 PM – 8:30 PM</p>
        </article>
        <article className="card">
          <h2>Phone</h2>
          <p>
            <a href="tel:+12065551212">(206) 555-1212</a>
          </p>
        </article>
      </div>
      <h2>Map</h2>
      <iframe
        className="map-frame"
        title="Habesh Table location map"
        src="https://maps.google.com/maps?q=Seattle&t=&z=13&ie=UTF8&iwloc=&output=embed"
        loading="lazy"
      />
    </section>
  );
}
