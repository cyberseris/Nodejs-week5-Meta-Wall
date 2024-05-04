var express = require('express');
var router = express.Router();
const handleErrorAsync = require('../service/handleErrorAsync');
const postsController = require('../controllers/postsController');

/* router.get('/', handleErrorAsync(postsController.getPostController));
router.post('/', handleErrorAsync(postsController.createPostController)); */

router.get('/', handleErrorAsync(postsController.getPostController));
router.post('/', handleErrorAsync(postsController.createPostController));

module.exports = router;
