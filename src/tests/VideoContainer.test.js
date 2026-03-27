import { render, screen } from "@testing-library/react";
import VideoContainer from "../components/VideoContainer";
import { Provider } from "react-redux";
import store from "../utils/store";
import { MemoryRouter } from "react-router-dom";

describe("VideoContainer Component", () => {
  test("renders loading state initially", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <VideoContainer />
        </MemoryRouter>
      </Provider>,
    );

    const loadingElements = screen.getAllByText(/loading/i);
    expect(loadingElements.length).toBeGreaterThan(0);
  });
});
