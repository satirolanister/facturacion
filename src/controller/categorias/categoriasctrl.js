const categorias = {};
const {cate} = require('../../database/db');


categorias.getCategorias=async(req, res)=> {
    try {
        const categoria = await cate.findAll();
        res.json(categoria);
    } catch (err) {
        res.json(err);
    }
}

categorias.addCategoria= async(req, res) => {
    try {
        const categoria = await cate.create(req.body);
        res.json({
            message: 'Categoria creada',
            info: categoria
        });

    } catch (err) {
        res.json(err)
    }
}


module.exports = categorias;