const router = require('express').Router();

const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes.js');

router.use('/posts', postRoutes);
router.use('/users', userRoutes);

module.exports = router;