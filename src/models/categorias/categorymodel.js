module.exports = (sequelize, type) => {
    return sequelize.define('categorias',{
        id_cat: {
            type: type.INTEGER,
            primaryKey: true
        },
        descrip: type.STRING,
    });
};