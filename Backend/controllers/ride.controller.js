const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');
const mapService = require('../services/maps.service');

module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { userId, pickup, destination, vehicleType } = req.body;
    try {
        const ride = await rideService.createRide({ user: req.user._id, pickup, destination, vehicleType });
        res.status(200).json(ride);

        const pickUpCoordinates = await mapService.getAddressCoordinate(pickup);
        console.log('pickup coordinates', pickUpCoordinates);
        const captainInradius = await mapService.getCaptainInTheRadius(pickup, vehicleType)
    } catch (error) {
        res.status(500).json({ message: 'Internal server error..' });
        console.log(error);
    }
}

module.exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { pickup, destination } = req.query;
    try {
        const fare = await rideService.getFare(pickup, destination);
        res.status(200).json(fare);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error..' });
        console.log(error);
    }
}



