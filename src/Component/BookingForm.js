import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../BookingForm.css';

function BookingForm({ availableTimes, dispatch, onBookingSubmit }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);

    // Dispatch update action with selected date
    dispatch({ type: 'UPDATE_TIMES', payload: newDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    onBookingSubmit(formData); // Send data to parent
    navigate('/confirmed'); // Navigate to confirmation page
    // Reset the form
    setDate('');
    setTime('');
    setGuests(1);
    setOccasion('Birthday');
  };


  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Other</option>
      </select>

      <button type="submit">Make Your Reservation</button>
    </form>
  );
}

export default BookingForm;
