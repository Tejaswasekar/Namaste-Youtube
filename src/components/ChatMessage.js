const ChatMessage = ({ name, message, timestamp }) => {
  return (
    <div className="flex items-start gap-3 p-3 border-b border-gray-200">
      <img
        className="w-10 h-10 rounded-full"
        src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
        alt="user"
      />
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-800">{name}</span>
          <span className="text-xs text-gray-500">{timestamp}</span>
        </div>
        <span className="text-gray-700 mt-1">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
