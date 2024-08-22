// app/chat/page.tsx
"use client";

import React, { useEffect, useState, FormEvent, KeyboardEvent } from "react";
import queryString from "query-string";
import io, { Socket } from "socket.io-client";
import { useSearchParams } from "next/navigation";
import InfoBar from "@/component/infobar/Infobar";
import Messages from "@/component/messages/messages";
import Input from "@/component/Input/Input";
interface Message {
  id: string;
  user: string;
  text: string;
  reactions?: { user: string; reaction: string }[];
}

const EndPoint = `https://inevent.onrender.com`;
// const EndPoint = `http://localhost:5500`;

const Page: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [users, setUsers] = useState<string[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    if (query) {
      const parsedParams = queryString.parse(query) as {
        name?: string;
        room?: string;
      };
      const { name, room } = parsedParams;
      if (name) setName(name);
      if (room) setRoom(room);

      const newSocket: Socket = io(EndPoint);
      setSocket(newSocket);

      newSocket.emit(
        "join",
        { name, room },
        (error: string | { message: string }) => {
          if (typeof error === "string") {
            alert(error);
          } else if (error?.message) {
            alert(error.message);
          }
        }
      );

      newSocket.on("message", (message: Message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      newSocket.on("reaction", ({ messageId, user, reaction }) => {
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === messageId
              ? {
                  ...msg,
                  reactions: [...(msg.reactions || []), { user, reaction }],
                }
              : msg
          )
        );
      });

      newSocket.on("roomData", ({ users }: { users: string[] }) => {
        setUsers(users);
      });

      return () => {
        newSocket.disconnect();
        newSocket.off();
      };
    } else {
      console.log("Error getting query");
    }
  }, [searchParams]);

  const sendMessage = (event: FormEvent | KeyboardEvent) => {
    event.preventDefault();
    if (message.trim() && socket) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} socket={socket} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Page;
