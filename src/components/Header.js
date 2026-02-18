import React from "react";

const Header = () => {
  return (
    <header className="grid grid-cols-12 items-center px-4 py-2 shadow-sm">
      
      {/* Left section */}
      <div className="col-span-2 flex items-center gap-5">
        <img
          className="h-6 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/128/6015/6015685.png"
          alt="menu"
        />

        <img
          className="h-6 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
          alt="youtube-logo"
        />
      </div>

      {/* Center section */}
      <div className="col-span-8 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 px-4 py-2 border border-gray-400 rounded-l-full focus:outline-none focus:border-blue-500"
        />

        <button className="px-5 py-2 border border-gray-400 border-l-0 rounded-r-full bg-gray-100 hover:bg-gray-200">
          🔍
        </button>

        <button className="ml-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200">
          <img
            className="w-5 h-5"
            src="https://cdn-icons-png.flaticon.com/128/1082/1082810.png"
            alt="mic-icon"
          />
        </button>
      </div>

      {/* Right section */}
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