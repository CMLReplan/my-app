/**
 * @jest-environment jsdom
 */

// Mock fetchAPI and submitAPI from ./api
jest.mock("./api", () => ({
  fetchAPI: jest.fn(() => ["17:00", "18:00", "19:00", "20:00", "21:00"]),
  submitAPI: jest.fn(() => true),
}));

// Mock react-router-dom
jest.mock("react-router-dom", () => ({
  Routes: () => null,
  Route: () => null,
  useNavigate: jest.fn(),
}));

// Import after mocks
import { initializeTimes, updateTimes } from "./Main";

test("initializeTimes returns expected times", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("updateTimes returns expected times when date changes", () => {
  const state = ["17:00", "18:00", "19:00"];
  const action = { type: "UPDATE_TIMES", payload: "2025-08-22" };
  const result = updateTimes(state, action);
  expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});
