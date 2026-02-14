import menuData from "@/data/menu.json";

export const metadata = {
  title: "Menu",
  description: "Browse appetizers, entrees, and drinks at Habesh Table."
};

type MenuItem = {
  name: string;
  description: string;
  price: number;
};

export default function MenuPage() {
  const categories = Object.entries(menuData) as [string, MenuItem[]][];

  return (
    <section className="section container">
      <h1>Menu</h1>
      <p>Enjoy classic Ethiopian and Eritrean dishes crafted with care.</p>
      {categories.map(([category, items]) => (
        <section key={category} className="menu-category" aria-labelledby={`${category}-heading`}>
          <h2 id={`${category}-heading`}>{category}</h2>
          {items.map((item) => (
            <article key={item.name} className="menu-item">
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <strong aria-label={`${item.price.toFixed(2)} dollars`}>${item.price.toFixed(2)}</strong>
            </article>
          ))}
        </section>
      ))}
    </section>
  );
}
