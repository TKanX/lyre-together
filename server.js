/**
 * Server file.
 * @module server
 */

// Load the server modules
const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");
const { Server } = require("socket.io");
const routes = require("./routes");

// Create the express app
const app = express();

// Determine whether to use HTTPS or HTTP based on environment variables
let server;
if (process.env.USE_HTTPS === "true") {
  const privateKey = fs.readFileSync(process.env.SSL_KEY_PATH, "utf8");
  const certificate = fs.readFileSync(process.env.SSL_CERT_PATH, "utf8");
  const credentials = { key: privateKey, cert: certificate };
  server = https.createServer(credentials, app);
  console.log("HTTPS enabled.");
} else {
  server = http.createServer(app);
  console.log("HTTP enabled.");
}

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
  console.log(
    `Server running at ${
      process.env.USE_HTTPS === "true" ? "https" : "http"
    }://${HOST}:${PORT}`
  );
});
