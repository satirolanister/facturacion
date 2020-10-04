const express = require('express');


const app = express();

const authCtrl = require('./auth/authRoute');
const productCtrl = require('./productos/productRoute');
const SaleCtrl = require('./ventas/ventasRoutes');
const categoty = require('./categorias/categoryRoute');
const supplier = require('./proveedor/proveedorRouter');


app.use(authCtrl, productCtrl, SaleCtrl, categoty, supplier);


module.exports = app;






