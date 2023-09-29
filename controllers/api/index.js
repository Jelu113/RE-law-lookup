const router = require('express').Router();
const userRoutes = require('./userRoutes');
const keywordRoutes = require('./keywordRoutes');

router.use('/users', userRoutes);
router.use('/keywords', keywordRoutes);

module.exports = router;