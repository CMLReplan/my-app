const testimonials = [
  { id: 1, name: "Jane", img: "/images/user1.jpg", text: "Amazing food!" },
  { id: 2, name: "Mark", img: "/images/user2.jpg", text: "Loved the ambience." },
  { id: 3, name: "Sara", img: "/images/user3.jpg", text: "Perfect for family dinners." },
  { id: 4, name: "Tom", img: "/images/user4.jpg", text: "Highly recommend!" }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map(t => (
            <div key={t.id} className="testimonial-card">
              <img src={t.img} alt={t.name} />
              <p>"{t.text}"</p>
              <h4>{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
