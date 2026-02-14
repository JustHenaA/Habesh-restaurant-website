import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero container">
        <h1>Authentic Ethiopian & Eritrean Flavors, Reimagined</h1>
        <p>
          Welcome to Habesh Table, where traditional recipes meet modern hospitality. Share hand-torn injera,
          flavorful wats, and warm community around every meal.
        </p>
        <div className="cta-row">
          <Link className="button primary" href="/menu">
            Explore Menu
          </Link>
          <Link className="button secondary" href="/reservations">
            Reserve a Table
          </Link>
        </div>
      </section>

      <section className="section container" aria-labelledby="highlights-heading">
        <h2 id="highlights-heading">Why guests love us</h2>
        <div className="card-grid">
          <article className="card">
            <h3>Fresh injera daily</h3>
            <p>Our teff-based injera is prepared in-house every morning for authentic taste and texture.</p>
          </article>
          <article className="card">
            <h3>Family-style dining</h3>
            <p>Designed for sharing, our platters bring people together around conversation and tradition.</p>
          </article>
          <article className="card">
            <h3>Plant-forward options</h3>
            <p>Enjoy richly spiced vegan and vegetarian selections rooted in East African cuisine.</p>
          </article>
        </div>
      </section>
    </>
  );
}
