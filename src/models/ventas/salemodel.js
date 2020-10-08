module.exports = (sequelize, type) => {
    return sequelize.define('facturas',{
        Numfactura:{
            type: type.INTEGER,
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