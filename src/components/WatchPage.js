import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex flex-col w-full">
      <div className="px-5 py-4 flex flex-col lg:flex-row w-full gap-4">
        <div className="flex-1">
          <iframe
            className="rounded-xl w-full h-[300px] lg:h-[600px]"
            src={`https://www.youtube.com/embed/` + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="lg:w-1/3">
          <LiveChat />
        </div>
      </div>
      <div className="px-5">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
