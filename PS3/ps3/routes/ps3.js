var express = require('express');
var router = express.Router();

/* GET ps3 page. */
router.get('/', function(req, res, next) {
    res.render('ps3', { title: 'Hey now' });
});

module.exports = router;



router.post('/', function(req, res, next){
   // console.log(req)
    res.render('ps3', { title: req.body.title, length: req.body.title.length});
    }

);


