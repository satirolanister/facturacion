const product = {}
const {produ} = require('../../database/db')


product.getProduct= async (req, res) => {
    try {
        const products = await produ.findAll();
        res.json(products);
    } catch (err) {
        res.json(err);
    }
};

product.insertProduct = async(req, res) => {
    try {
        
        const Product = await produ.create(req.body);
        res.json(Product);
    } catch (err) {
        res.json(err);
    }
};

product.updateProductId = async(req, res)=> {
    try {
      await produ.update(req.body,{
          where: {_id: req.params.id}
      });
      res.json({message: 'Datos actualizados'});  
    } catch (err) {
        res.json(err);
    }
};

product.getProductId = async(req, res) =>{
    try {
        const Product = await produ.findOne({
            where: {
                _id: req.params.id
            }
        });
        if(Product === null || Product === ''){
            res.json({message: 'Codigo de producto no existe'});
        }else{
            res.json(Product);
        }
        
    } catch (err) {
        res.json(err);
    }
};

product.deleteId = async(req, res)=>{
    try {
        await produ.destroy({
            where:{_id: req.params.id}
        });
        res.json({message: 'producto eliminado'});
    } catch (err) {
        res.json(err)
    }
}


module.exports= product;