/**
 * Socket file.
 * @module socket
 */

// Io server
function socket(io) {
  io.on("connection", (socket) => {
    // Join room
    socket.on("joinRoom", (room) => {
      socket.join(room);

      // Play note
      socket.on("playNote", (note, autoRelease = false) => {
        io.to(room).emit("playNote", note, autoRelease);
      });

      // Release note
      socket.on("releaseNote", (note) => {
        io.to(room).emit("releaseNote", note);
      });
    });
  });
}

module.exports = socket;
