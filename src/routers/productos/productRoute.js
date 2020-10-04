const {Router} = require('express');

const router = Router();

const {getProduct, getProductId, insertProduct, updateProductId, deleteId} = require('../../controller/productos/productController');


router.get('/product', getProduct);

router.get('/product/:id', getProductId);

router.put('/product/:id', updateProductId);

router.post('/product', insertProduct);

router.delete('/product/:id', deleteId);



module.exports = router;