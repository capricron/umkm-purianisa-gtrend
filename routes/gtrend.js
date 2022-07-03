var express = require('express');
var router = express.Router();

const gtrend = require('../controllers/gtrendsController');

/* GET users listing. */
router.get('/', gtrend.getGtrends);

module.exports = router;
