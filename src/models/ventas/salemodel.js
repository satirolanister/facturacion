module.exports = (sequelize, type) => {
    return sequelize.define('facturas',{
        Numfactura:{
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_client:{
            type: type.INTEGER,
            references: {
               model:'usuarios',
               key: '_cel'    
            }
        },
    }); 
};