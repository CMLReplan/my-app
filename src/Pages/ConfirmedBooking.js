import React from 'react';
import { Link } from 'react-router-dom';
import '../ConfirmedBooking.css';

function ConfirmedBooking() {
  return (
    <section className="confirmed-booking" aria-labelledby="booking-title">
      <div className="confirmed-container">
        <h1 id="booking-title">Booking Confirmed!</h1>
        <p role="status">
          Thank you for your reservation. We look forward to serving you!
        </p>
        <Link to="/" className="home-link">
          <button type="button" className="back-home-btn">Back to Home</button>
        </Link>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
