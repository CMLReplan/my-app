import React, { useReducer } from "react";
import { Routes, Route, useNavigate} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import BookingPage from "./Pages/BookingPage";
import ConfirmedBooking from "./Pages/ConfirmedBooking";
import { fetchAPI, submitAPI } from "./api";

// Initialize available times using fetchAPI
export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

// Reducer function to update times when date changes
export const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    return fetchAPI(new Date(action.payload));
  }
  return state;
};


function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed'); // Navigate to confirmation page on successful submission
    }
  };

  return (
    <main
      id="main-content"
      role="main"
      aria-label="Little Lemon Main Content"
      aria-live="polite"
    >
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              onBookingSubmit={submitForm}
            />
          }
        />
        <Route
          path="/confirmed"
          element={<ConfirmedBooking />}
        />
      </Routes>
    </main>
  );
}

export default Main;
