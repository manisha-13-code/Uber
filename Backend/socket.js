const { Server } = require('socket.io');
const captainModel = require('./models/captain.model'); 
const userModel = require('./models/user.models');

let io;

function initializeSocket(server) {
    io = new Server(server, {
        cors: {
            origin: '*', // Update this with your frontend's URL for better security
            methods: ['GET', 'POST']
        }
    });

    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);

        socket.on('join', async(data)=> {
            const { userId, userType } = data;

            console.log(`User joined: ${userId}, Type: ${userType}`);
            if(userType === 'user')  {
                await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
            } else if(userType === 'captain') {
                await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
            }
        })

        socket.on('update-location-captain', async(data) => {
            const { userId, location } = data;

            if (!location || !location.ltd || !location.lng) {
                console.error('Invalid location data received');
                return;
            }
            await captainModel.findByIdAndUpdate(userId, { location: {
                ltd: location.ltd,
                lng: location.lng
            } });
           
        });

        socket.on('disconnect', () => {
            console.log(`Client disconnected: ${socket.id}`);
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