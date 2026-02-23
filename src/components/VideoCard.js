import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null;

  const { statistics, snippet } = info;

  const formatViews = (num) => {
    if (!num) return "";
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M views";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K views";
    return num + " views";
  };

  const formatDate = (date) => {
    const now = new Date();
    const published = new Date(date);
    const diffInSeconds = Math.floor((now - published) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    }

    if (diffInDays < 30) {
      return `${Math.floor(diffInDays / 7)} weeks ago`;
    }

    if (diffInDays < 365) {
      return `${Math.floor(diffInDays / 30)} months ago`;
    }

    return `${Math.floor(diffInDays / 365)} years ago`;
  };

  return (
    <div className="cursor-pointer">
      {/* Thumbnail */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden">
        <img
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Video Info */}
      <div className="flex mt-3">
        {/* Channel Icon Placeholder */}
        <div className="w-9 h-9 bg-gray-300 rounded-full flex-shrink-0 mr-3"></div>

        <div className="flex flex-col">
          {/* Title */}
          <h3 className="text-sm font-medium line-clamp-2 leading-5">
            {snippet?.title}
          </h3>

          {/* Channel Name */}
          <p className="text-xs text-gray-600 mt-1">{snippet?.channelTitle}</p>

          {/* Views + Time */}
          <p className="text-xs text-gray-600">
            {formatViews(statistics?.viewCount)} •{" "}
            {formatDate(snippet?.publishedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
