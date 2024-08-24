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
        socket.to(room).emit("playNote", note, autoRelease);
      });

      // Release note
      socket.on("releaseNote", (note) => {
        socket.to(room).emit("releaseNote", note);
      });

      // Switch instrument
      socket.on("switchInstrument", (instrument) => {
        socket.to(room).emit("switchInstrument", instrument);
      });
    });
  });
}

module.exports = socket;
