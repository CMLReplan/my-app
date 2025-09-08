/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./Component/BookingForm";
import { MemoryRouter } from "react-router-dom";

// Mock useNavigate from react-router-dom
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

    // Ensure fields are reset
    expect(dateInput.value).toBe("");
    expect(timeSelect.value).toBe("");
    expect(guestsInput.value).toBe("1");
    expect(occasionSelect.value).toBe("Birthday");
  });
});

describe("BookingForm HTML5 validation attributes", () => {
  const renderForm = () =>
    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={["17:00", "18:00"]}
          dispatch={jest.fn()}
          onBookingSubmit={jest.fn()}
        />
      </MemoryRouter>
    );

  test("date input should have type date, required, and min attribute", () => {
    renderForm();
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute("min");
    const today = new Date().toISOString().split("T")[0];
    expect(dateInput.getAttribute("min")).toBe(today);
  });

  test("time select should have required attribute", () => {
    renderForm();
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toHaveAttribute("required");
  });

  test("guests input should have type number, min=1, max=10, and required", () => {
    renderForm();
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("required");
  });

  test("occasion select should have required attribute", () => {
    renderForm();
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute("required");
  });
});

describe("BookingForm JavaScript validation", () => {
  const renderForm = () =>
    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={["17:00", "18:00"]}
          dispatch={jest.fn()}
          onBookingSubmit={jest.fn()}
        />
      </MemoryRouter>
    );

  test("displays error for empty date field and disables submit button", async () => {
    renderForm();

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });

    // Form should start invalid because date/time are empty
    expect(submitButton).toBeDisabled();

    // validation runs in useEffect on mount; wait for the specific message
    expect(
      await screen.findByText(/please select a date\./i)
    ).toBeInTheDocument();
  });

  test("displays error for guests < 1 and disables submit button", async () => {
    renderForm();

    const guestsInput = screen.getByLabelText(/number of guests/i);
    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });

    // set to 0 (invalid)
    fireEvent.change(guestsInput, { target: { value: "0" } });
    fireEvent.blur(guestsInput);

    // wait for the guests error message that the component produces
    expect(
      await screen.findByText(/guests must be between 1 and 10\./i)
    ).toBeInTheDocument();

    // still disabled
    expect(submitButton).toBeDisabled();
  });

  test("enables submit button when all fields are valid", async () => {
    renderForm();

    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });

    fireEvent.change(dateInput, { target: { value: "2025-09-15" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    // Wait for the absence of errors by checking button enabled state
    // (could also assert absence of specific error messages)
    await screen.findByRole("button", { name: /make your reservation/i });
    expect(submitButton).toBeEnabled();
  });
});

