const ventas = {};
const { sale } = require('../../database/db'); 


ventas.getVentasId= async (req, res)=>{
    try {
        const factura = await sale.findAll();
        res.json(factura);
    } catch (error) {   
        console.log(error);
    }
};

ventas.addfactura= async(req, res) => {
    try {
        if(req.body === '' || req.body === 'undefined'){
            res.json({message: 'sin Datos'});
        }else{
            const factura = await sale.create(req.body);
            res.json(factura);
        }
    } catch (error) {
        res.json(error);
    }
};



module.exports=ventas;