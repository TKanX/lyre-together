// Init socket.io
const socket = io();

// Get current url (room)
const url = window.location.href;
const parsedUrl = new URL(url);
const room = parsedUrl.pathname.split("/").pop();

// Join room
function joinRoom() {
  const roomId = document.getElementById("room-id").value;
  window.location.href = `/${roomId}`;
}

// Create room
function createRoom() {
  window.location.href = "/create";
}

// If the user is in a room
if (room) {
  // Emit join room event
  socket.emit("joinRoom", room);

  // Listen for play note event
  socket.on("playNote", (note, autoRelease = false) => {
    play(note, autoRelease);
  });

  // Listen for release note event
  socket.on("releaseNote", (note) => {
    release(note);
  });
}

// Send play note event
function sendPlay(note, autoRelease = false) {
  socket.emit("playNote", note, autoRelease);
}

// Send release note event
function sendRelease(note) {
  socket.emit("releaseNote", note);
}
