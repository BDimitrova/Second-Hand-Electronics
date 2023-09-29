const router = require('express').Router();

const homeController = require('./controller/homeController');
const authController = require('./controller/authController');
const electronicsController = require('./controller/electronicsController');

router.use(homeController);
router.use('/auth', authController);
router.use('/electronics', electronicsController);

module.exports = router;