'use strict'

let express = require('express'),
app = express()

app 
    .get('/', (req, res) => {
        res.sendFile(`${__dirname}/assets/index.html`)
    })

    .listen(3000)

app.use((req, res) => {
    res.status(404).sendFile(`${__dirname}/assets/404.html`)
})

console.log('Iniciando Express en el puerto 3000')