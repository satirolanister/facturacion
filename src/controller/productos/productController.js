const product = {}



product.getProduct= (req, res) => {
    res.send('Todos los productos');
}

product.getProductId = (req, res) =>{
    let id = req.params.id
    console.log(id);
    res.send('Producto por id');
}



module.exports= product;