module.exports = (sequelize, type) => {
    return sequelize.define('proveedores',{
        id_provee: {
            type: type.INTEGER,
            primaryKey: true
        },
        descripcion: type.STRING,
    });
};