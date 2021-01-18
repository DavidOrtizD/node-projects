const getLocationCoords = require('./location/location').getLocationCoords;
const getWeather = require('./weather/weather').getWeather;
const argv = require('yargs').options({
    location: {
        alias: 'l',
        desc: 'Name of the city to get the weather',
        demand: true
    }
}).argv;


/* Self Called method to use async and await */
(async ()=>{
    try {
        const locationData = await getLocationCoords(argv.location);
        if(locationData){
            const weather = await getWeather(locationData.data.coord.lat, locationData.data.coord.lon);
            console.log(`The weather in ${locationData.data.name} is ${weather}`);
        }    
    }
    catch(err) {
        console.error(`Sorry we could not get the wheater of ${argv.location}`);
    }
    
})();