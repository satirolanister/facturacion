const product = {}



product.getProduct= (req, res) => {
    res.send('Todos los productos');
}

product.getProductId = (req, res) =>{
    res.send('Producto por id');
}



module.exports= product;