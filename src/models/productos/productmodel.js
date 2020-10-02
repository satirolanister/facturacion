
module.exports = (sequelize, type) => {
    return sequelize.define('productos',{
        _id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            
        },
        descripcion: type.STRING,
        cantidad: type.INTEGER,
        precio_comp: type.DOUBLE,
        precio_ven: type.DOUBLE,
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