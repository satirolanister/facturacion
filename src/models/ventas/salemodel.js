module.exports = (sequelize, type) => {
    return sequelize.define('ventas',{
        consecutivo: {
           type: type.INTEGER,
           autoIncrement: true,
           primaryKey: true
        },  
        des_venta: type.STRING,
        valor_venta: type.DOUBLE,
        fecha_venta: type.DATE,
        id_product:{
            type: type.INTEGER,
            references:{
                model:'productos',
                key:'_id'
            }
        },
        id_cliente: {
            type: type.INTEGER,
            references:{
                model:'usuarios',
                key:'_cel'
            }
        }
    });
};