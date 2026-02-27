const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-2 p-2">
      <img
        className="w-8 h-8 rounded-full"
        src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
        alt="user"
      />

      <span className="font-semibold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;