var express = require('express');
var router = express.Router();
const handleErrorAsync = require('../service/handleErrorAsync');
const usersController = require('../controllers/usersController');

router.get('/', handleErrorAsync(usersController.getUserController));
router.post('/', handleErrorAsync(usersController.createUserController));

module.exports = router;
