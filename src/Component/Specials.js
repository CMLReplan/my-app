const specials = [
  {
    id: 1,
    title: "Greek Salad",
    image: "/images/icons_assets/greek salad.jpg",
    description: "Crisp lettuce, feta cheese, and olives."
  },
  {
    id: 2,
    title: "Bruschetta",
    image: "/images/icons_assets/bruchetta.svg",
    description: "Grilled bread with fresh tomatoes."
  },
  {
    id: 3,
    title: "Lemon Dessert",
    image: "/images/icons_assets/lemon dessert.jpg",
    description: "A refreshing sweet treat."
  }
];

export default function Specials() {
  return (
    <section
      id="specials"
      className="specials container"
      aria-labelledby="specials-heading"
    >
      <header>
        <h2 id="specials-heading">This Week’s Specials</h2>
      </header>

      <ul className="specials-grid">
        {specials.map(item => (
          <li key={item.id} className="special-card">
            <article>
              <img
                src={item.image}
                alt={item.title}
                aria-label="Image of {item.title}"
              />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button
                type="button"
                aria-label={`Order ${item.title} now`}
              >
                Order Now
              </button>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
