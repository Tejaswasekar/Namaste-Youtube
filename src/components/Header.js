import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!searchQuery) return;

      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // const getSearchSuggestions = async () => {
  //   const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
  //   const json = await data.json();
  //   setSuggestions(json[1]);
  // };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="grid grid-cols-12 items-center px-4 py-2 relative">
      {/* Left */}
      <div className="col-span-2 flex items-center gap-5">
        <img
          onClick={toggleMenuHandler}
          className="h-6 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/128/6015/6015685.png"
          alt="menu"
        />

        <Link to={"/"}>
          <img
            className="h-6 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
            alt="youtube-logo"
          />
        </Link>
        {/* <img
          className="h-6 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
          alt="youtube-logo"
        /> */}
      </div>

      {/* Center */}
      <div className="col-span-8 flex justify-center relative">
        <div className="w-1/2 relative">
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              className="w-full px-4 py-2 border border-gray-400 rounded-l-full focus:outline-none focus:border-blue-500"
            />

            <button className="px-5 py-2 border border-gray-400 border-l-0 rounded-r-full bg-gray-100 hover:bg-gray-200">
              🔍
            </button>
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-30 ">
              <ul className="py-2">
                {suggestions.map((s, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button className="ml-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200">
          <img
            className="w-5 h-5"
            src="https://cdn-icons-png.flaticon.com/128/1082/1082810.png"
            alt="mic-icon"
          />
        </button>
      </div>

      {/* Right */}
      <div className="col-span-2 flex justify-end">
        <img
          className="h-10 w-10 rounded-full cursor-pointer"
          src="https://img.freepik.com/premium-vector/user-icon-vector_1272330-86.jpg"
          alt="user-icon"
        />
      </div>
    </header>
  );
};

export default Header;
