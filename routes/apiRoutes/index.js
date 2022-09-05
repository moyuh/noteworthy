//name route variables
const router = require('express').Router();
const noteRoute = require('./noteRoute');

//middleware
router.use(noteRoute);

module.exports = router;