import { render, screen } from "@testing-library/react";
import ButtonList from "../components/ButtonList";

describe("ButtonList Component", () => {
  test("renders all buttons", () => {
    render(<ButtonList />);

    const buttonElements = screen.getAllByRole("button");
    expect(buttonElements.length).toBeGreaterThan(0);
  });
});
