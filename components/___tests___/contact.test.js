import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

test("Should load a contact component", () => {
  render(<Contact />);

  const heading = screen.getAllByRole("heading");

  expect(heading[0]).toBeInTheDocument();
})