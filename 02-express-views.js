'use strict'

let express = require('express'),
mongoose = require('mongoose'),
app = express();

require('dotenv').config();
let port = process.env.PORT || 4000;

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs'),
    app.set('views', __dirname + '/views/');

app.use('/', require('./router/rutas'));
app.use('/pokemon', require('./router/pokemon'));

const user = 'ilernabasura';
const password = 'f4TevtWBVa5a44zj';
const dbname = 'pokemon';
const uri = `mongodb+srv://${process.env.user}:${process.env.password}@mongodb-f.aqsulkg.mongodb.net/${process.env.dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri,
    {}
    )

    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))

app.use((req, res) => {
        res.status(404).render('404', {
            titulo: "Error 404",
            descripcion: "Page Not Found"
        })
    })

    .listen(port)

console.log('Iniciando Express en el puerto 3000')