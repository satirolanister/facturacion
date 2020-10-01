const express = require('express');


const app = express();

const authCtrl = require('./auth/authRoute');
const productCtrl = require('./productos/productRoute');
const SaleCtrl = require('./ventas/ventasRoutes');


app.use(authCtrl, productCtrl, SaleCtrl);


module.exports = app;






