const express = require("express");
const cors = require("cors");
const http = require("http");
require("dotenv").config();

const connectDB = require("./config/db");
const { initSocket } = require("./config/socket");
const orderRoutes = require("./routes/order.routes");

const app = express();
const server = http.createServer(app);

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/orders", orderRoutes);

// MongoDB + Server Init
connectDB().then(() => {
  const io = initSocket(server);
  server.listen(8000, () => console.log("Server running on port 8000"));
});
