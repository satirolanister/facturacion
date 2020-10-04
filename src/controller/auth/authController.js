const auth = {};
const {login} = require('../../database/db');


auth.login = async (req, res)=>{
   try {
        const username = await login.findOne({
            where: {
                name : req.body.name,
                password : req.body.password
            }
        });
        if(username){
            res.json({success:true});
        }else {
            res.json({message: 'Error en las credenciales'});
        }
   } catch (err) {
       res.json(err);
   }
   
};

auth.register = (req, res) => {
    res.send('registro');
}


module.exports = auth;