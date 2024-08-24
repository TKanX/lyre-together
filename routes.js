/**
 * Routes for the server.
 * @module routes
 */

// Load the server modules
const express = require("express");
const router = express.Router();

// Create a room
router.get("/create", (req, res) => {
  const roomId = String(Math.floor(Math.random() * 100000));
  res.redirect(`/${roomId}`);
});

// Join the room
router.get("/:room", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});

module.exports = router;
