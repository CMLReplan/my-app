const testimonials = [
  { id: 1, name: "Jane", img: "/images/icons_assets/Jane.png", text: "Amazing food!", rating: 5 },
  { id: 2, name: "Mark", img: "/images/icons_assets/Mark.png", text: "Loved the ambience.", rating: 4 },
  { id: 3, name: "Sara", img: "/images/icons_assets/Sara.png", text: "Perfect for family dinners.", rating: 5 },
  { id: 4, name: "Tom", img: "/images/icons_assets/Tom.png", text: "Highly recommend!", rating: 4 }
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <h2 id="testimonials-heading">What Our Customers Say</h2>
        <ul className="testimonials-grid">
          {testimonials.map((t) => {
            const rating = Number(t.rating) || 0;
            return (
              <li key={t.id} className="testimonial-card">
                <article>
                  <img
                    src={t.img}
                    alt={t.name}
                    className="testimonial-img"
                  />
                  <div className="testimonial-content">
                    <p>"{t.text}"</p>

                    <div
                      className="rating"
                      role="img"
                      aria-label={`Rated: ${rating} out of 5`}
                    >
                      {/* Stars */}
                        {Array.from({ length: 5 }).map((_, index) => (
                          <span
                            key={index}
                            className={`star ${index < rating ? "filled" : "empty"}`}
                            aria-hidden="true"
                          >
                            {index < rating ? "★" : "☆"}
                          </span>
                        ))}
                        {/* Numeric Rating */}
                        <span className="numeric-rating" aria-hidden="true">
                          ({rating}/5)
                        </span>
                      </div>

                    <h4>{t.name}</h4>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
