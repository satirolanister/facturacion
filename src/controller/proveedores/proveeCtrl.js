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

module.exports=proveedor;