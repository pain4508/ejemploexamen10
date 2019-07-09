var express = require('express');
var router = express.Router();

var maestroRoutes = require('./maestro');
router.use('/maestro', maestroRoutes);

module.exports = router;