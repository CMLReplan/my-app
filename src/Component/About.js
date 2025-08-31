export default function About() {
  return (
    <section id="about" className="about container">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant that brings
          authentic flavors and fresh ingredients to every dish. Visit us for
          a unique dining experience.
        </p>
      </div>
      <div className="about-photos">
        <img
          src="/images/icons_assets/restaurant.jpg"
          alt="Interior"
          className="photo primary"
        />
        <img
          src="/images/icons_assets/restaurant chef B.jpg"
          alt="Chef preparing food"
          className="photo secondary"
        />
      </div>
    </section>
  );
}
