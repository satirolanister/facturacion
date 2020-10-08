const {Router} = require('express');

const router = Router();

const {getVentasId} = require('../../controller/ventas/ventasController');


router.get('/sale', getVentasId);


module.exports = router;