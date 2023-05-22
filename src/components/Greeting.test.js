import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders functions on Counter component", async () => {
  // Arrange
  render(<Greeting name={"ahmet"} />);
  screen.debug();

  // Act
  const greeting = screen.getByText(/Merhaba Ahmet/i);

  // Assert
  expect(greeting).toBeInTheDocument();
});
