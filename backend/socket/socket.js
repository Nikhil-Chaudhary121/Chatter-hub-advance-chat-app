import express from "express";
import { Server } from "socket.io";
import http from "http";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    // origin: "https://chatter-hub-kd5d.onrender.com/",
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {}; // {userId : socket.id}

io.on("connection", (socket) => {
  // console.log("a user connected ", socket.id);

  //getting userId from frontend
  const userId = socket.handshake.query.userId;

  // adding userId in userSocketMap
  userSocketMap[userId] = socket.id;

  // sending onlineUsersData to every connected users
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  //socket.on = to listen events
  socket.on("disconnect", () => {
    // console.log("user disconnected ");

    // removing userId from userSocketMap
    delete userSocketMap[userId];
    // sending onlineUsersData to every connected users
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, server, io };
