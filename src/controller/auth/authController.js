const auth = {};



auth.login = (req, res)=>{
    res.send('login');
};

auth.register = (req, res) => {
    res.send('Registro');
}


module.exports = auth;