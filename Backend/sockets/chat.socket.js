// AuthMiddleware
// require jwt
const jwt = require("jsonwebtoken");
const socketAuthMiddleware = (socket, next) => {
  try {
    // get Token
    const token = socket.handshake.headers.token;
    if (!token) return next(new Error("Not Found Token"));
    // Get Payload
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    socket.userId = payload.id;
    socket.role = payload.role;
    next();
  } catch (error) {
    return next(new Error("Invalid Token"));
  }
};

const chatSocketController = (io) => {
  // Use Middleware
  io.use(socketAuthMiddleware);
  // Connection Socket.io
  io.on("connection", (socket) => {
    console.log(
      `User ${socket.userId} & Role ${socket.role} is Connection Socket Server`,
    );
  });
};

module.exports = chatSocketController;
