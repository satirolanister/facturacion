const app = require('./app')
const config = require('../config/config')






app.listen(config.PORT, () =>{
    console.log('Server on port ', config.PORT);
});

module.exports = app