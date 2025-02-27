import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.PROD 
  ? "https://spotify-backend-3idi.onrender.com"
  : "http://localhost:5000";

export const socket = io(SOCKET_URL, {
  autoConnect: false,
  reconnection: true,
  reconnectionAttempts: 3,
  reconnectionDelay: 1000,
  timeout: 20000,
  transports: ["polling"], // Force polling only
  withCredentials: true,
  path: "/socket.io/"
});

// Add error handling
socket.on("connect_error", (error) => {
  console.error("Socket connection error:", error);
});

socket.on("error", (error) => {
  console.error("Socket error:", error);
});

export default socket; 