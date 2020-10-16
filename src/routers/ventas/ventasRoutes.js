const {Router} = require('express');

const router = Router();

const {getVentasId, addfactura} = require('../../controller/ventas/ventasController');


router.get('/sale', getVentasId);

router.post('/sale', addfactura);

module.exports = router;