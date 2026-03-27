import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonNames = [
    "All",
    "Music",
    "Gaming",
    "Live",
    "News",
    "Sports",
    "Learning",
    "Fashion",
    "Beauty",
    "Comedy",
    "Movies",
    "Shows",
    "Trailers",
  ];

  return (
    <div className="flex gap-3 p-3 overflow-x-auto scrollbar-hide">
      {buttonNames.map((name, index) => (
        <Button
          key={index}
          name={name}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        />
      ))}
    </div>
  );
};

export default ButtonList;
