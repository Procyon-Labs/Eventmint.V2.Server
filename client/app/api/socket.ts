// pages/api/socket.ts

import { NextApiRequest } from "next";
import { Server as HttpServer } from "http";
import { Server as SocketIOServer } from "socket.io";
import { addUser, removeUser, getUser, getUsersInRoom } from "../../lib/user";

const messages: { [room: string]: any[] } = {}; // In-memory message store

export default function handler(req: NextApiRequest, res: any) {
  if (!res.socket.server.io) {
    console.log("Initializing Socket.IO server...");

    const httpServer: HttpServer = res.socket.server;
    const io = new SocketIOServer(httpServer, {
      cors: {
        origin: "http://localhost:3001", // Adjust the origin as needed
        methods: ["GET", "POST"],
        credentials: true,
      },
    });

    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("A user connected");

      socket.on("join", ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });
        if (error) return callback?.(error);

        socket.emit("message", {
          user: "admin",
          text: `${user?.name}, welcome to room ${user?.room}`,
        });

        socket.broadcast.to(user?.room || "").emit("message", {
          user: "admin",
          text: `${user?.name} has joined the room.`,
        });

        socket.join(user?.room || "");
        callback();
      });

      socket.on("sendMessage", (message, callback) => {
        const user = getUser(socket.id);
        const messageId = `${Date.now()}`; // Unique ID for the message

        if (!messages[user?.room || ""]) {
          messages[user?.room || ""] = [];
        }

        // Store the message in the in-memory store
        messages[user?.room || ""].push({
          id: messageId,
          user: user?.name || "Unknown",
          text: message,
          reactions: [],
        });

        // Emit the new message to all clients in the room
        io.to(user?.room || "").emit("message", {
          id: messageId,
          user: user?.name,
          text: message,
          reactions: [],
        });

        console.log(
          `Message from ${user?.name} to room ${user?.room}:`,
          message
        );
        callback();
      });

      socket.on("sendReaction", ({ messageId, reaction }, callback) => {
        const user = getUser(socket.id);
        const room = user?.room || "";

        // Find and update the message with the reaction
        const roomMessages = messages[room] || [];
        const message = roomMessages.find((msg) => msg.id === messageId);

        if (message) {
          message.reactions.push({ user: user?.name || "Unknown", reaction });

          io.to(room).emit("reaction", {
            messageId,
            user: user?.name,
            reaction,
          });

          console.log(
            `Reaction from ${user?.name} to message ${messageId}:`,
            reaction
          );
        }

        callback?.();
      });

      socket.on("disconnect", () => {
        const user = removeUser(socket.id);

        if (user) {
          io.to(user.room).emit("message", {
            user: "admin",
            text: `${user.name} has left the room.`,
          });

          io.to(user.room).emit("roomData", {
            users: getUsersInRoom(user.room),
          });
        }

        console.log("user disconnected");
      });
    });
  } else {
    console.log("Socket.IO server already running");
  }
  res.end(); // End the response since we are only using this API to start the server
}

export const config = {
  api: {
    bodyParser: false, // Disable body parsing so Socket.IO can take over
  },
};
