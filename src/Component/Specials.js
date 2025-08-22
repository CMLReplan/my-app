const specials = [
  {
    id: 1,
    title: "Greek Salad",
    image: "/images/greek-salad.jpg",
    description: "Crisp lettuce, feta cheese, and olives."
  },
  {
    id: 2,
    title: "Bruschetta",
    image: "/images/bruschetta.jpg",
    description: "Grilled bread with fresh tomatoes."
  },
  {
    id: 3,
    title: "Lemon Dessert",
    image: "/images/lemon-dessert.jpg",
    description: "A refreshing sweet treat."
  }
];

export default function Specials() {
  return (
    <section id="specials" className="specials container">
      <h2>This Week’s Specials</h2>
      <div className="specials-grid">
        {specials.map(item => (
          <div key={item.id} className="special-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
