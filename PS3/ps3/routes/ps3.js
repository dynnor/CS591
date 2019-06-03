var express = require('express');
var router = express.Router();

/* GET ps3 page. */
router.get('/', function(req, res, next) {
    res.render('ps3', { string: 'Hey now' });
});

module.exports = router;
