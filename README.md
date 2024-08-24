# LyreTogether

LyreTogether is designed to simulate the lyre from Genshin Impact. This project enables multiple users to play together in real-time using WebSockets. It also includes features for adding and practicing sheet music.

## Features

- **Multi-User Rooms:** Connect with friends and play the lyre together in real-time. Each user can join a room and interact with others in the same space.
- **Sheet Music Support:** Upload and integrate sheet music into the simulator for practice and performance.
- **Practice Mode:** Practice with various pieces of sheet music, including features to help improve your performance skills.

## Getting Started

### Prerequisites

- Node.js and npm (for the WebSocket server)
- A web browser for the client-side interface

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/TKanX/lyre-together.git
cd lyre-together
```

2. **Install the dependencies:**

```bash
npm install
```

3. **Start the server:**

```bash
npm start
```

4. **Open the client:**

Navigate to `http://localhost:3000` in your web browser.

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web framework for Node.js
- [Socket.IO](https://socket.io/) - Real-time engine for WebSockets

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Genshin Impact](https://genshin.mihoyo.com/) - Inspiration for the lyre simulator
- [WindsongLyre-Sim](https://github.com/haveyouwantto/WindsongLyre-Sim/) - Reference for the lyre simulator
