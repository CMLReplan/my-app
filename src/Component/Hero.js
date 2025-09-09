import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <header
      id="hero"
      className="hero container"
      role="banner"
      aria-label="Little Lemon hero section with introduction and reservation button"
    >
      <div className="hero-text">
        <h1 id="restaurant-name">Little Lemon</h1>
        <h2 id="restaurant-location">Chicago</h2>
        <p id="restaurant-description">
          We are a family owned Mediterranean restaurant,focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/booking" className="reserve-link">
          <button
            type="button"
            aria-label="Reserve a table at Little Lemon"
          >
            Reserve a Table
          </button>
        </Link>
      </div>
      <figure classname="hero-image" aria-labelledby="restaurant-name">
        <img
          src="/images/icons_assets/restauranfood.jpg"
          alt="A freshly prepared Mediterranean dish from Little Lemon restaurant"
        />
      </figure>
    </header>
  );
}
