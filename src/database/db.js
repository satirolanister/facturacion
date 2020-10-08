const Sequelize = require('sequelize');
const {dbuser,dbpass,url,db} = require('../../config/config')

const cateModel = require('../models/categorias/categorymodel');
const proveeModel = require('../models/proveedores/proveedoresModel');
const productModel = require('../models/productos/productmodel');
const rolesModel = require('../models/roles/rolesModel');
const userModel = require('../models/user/usermodel');
const saleModel = require('../models/ventas/salemodel');
const loginModel = require('../models/user/authmodel');
const detallefactura = require('../models/detalle-venta/detalle-venta')


const sequelize = new Sequelize(db,dbuser,dbpass,{
    host: url,
    dialect: 'mysql',
    pool:{
        max:3,
        min:0,
        require:30000,
        idle:10000
    },
    logging: false
});

const cate = cateModel(sequelize, Sequelize);
const prove = proveeModel(sequelize, Sequelize);
const produ = productModel(sequelize, Sequelize);
const rol = rolesModel(sequelize, Sequelize);
const user = userModel(sequelize, Sequelize);
const sale = saleModel(sequelize, Sequelize); 
const login = loginModel(sequelize, Sequelize);
const detalle = detallefactura(sequelize, Sequelize);



sequelize.sync({force:false})
.then(()=>{
    console.log('Tablas sincronizadas')
}).catch((err)=>{
    console.log('Error: ',err);
});

module.exports = {
    cate,
    prove,
    produ,
    rol,
    user,
    sale,
    login,
    detalle 
}