import React, { useEffect, useState, useCallback } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getVideos = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(YOUTUBE_VIDEO_API);

      if (!response.ok) {
        throw new Error("Failed to fetch videos");
      }

      const json = await response.json();
      setVideos(json.items || []);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while fetching videos.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getVideos();
  }, [getVideos]);

  // 🔥 Skeleton Loader (YouTube Style)
  if (loading) {
    return (
      <div className="px-6 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-8">
          {videos.map((video) => (
            <Link to={`/watch?v=${video.id}`}>
              <VideoCard key={video.id || video.etag} info={video} />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 p-5">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`}>
          <VideoCard key={video.id || video.etag} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
