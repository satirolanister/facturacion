const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const app = express();

require('./database/db');

const router = require('./routers/indexRoute');

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use(morgan('dev'));



app.use('/api',router);

app.get('/',(req, res)=>{
    res.send('Hola');
});


module.exports = app;