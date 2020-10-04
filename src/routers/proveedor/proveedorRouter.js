const {Router} = require('express');

const router = Router();

const {getProveedores} = require('../../controller/proveedores/proveeCtrl');

router.get('/proveedores', getProveedores);


module.exports = router;