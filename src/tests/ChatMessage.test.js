import { render, screen } from "@testing-library/react";
import ChatMessage from "../components/ChatMessage";

describe("ChatMessage Component", () => {
  test("renders ChatMessage with name and message", () => {
    render(
      <ChatMessage
        name="John Doe"
        message="Hello, world!"
        timestamp="10:00 AM"
      />,
    );

    const nameElement = screen.getByText(/John Doe/i);
    const messageElement = screen.getByText(/Hello, world!/i);
    const timestampElement = screen.getByText(/10:00 AM/i);

    expect(nameElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
    expect(timestampElement).toBeInTheDocument();
  });
});
