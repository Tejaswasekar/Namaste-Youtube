import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  FaHome,
  FaHistory,
  FaPlay,
  FaClock,
  FaThumbsUp,
  FaDownload,
  FaShoppingCart,
  FaMusic,
  FaFilm,
  FaGamepad,
  FaNewspaper,
  FaTshirt,
  FaPodcast,
  FaCog,
  FaFlag,
  FaQuestionCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [showMore, setShowMore] = useState(false);

  if (!isMenuOpen) return null;

  return (
    <div className="w-60 bg-white h-screen p-4">
      {/* Home section */}
      <div className="mb-6">
        <ul>
          <li className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <Link to="/">
              <FaHome className="text-xl" />
            </Link>
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <FaPlay className="text-xl" />
            <p>Shorts</p>
          </li>
        </ul>
      </div>

      {/* Subscriptions section */}
      <div className="mb-6">
        <h2 className="font-bold text-gray-600 mb-2">Subscriptions</h2>
        <ul>
          <li className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            Subscription 1
          </li>
          <li className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            Subscription 2
          </li>
          <li className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            Subscription 3
          </li>
          <li className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            Subscription 4
          </li>
        </ul>
      </div>

      {/* You Section */}
      <div className="mb-6">
        <h2 className="font-bold text-gray-600 mb-2">You</h2>
        <ul>
          <li className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <FaHistory className="text-xl" />
            <p>History</p>
          </li>
          <li className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <FaPlay className="text-xl" />
            <p>Playlists</p>
          </li>
          <li className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <FaClock className="text-xl" />
            <p>Watch Later</p>
          </li>
          <li className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <FaThumbsUp className="text-xl" />
            <p>Liked Videos</p>
          </li>
          <li className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <FaDownload className="text-xl" />
            <p>Downloads</p>
          </li>
          <li className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <FaPlay className="text-xl" />
            <p>Courses</p>
          </li>
        </ul>
      </div>

      {/* Explore Section */}
      <div className="mb-6">
        <h2 className="font-bold text-gray-600 mb-2">Explore</h2>
        <ul>
          <li className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <FaShoppingCart className="text-xl" />
            <p>Shopping</p>
          </li>
          <li className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <FaMusic className="text-xl" />
            <p>Music</p>
          </li>
          <li className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <FaFilm className="text-xl" />
            <p>Films</p>
          </li>
          {showMore && (
            <>
              <li className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                <FaGamepad className="text-xl" />
                <p>Gaming</p>
              </li>
              <li className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                <FaNewspaper className="text-xl" />
                <p>News</p>
              </li>
              <li className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                <FaTshirt className="text-xl" />
                <p>Fashion & Beauty</p>
              </li>
              <li className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                <FaPodcast className="text-xl" />
                <p>Podcasts</p>
              </li>
            </>
          )}
          <li
            className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded-lg cursor-pointer"
            onClick={() => setShowMore(!showMore)}
          >
            <p>{showMore ? "Show Less" : "Show More"}</p>
          </li>
        </ul>
      </div>

      {/* Settings sections */}
      <div>
        <ul>
          <li className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <FaCog className="text-xl" />
            <p>Settings</p>
          </li>
          <li className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <FaFlag className="text-xl" />
            <p>Report History</p>
          </li>
          <li className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
            <FaQuestionCircle className="text-xl" />
            <p>Help</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
