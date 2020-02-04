const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e9872679e4a7441ae241c62e4e2018ad&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}