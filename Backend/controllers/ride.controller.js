const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');
const mapService = require('../services/maps.service');
const { sendMessageToSocketId } = require('../socket');

module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, pickup, destination, vehicleType } = req.body;

    try {
        const pickUpCoordinates = await mapService.getAddressCoordinate(pickup);

        if (!pickUpCoordinates || typeof pickUpCoordinates.lat !== 'number' || typeof pickUpCoordinates.lng !== 'number') {
            return res.status(400).json({ message: 'Invalid pickup coordinates received' });
        }

        const ride = await rideService.createRide({
            user: req.user._id,
            pickup,
            destination,
            vehicleType
        });

        res.status(200).json(ride);

        const captainInradius = await mapService.getCaptainInTheRadius(
            pickUpCoordinates.lat,
            pickUpCoordinates.lng,
            2
        );

        ride.otp = "";

        captainInradius.forEach((captain) => {
            sendMessageToSocketId(captain.socketId, {
                event: 'new-ride',
                data: ride
            });
        });

    } catch (error) {
        console.error(error);
        if (!res.headersSent) {
            res.status(500).json({ message: 'Internal server error.' });
        }
    }
};

module.exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination } = req.query;

    try {
        const fare = await rideService.getFare(pickup, destination);
        res.status(200).json({ fare });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};
