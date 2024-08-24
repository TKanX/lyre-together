/**
 * Server file.
 * @module server
 */

// Load the server modules
const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
const routes = require("./routes");

// Create the express app
const app = express();
const server = http.createServer(app);

// Create the socket.io server
const io = new Server(server);

// Set the socket.io server
const socket = require("./socket");
socket(io);

// Serve the static files
app.use(express.static(path.join(__dirname, "public")));

// Set the routes
app.use(routes);

// Start the server
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";
server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
