const {Router} = require('express');

const router = Router();

const {getProveedores, insertProveedor} = require('../../controller/proveedores/proveeCtrl');

router.get('/proveedores', getProveedores);
router.post('/proveedores', insertProveedor);


module.exports = router;