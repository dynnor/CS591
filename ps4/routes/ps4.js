var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    res.render('ps4.pug', { });
    //res.render('ps4.pug', {  });
});

//router.post('/', )
module.exports = router;