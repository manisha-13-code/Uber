const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
    try {
        const response = await axios.get('https://maps.gomaps.pro/maps/api/geocode/json', {
            params: {
                address: address,
                key: process.env.GOOGLE_MAPS_API_KEY
            }
        });

        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to get coordinates');
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching coordinates');
    }
};

module.exports.getDistanceTime = async (origin, destination) => {
   if(!origin || !destination) {
    throw new Error('Origin and Destination are required');
   }
   
   const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.gomaps.pro/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${apiKey}`;
    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const data = response.data.rows[0].elements[0];
            return {
                distance: data.distance.text,
                duration: data.duration.text
            };
        } else {
            throw new Error('Unable to get distance and time');
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching distance and time');
    }
}

module.exports.getAutoCompleteSuggestions = async (input) => {

    if(!input) {
        throw new Error('query is required');
    }
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${input}&key=${apiKey}`;
    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            return response.data.predictions.map(prediction => prediction.description);
        } else {
            throw new Error('Unable to get suggestions');
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching suggestions');
    }
}

