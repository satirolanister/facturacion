const Sequelize = require('sequelize');


const sequelize = new Sequelize('root','Factura',12345678,{
    host: 'localhost',
    dialect: 'mysql'
});



sequelize.sync({force:false})
.then(()=>{
    console.log('Tablas sincronizadas')
}).catch((err)=>{
    console.log('Error: ',err);
});