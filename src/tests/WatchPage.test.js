import { render, screen } from "@testing-library/react";
import WatchPage from "../components/WatchPage";
import { Provider } from "react-redux";
import store from "../utils/store";
import { MemoryRouter } from "react-router-dom";

describe("WatchPage Component", () => {
  test("renders WatchPage with iframe and LiveChat", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <WatchPage />
        </MemoryRouter>
      </Provider>,
    );

    const iframeElement = screen.getByTitle(/YouTube video player/i);
    expect(iframeElement).toBeInTheDocument();

    const liveChatElement = screen.getByText(/Enter your message.../i);
    expect(liveChatElement).toBeInTheDocument();
  });
});
