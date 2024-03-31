import { render, screen, fireEvent } from "@testing-library/react";
import { Home } from ".";
import "@testing-library/jest-dom";
test("renders Home component", () => {
  render(<Home />);
  const homeContainer = screen.getByTestId("home-container");
  expect(homeContainer).toBeInTheDocument();
});

test("renders task input", () => {
  render(<Home />);
  const taskInput = screen.getByLabelText("Vou trabalhar em");
  expect(taskInput).toBeInTheDocument();
});

test("renders minutes amount input", () => {
  render(<Home />);
  const minutesAmountInput = screen.getByLabelText("Durante");
  expect(minutesAmountInput).toBeInTheDocument();
});

test("renders start countdown button", () => {
  render(<Home />);
  const startCountdownButton = screen.getByText("Começar");
  expect(startCountdownButton).toBeInTheDocument();
});

test("clicking start countdown button triggers submit event", () => {
  render(<Home />);
  const startCountdownButton = screen.getByText("Começar");
  fireEvent.click(startCountdownButton);
  expect(startCountdownButton).toBeEnabled();
});
