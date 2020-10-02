const {Router} = require('express');

const router = Router();

const {getProduct, getProductId} = require('../../controller/productos/productController');


router.get('/product', getProduct);

router.get('/product/id:', getProductId);




module.exports = router;