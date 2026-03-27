import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    // Simulate WebSocket connection for real-time updates
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
          timestamp: new Date().toLocaleTimeString(),
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const handleSendMessage = () => {
    if (liveMessage.trim() !== "") {
      dispatch(
        addMessage({
          name: "You",
          message: liveMessage,
          timestamp: new Date().toLocaleTimeString(),
        })
      );
      setLiveMessage("");
    }
  };

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-4 border border-gray-300 rounded-lg bg-white overflow-y-auto flex flex-col-reverse shadow-md">
        <div>
          {chatMessages.slice(-50).map((c, index) => (
            <ChatMessage
              key={index}
              name={c.name}
              message={c.message}
              timestamp={c.timestamp}
            />
          ))}
        </div>
      </div>
      <form
        className="flex mt-2"
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
      >
        <input
          className="flex-grow p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-lg hover:bg-blue-600 transition"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
