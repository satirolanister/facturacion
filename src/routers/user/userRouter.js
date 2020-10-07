const {Router} = require('express');

const router = Router();

const {getClient, addClient} = require('../../controller/user/UserController');


router.get('/user/:id', getClient);

router.post('/user', addClient);

module.exports = router;