const path = require('path');
const express = require('express');
const app = express();

app.listen(4008, () => {
    console.log("Escuchando en: http://localhost:3000")

});

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'Ejercicio2.html'));
});
