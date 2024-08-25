/**
 * Routes for the server.
 * @module routes
 */

// Load the server modules
const express = require("express");
const router = express.Router();

// Home page
router.get("/", (req, res) => {
  res.redirect("/en");
});

// Home page (English)
router.get("/en", (req, res) => {
  res.sendFile("index-en.html", { root: "views" });
});

// Home page (Chinese)
router.get("/zh", (req, res) => {
  res.sendFile("index-zh.html", { root: "views" });
});

// Home page (Japanese)
router.get("/ja", (req, res) => {
  res.sendFile("index-ja.html", { root: "views" });
});

// Home page (Korean)
router.get("/ko", (req, res) => {
  res.sendFile("index-ko.html", { root: "views" });
});

// Create a room
router.get("/:lang/create", (req, res) => {
  const roomId = String(Math.floor(Math.random() * 100000));
  res.redirect(`/${req.params.lang}/${roomId}`);
});

// Join the room
router.get("/:lang/:room", (req, res) => {
  res.sendFile(`room-${req.params.lang}.html`, { root: "views" });
});

// Invalid Language/Path
router.get("*", (req, res) => {
  res.redirect("/en");
});

module.exports = router;
