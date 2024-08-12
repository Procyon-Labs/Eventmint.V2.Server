import React, { useState } from "react";
import "./Message.css";

interface MessageProps {
  message: {
    id: string;
    user: string;
    text: string;
    reactions?: { user: string; reaction: string }[];
  };
  name: string;
  socket: any;
}

const linkify = (text: string) => {
  const urlPattern = /(https?:\/\/[^\s]+)/g;

  return text.replace(urlPattern, (url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });
};

const Message: React.FC<MessageProps> = ({
  message: { user, text, reactions = [] },
  name,
  socket,
}) => {
  const [showReactions, setShowReactions] = useState(false);
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  const handleReaction = (reaction: string) => {
    socket.emit("sendReaction", { messageId: id, reaction });
    setShowReactions(false);
  };

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox backgroundBlue">
        <p
          className="messageText colorWhite"
          dangerouslySetInnerHTML={{ __html: linkify(text) }}
        />
        {/* <button
          className="btn-react"
          onClick={() => setShowReactions(!showReactions)}
        >
          ❤️
        </button> */}
        {/* {showReactions && (
          <div className="reactionPicker">
            {["👍", "❤️", "😂", "😮", "😢", "😡"].map((emoji) => (
              <span key={emoji} onClick={() => handleReaction(emoji)}>
                {emoji}
              </span>
            ))}
          </div>
        )} */}
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p
          className="messageText colorDark"
          dangerouslySetInnerHTML={{ __html: linkify(text) }}
        />
      </div>
      <p className="sentText pl-10">{user}</p>
    </div>
  );
};

export default Message;
