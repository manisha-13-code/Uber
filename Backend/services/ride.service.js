const rideModel = require('../models/ride.model');
const mapService = require('../services/maps.service');


async function getFare(pickup, destination) {
    if(!pickup || !destination) {
        throw new Error('Pickup and destination are required');
    }
    const distanceTime = await mapService.getDistanceTime(pickup, destination);

    const fareRates = {
        auto: 10, // rate per km
        car: 15,  // rate per km
        motorcycle: 8 // rate per km
    };

    const fare = {
        auto: distanceTime.distance * fareRates.auto,
        car: distanceTime.distance * fareRates.car,
        motorcycle: distanceTime.distance * fareRates.motorcycle
    };

    return fare;
}

module.exports.getFare = getFare;

module.exports.createRide = async ({user, pickup, destination, vehicleType}) => {
    if(!user || !pickup || !destination || !vehicleType) {
        throw new Error('User, Pickup, Destination and Vehicle Type are required');
    }
    const fare = await getFare(pickup, destination);
    const ride = rideModel.create({
        user,
        pickup,
        destination,
        fare: fare[vehicleType]
    });
    return ride;
}


