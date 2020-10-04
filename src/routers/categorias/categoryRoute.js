const {Router} = require('express');

const router = Router();

const {getCategorias} = require('../../controller/categorias/categoriasctrl');

router.get('/categorias', getCategorias);


module.exports = router;