const getlocationCoords = require('./location/location').getLocationCoords;
const argv = require('yargs').options({
    location: {
        alias: 'l',
        desc: 'Name of the city to get the weather',
        demand: true
    }
}).argv;

console.log(argv.location);

getlocationCoords(argv.location);