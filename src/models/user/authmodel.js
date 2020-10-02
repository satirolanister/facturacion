module.exports = (sequelize, type) => {
    return sequelize.define('authusers',{
        id_user: {
            type: type.INTEGER,
            primaryKey: true
        },
        name: type.STRING,
        password: type.STRING,
        id_usuario:{
           type: type.INTEGER,
           references: {
               model:'usuarios',
               key: '_cel'    
           }
        }
            
    });
};