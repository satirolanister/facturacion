const proveedor = {};
const {prove} = require('../../database/db');

proveedor.getProveedores= async(req, res)=>{
    try {
        const proveedor = await prove.findAll();
        res.json(proveedor);
    } catch (err) {
        res.json(err);
    }
}

proveedor.insertProveedor = async (req, res) => {
    try {
        const proveedor = await prove.create(req.body);
        res.json({
            message: 'Proveedor creado',
            data: proveedor
        });
    } catch (err) {
        res.json(err);
    }
}

module.exports=proveedor;