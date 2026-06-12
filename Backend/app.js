// Dotenv
require("dotenv").config();
// express
const express = require("express");
const app = express();
const http = require("http");
const realServer = http.createServer(app);

const morgan = require("morgan");
// middleware json
app.use(express.json());
// connection DB
// Simple Logger
if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}
// Test Route
app.get("/test", (req, res) => {
  res.json({ msg: "Test Route" });
});

const connectedDB = require("./config/db");
connectedDB();

const adminRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/user.route");
const userAuthRoutes = require("./routes/authUser.route");

app.use("/api/dashboard", adminRoutes);
app.use("/api/dashboard/users", userRoutes);
app.use("/api/users", userAuthRoutes);

const { Server } = require("socket.io");
const io = new Server(realServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Port
const port = process.env.PORT || 3000;
// Run Server
realServer.listen(port, () => {
  console.log(`Server Is Running ${port}`);
});
