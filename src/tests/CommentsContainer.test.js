import { render, screen } from "@testing-library/react";
import CommentsContainer from "../components/CommentsContainer";

describe("CommentsContainer Component", () => {
  test("renders comments section", () => {
    render(<CommentsContainer />);

    const headingElement = screen.getByText(/Comments/i);
    expect(headingElement).toBeInTheDocument();

    const commentElements = screen.getAllByText(/This video is amazing!/i);
    expect(commentElements.length).toBeGreaterThan(0);
  });
});
