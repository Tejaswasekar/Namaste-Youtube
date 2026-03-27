import React, { useEffect, useState, useCallback, useRef } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextPageToken, setNextPageToken] = useState(null);
  const loadMoreRef = useRef(null);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const fetchVideos = useCallback(async (pageToken = "") => {
    try {
      setLoading(true);
      const response = await fetch(
        `${YOUTUBE_VIDEO_API}&pageToken=${pageToken}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch videos");
      }

      const json = await response.json();
      setVideos((prevVideos) => [...prevVideos, ...json.items]);
      setNextPageToken(json.nextPageToken);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while fetching videos.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && nextPageToken) {
          fetchVideos(nextPageToken);
        }
      },
      { threshold: 1.0 },
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [fetchVideos, nextPageToken]);

  if (loading && videos.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-48 bg-gray-200 animate-pulse rounded-lg"
          ></div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 p-5">{error}</div>;
  }

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${
        isMenuOpen ? "lg:grid-cols-3" : "lg:grid-cols-4"
      } gap-6 p-4`}
    >
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`} key={video.id || video.etag}>
          <VideoCard
            info={video}
            className={isMenuOpen ? "" : "transform scale-105"}
          />
        </Link>
      ))}
      <div ref={loadMoreRef} className="loading-trigger h-10"></div>
    </div>
  );
};

export default VideoContainer;
