import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import BookingPage from "./Pages/BookingPage";

// Function to initialize available times
const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
};

// Reducer function to update times
const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    // For now, return the same times regardless of date
    return ['17:00', '18:00', '19:00', '20:00', '21:00'];
  }
  return state;
};


function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
