const factura = {}

const {detalle} = require('../../../database/db');



factura.addfacturaDetalle = async (req , res ) => {
    
    await detalle.bulkCreate(req.body)
    .then(async ()=>{
        return await detalle.findAll()
    }).then((data)=>{
        console.log('Detalles insertados');
        res.json(data);
    }).catch(err => {
        console.log(err);
    })
};


module.exports = factura;