
module.exports = (sequelize, type) => {
    return sequelize.define('productos',{
        _id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            
        },
        descripcion: type.STRING,
        existencia: type.INTEGER,
        precio_u: type.DOUBLE,
        id_prov:{
            type: type.INTEGER,
            references:{
                model:'proveedores',
                key:'id_provee'
            }
        },
        categoria:{
            type: type.INTEGER,
            references:{
                model:'categorias',
                key: 'id_cat'
            }
        }
            
    });
};
 