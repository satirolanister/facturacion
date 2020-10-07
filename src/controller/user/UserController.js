const User = {};

const {user} = require('../../database/db');





User.getClient = async (req, res)=>{
    try {
        const client = await user.findOne({
            where: {
                _cel:req.params.id
            }
        });
        if(!client){
            res.json({success:false})
        }else{
            res.json(client);
        }
    } catch (error) {
        res.json(error);
    }
}

User.addClient = async (req, res) =>{
    try {
        req.body.Role =1;
        const client = await user.create(req.body);
        res.json(client);
    } catch (error) {
        res.json(error);
    }
}


module.exports = User;