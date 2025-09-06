import BookingForm from '../Component/BookingForm';
import '../BookingPage.css';

function BookingPage({ availableTimes, dispatch, onBookingSubmit}) {

  return (
    <div className="booking-page">
      <header className="booking-header">
        <h1>Reserve Your Table</h1>
        <p>Book your table at Little Lemon and enjoy an unforgettable experience!</p>
      </header>

      <section className="booking-section">
        <BookingForm 
          availableTimes={availableTimes} 
          dispatch={dispatch} 
          onBookingSubmit={onBookingSubmit} />
       </section>
    </div>
  );
}

export default BookingPage;
