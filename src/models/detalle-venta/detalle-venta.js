module.exports = (sequelize, type) => {
    return sequelize.define('detalle_factura',{
        id_detalle:{
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
            
        },
        id_factura:{
            type: type.INTEGER,
            references: {
               model:'facturas',
               key: 'Numfactura'    
            }
        },
        id_producto:{
            type: type.INTEGER,
            references: {
               model:'productos',
               key: '_id'    
            }
        },
        cantidad: type.INTEGER,
        valor: type.DOUBLE
    });
}; 