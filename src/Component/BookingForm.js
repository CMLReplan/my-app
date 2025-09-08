import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../BookingForm.css';

function BookingForm({ availableTimes, dispatch, onBookingSubmit }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    // Dispatch update action with selected date
    dispatch({ type: 'UPDATE_TIMES', payload: newDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate again before submit
    validateForm();

    if (!isFormValid) return;

    const formData = { date, time, guests, occasion };
    onBookingSubmit(formData);
    navigate('/confirmed'); // Navigate to confirmation page

    // Reset the form
    setDate('');
    setTime('');
    setGuests(1);
    setOccasion('Birthday');
    setErrors({});
  };

  // Validation logic
  const validateForm = () => {
    const newErrors = {};

    if (!date) {
      newErrors.date = 'Please select a date.';
    }

    if (!time) {
      newErrors.time = 'Please select a time.';
    }

    if (guests < 1 || guests > 10) {
      newErrors.guests = 'Guests must be between 1 and 10.';
    }

    if (!occasion.trim()) {
      newErrors.occasion = 'Please select an occasion.';
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  // Validate whenever inputs change (real-time validation)
  useEffect(() => {
    validateForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, time, guests, occasion]);

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
    >
      {/* Date Field */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
        min={new Date().toISOString().split('T')[0]} // Prevent past dates
      />
      {errors.date && <span className="error-text">{errors.date}</span>}

      {/* Time Field */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
      <option value="">Select a time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      {errors.time && <span className="error-text">{errors.time}</span>}

        {/* Guest Field */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        required
      />
      {errors.guests && <span className="error-text">{errors.guests}</span>}

      {/* Occasion Field */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Other</option>
      </select>
      {errors.occasion && <span className="error-text">{errors.occasion}</span>}

      {/* Submit Button */}
      <button type="submit" disabled={!isFormValid}>
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
