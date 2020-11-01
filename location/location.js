const axios = require('axios');

const getLocationCoords = async (location) => {
    const encodedLocation = encodeURI(location);

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodedLocation}&appid=d2622c0834c2a50bf605f99ec0cbb29a`
    });

    try{
        const response = await instance.get();
        console.log(response);
    } catch(error) {
        // throw new Error(error.data);
        console.log(error.response.data);
    }
};

module.exports = {
    getLocationCoords
};