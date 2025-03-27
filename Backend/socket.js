const { Server } = require('socket.io');

let io;

function initializeSocket(server) {
    io = new Server(server, {
        cors: {
            origin: '*', // Update this with your frontend's URL for better security
            methods: ['GET', 'POST']
        }
    });

    io.on('connection', (socket) => {
        console.log(`Socket connected: ${socket.id}`);

        socket.on('disconnect', () => {
            console.log(`Socket disconnected: ${socket.id}`);
        });
    });
}

function sendMessageToSocketId(socketId, event, message) {
    if (io) {
        io.to(socketId).emit(event, message);
    } else {
        console.error('Socket.io is not initialized');
    }
}

module.exports = {
    initializeSocket,
    sendMessageToSocketId
};