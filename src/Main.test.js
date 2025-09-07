/**
 * @jest-environment jsdom
 */

beforeEach(() => {
    jest.resetModules(); // Clear module cache before each test

    jest.doMock("./api", () => ({
      fetchAPI: jest.fn(() => ["17:00", "18:00", "19:00", "20:00", "21:00"]),
      submitAPI: jest.fn(() => true),
    }));

    jest.doMock("react-router-dom", () => ({
      Routes: () => null,
      Route: () => null,
      useNavigate: jest.fn(),
    }));

    // ✅ Load Main.js fresh after mocks are applied
    const MainModule = require("./Main");
    initializeTimes = MainModule.initializeTimes;
    updateTimes = MainModule.updateTimes;
  });

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

test("updateTimes returns same state for unknown action", () => {
  const state = ["17:00", "18:00"];
  const action = { type: "UNKNOWN_ACTION" };
  const result = updateTimes(state, action);
  expect(result).toEqual(state);
});
