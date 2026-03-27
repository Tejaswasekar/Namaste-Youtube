import { render, screen } from "@testing-library/react";
import MainContainer from "../components/MainContainer";
import { Provider } from "react-redux";
import store from "../utils/store";
import { MemoryRouter } from "react-router-dom";

describe("MainContainer Component", () => {
  test("renders ButtonList and VideoContainer", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainContainer />
        </MemoryRouter>
      </Provider>,
    );

    const buttonListElement = screen.getByText(/All/i);
    expect(buttonListElement).toBeInTheDocument();

    const videoContainerElement = screen.getByText(/loading/i);
    expect(videoContainerElement).toBeInTheDocument();
  });
});
