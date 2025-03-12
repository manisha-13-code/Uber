const rideModel = require("../models/ride.model");
const mapService = require("../services/maps.service");
const crypto = require("crypto");

async function getFare(pickup, destination) {
  if (!pickup || !destination) {
    throw new Error("Pickup and destination are required");
  }

  const distanceTime = await mapService.getDistanceTime(pickup, destination);

  if (!distanceTime.distance) {
    throw new Error("Invalid distance received from map service");
  }

  const perKmRate = {
    auto: 10,
    car: 15,
    moto: 8,
  };

  const distanceInKm =
    parseFloat(distanceTime.distance.replace(/,/g, "").split(" ")[0]) || 0;

  const fare = {
    auto: Math.round(distanceInKm * perKmRate.auto),
    car: Math.round(distanceInKm * perKmRate.car),
    moto: Math.round(distanceInKm * perKmRate.moto),
  };

  return fare;
}

module.exports.getFare = getFare;

function getOtp(num) {
  function generateOtp(num) {
    if (!num || num <= 0) {
      throw new Error("Number of digits must be greater than zero");
    }

    const otp = crypto
      .randomInt(0, Math.pow(10, num))
      .toString()
      .padStart(num, "0");
    return otp;
  }
  return generateOtp(num);
}

module.exports.createRide = async ({
  user,
  pickup,
  destination,
  vehicleType,
}) => {
  if (!user || !pickup || !destination || !vehicleType) {
    throw new Error("All fields are required");
  }

  const fare = await getFare(pickup, destination);
  console.log("Fare Calculated:", fare);

  if (!fare[vehicleType]) {
    throw new Error(`Invalid vehicleType: ${vehicleType}`);
  }

  const ride = await rideModel.create({
    user,
    pickup,
    destination,
    otp: getOtp(6),
    fare: fare[vehicleType],
  });

  return ride;
};
