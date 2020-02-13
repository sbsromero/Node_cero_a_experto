require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));
// create application/json parser
app.use(bodyParser.json());

app.get('/usuario', function(req, res) {
    res.json('get Usuario');
})

app.post('/usuario', function(req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'Es necesario el nombre'
        });
    } else {
        res.json({
            persona: body
        });
    }
})

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id: id
    });
})

app.delete('/usuario', function(req, res) {
    res.json('delete Usuario');
})
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', process.env.PORT);
})