const axios = require('axios');

const getWeather = async (lat, lng) => {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d2622c0834c2a50bf605f99ec0cbb29a`);
    return response.data.main.temp;
};

module.exports = {
    getWeather
}