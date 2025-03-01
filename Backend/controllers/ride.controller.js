const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');

module.exports.createRide = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { userId, pickup, destination, vehicleType } = req.body;
    try {
        const ride = await rideService.createRide({ user: userId, pickup, destination, vehicleType });
        res.status(200).json(ride);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error..' });
    }
    next();
}