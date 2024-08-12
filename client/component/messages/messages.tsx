// components/messages/Messages.tsx
import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../message/message";
import "./messages.css";

interface MessageProps {
  id: string;
  user: string;
  text: string;
  reactions?: { user: string; reaction: string }[];
}

interface MessagesProps {
  messages: MessageProps[];
  name: string;
  socket: any; // Change to correct type if available
}

const Messages: React.FC<MessagesProps> = ({ messages, name, socket }) => (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} socket={socket} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
