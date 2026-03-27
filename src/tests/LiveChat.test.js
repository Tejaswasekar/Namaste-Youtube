import { render, screen } from "@testing-library/react";
import LiveChat from "../components/LiveChat";
import { Provider } from "react-redux";
import store from "../utils/store";

describe("LiveChat Component", () => {
  test("renders LiveChat component", () => {
    render(
      <Provider store={store}>
        <LiveChat />
      </Provider>,
    );

    const inputElement = screen.getByPlaceholderText(/Enter your message.../i);
    expect(inputElement).toBeInTheDocument();
  });
});
