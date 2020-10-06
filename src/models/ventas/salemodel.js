module.exports = (sequelize, type) => {
    return sequelize.define('ventas',{
        consecutivo: {
           type: type.INTEGER,
           autoIncrement: true,
           primaryKey: true
        },  
        des_venta: type.STRING, //detalle factura
        valor_venta: type.DOUBLE,
        fecha_venta: type.DATE, //eliminar, utilizar createdAt
        id_product:{            //detalle factura
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

/* 
   se debe crear campo codigo vendedor,
   se debe crear campo metodo de pago,

   se debe crear tabla detalle factura 
   sin primarykey refenrenciando codigo 
   de producto y consecutivo de la factura,
   a su vez se debe crear campo cantidad

   se debe ajustar precio cliente ya que se 
   le tiene que calcular el iva,

   
*/