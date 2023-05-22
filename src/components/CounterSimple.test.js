import { act, render, screen, within } from "@testing-library/react";
import CounterSimple from "./CounterSimple";
import userEvent from "@testing-library/user-event";

test("renders functions on Counter component", async () => {
  // Arrange
  render(<CounterSimple start={100} />);
  screen.debug();

  // // Act
  const incBtn = screen.getByText("Increment");
  const countDisplay = screen.getByTestId("count-display");

  act(() => {
    userEvent.click(incBtn);
  });

  // Assert
  expect(countDisplay).toHaveTextContent("101");

  expect(screen.getByText("101")).toBeInTheDocument();
});
