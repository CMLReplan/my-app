import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="hero" className="hero container">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant,
          <br /> focused on traditional recipes served with a modern twist.</p>
        <Link to="/booking">
        <button>Reserve a Table</button>
        </Link>
      </div>
      <img src="/images/icons_assets/restauranfood.jpg" alt="Little Lemon restaurant" />
    </section>
  );
}
