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
    
}