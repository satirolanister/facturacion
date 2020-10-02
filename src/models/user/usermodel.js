module.exports = (sequelize, type) => {
    return sequelize.define('usuarios',{
        _cel: {
            type: type.INTEGER,
            primaryKey: true
        },
        nombre: type.STRING,
        apellido: type.STRING,
        f_nacimiento: type.DATE,
        Role:{
           type: type.INTEGER,
           references: {
               model:'roles',
               key: 'Id_Role'    
           }
        }
            
    });
};