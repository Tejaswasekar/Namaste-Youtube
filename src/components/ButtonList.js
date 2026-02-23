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
    <div className="flex gap-2 p-2 m-2">
      {buttonNames.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
