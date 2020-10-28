const {Router} = require('express');

const router = Router();

const {getCategorias, addCategoria} = require('../../controller/categorias/categoriasctrl');

router.get('/categorias', getCategorias);
router.post('/categorias', addCategoria);


module.exports = router;