const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');

require('./database/db');

const router = require('./routers/indexRoute');

//instancia
const app = express();



//middlewares
app.use(cors());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(morgan('dev'));


//routes
app.use('/api',router);
app.get('/',(req, res)=>{
    res.send('Hola');
});


module.exports = app;