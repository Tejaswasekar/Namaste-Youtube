import { render, screen } from "@testing-library/react";
import VideoCard from "../components/VideoCard";

describe("VideoCard Component", () => {
  test("renders video card with title and channel name", () => {
    const videoInfo = {
      snippet: {
        title: "Sample Video Title",
        channelTitle: "Sample Channel",
        publishedAt: "2023-03-10T12:00:00Z",
        thumbnails: {
          high: {
            url: "https://via.placeholder.com/150",
          },
        },
      },
      statistics: {
        viewCount: "12345",
      },
    };

    render(<VideoCard info={videoInfo} />);

    const titleElement = screen.getByText(/Sample Video Title/i);
    const channelElement = screen.getByText(/Sample Channel/i);
    const viewsElement = screen.getByText(/12.3K views/i);

    expect(titleElement).toBeInTheDocument();
    expect(channelElement).toBeInTheDocument();
    expect(viewsElement).toBeInTheDocument();
  });
});
