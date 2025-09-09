import BookingForm from '../Component/BookingForm';
import '../BookingPage.css';

function BookingPage({ availableTimes, dispatch, onBookingSubmit}) {

  return (
    <main className="booking-page">
      {/* Header Section */}
      <header className="booking-header">
        <h1>Reserve Your Table</h1>
        <p>
          Book your table at <strong>Little Lemon</strong> and enjoy an unforgettable experience!
        </p>
      </header>

      {/* Booking Form Section */}
      <section
        className="booking-section"
        aria-labelledby="booking-form-title"
        aria-label="Table Reservation Section"
      >
        <h2 id="booking-form-title" className="visually-hidden">
          Table Reservation Form
        </h2>
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          onBookingSubmit={onBookingSubmit} />
      </section>
    </main>
  );
}

export default BookingPage;
