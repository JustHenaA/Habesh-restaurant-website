export const metadata = {
  title: "About",
  description: "Learn about Habesh Table and our culinary story."
};

export default function AboutPage() {
  return (
    <section className="section container">
      <h1>About Habesh Table</h1>
      <p>
        Habesh Table was inspired by family kitchens in Addis Ababa and Asmara. Our mission is to celebrate East
        African culinary heritage through traditional spices, slow-cooked stews, and generous hospitality.
      </p>
      <div className="card-grid">
        <article className="card">
          <h2>Our philosophy</h2>
          <p>Food should be communal, nourishing, and memorable. Every platter is made for sharing.</p>
        </article>
        <article className="card">
          <h2>Our ingredients</h2>
          <p>We use regional spices, fresh herbs, and quality produce to preserve authentic flavor profiles.</p>
        </article>
      </div>
    </section>
  );
}
