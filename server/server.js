require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));
// create application/json parser
app.use(bodyParser.json());

//Configuracion globlan de rutas
app.use(require('./routes/index'));

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', process.env.PORT);
});

mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err, res) => {
    if (err) throw (err);
    console.log("Base de datos ONLINE");
});