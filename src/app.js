const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');

require('./database/db');

const router = require('./routers/indexRoute');

//instancia
const app = express();



//middlewares
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(morgan('dev'));
app.use(cors());

//routes
app.use('/api',router);

//static file
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;