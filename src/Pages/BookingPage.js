import React from 'react';
import BookingForm from '../Component/BookingForm';

function BookingPage() {
  return (
    <div className="booking-page">
      <header className="booking-header">
        <h1>Reserve Your Table</h1>
        <p>Book your table at Little Lemon and enjoy an unforgettable experience!</p>
      </header>

      <section className="booking-section">
        <BookingForm />
      </section>
    </div>
  );
}

export default BookingPage;
