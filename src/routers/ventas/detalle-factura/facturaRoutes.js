const {Router} = require('express');

const router = Router();

const { addfacturaDetalle } = require('../../../controller/ventas/facturas/detalle_v_ctrl');


router.post('/detalle', addfacturaDetalle);

module.exports = router