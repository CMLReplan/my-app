// BookingForm.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "./Component/BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText(/book now/i);
  expect(headingElement).toBeInTheDocument();
});

test("Renders date input", () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toBeInTheDocument();
});

test("Updates date value on change", () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText(/choose date/i);
  fireEvent.change(dateInput, { target: { value: "2025-08-22" } });
  expect(dateInput.value).toBe("2025-08-22");
});
