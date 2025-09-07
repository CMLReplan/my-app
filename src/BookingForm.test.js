/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./Component/BookingForm";
import { MemoryRouter } from "react-router-dom";

// ✅ Mock useNavigate from react-router-dom
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("BookingForm Component", () => {
  let mockDispatch;
  let mockSubmit;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockSubmit = jest.fn();
    jest.clearAllMocks();
  });

  test("renders form fields correctly", () => {
    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={["17:00", "18:00"]}
          dispatch={mockDispatch}
          onBookingSubmit={mockSubmit}
        />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /make your reservation/i })).toBeInTheDocument();
  });

  test("updates date and dispatches UPDATE_TIMES action", () => {
    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={["17:00", "18:00"]}
          dispatch={mockDispatch}
          onBookingSubmit={mockSubmit}
        />
      </MemoryRouter>
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: "2025-09-15" } });

    expect(dateInput.value).toBe("2025-09-15");
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "UPDATE_TIMES",
      payload: "2025-09-15",
    });
  });

  test("submits form with correct data and navigates", () => {
    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={["17:00", "18:00"]}
          dispatch={mockDispatch}
          onBookingSubmit={mockSubmit}
        />
      </MemoryRouter>
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByRole("button", { name: /make your reservation/i });

    fireEvent.change(dateInput, { target: { value: "2025-09-15" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: 4 } });
    fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });

    fireEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalledWith({
      date: "2025-09-15",
      time: "18:00",
      guests: 4,
      occasion: "Anniversary",
    });
    expect(mockNavigate).toHaveBeenCalledWith("/confirmed");
  });

  test("resets form fields after submission", () => {
    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={["17:00", "18:00"]}
          dispatch={mockDispatch}
          onBookingSubmit={mockSubmit}
        />
      </MemoryRouter>
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByRole("button", { name: /make your reservation/i });

    fireEvent.change(dateInput, { target: { value: "2025-09-15" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: 4 } });
    fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });

    fireEvent.click(submitButton);

    // ✅ Ensure fields are reset
    expect(dateInput.value).toBe("");
    expect(timeSelect.value).toBe("");
    expect(guestsInput.value).toBe("1");
    expect(occasionSelect.value).toBe("Birthday");
  });
});
