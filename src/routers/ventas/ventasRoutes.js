const {Router} = require('express');

const router = Router();

const {getVentas} = require('../../controller/ventas/ventasController');


router.get('/sale', getVentas);


module.exports = router;