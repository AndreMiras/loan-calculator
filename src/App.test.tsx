import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

/*
 * Mocks the Pie chart so it doesn't fail while testing:
 * https://github.com/reactchartjs/react-chartjs-2/issues/155
 */
jest.mock("react-chartjs-2", () => ({
  Doughnut: () => null,
}));

test("renders home link", () => {
  render(<App />);
  const elements = screen.getAllByText("Loan Calculator");
  expect(elements.length).toBeGreaterThanOrEqual(1);
});
