const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
const direccion = argv.direccion;

const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const { lat, lng } = coordenadas;
        const temperatura = await clima.getClima(lat, lng);
        return `El clima de la dirección: ${direccion} es de ${temperatura}`
    } catch (e) {
        return `No se pudo determinar el clima de la dirección: ${direccion}`
    }
}

getInfo(direccion).then(mensaje => {
    console.log(mensaje);
}).catch(e => {
    console.log("Error", e);
});