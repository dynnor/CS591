var express = require('express');
var router = express.Router();

let config= require('../config/tsconfig');

const request = require("request");

const getKanyequotes = new Promise(function (resolve, reject) {

    const options = {
        method: 'GET',
        url: config.url ,
        };

    request(options,(error, response, body) => {
        if (error)

            reject (new Error(error));
        else {
            console.log (JSON.parse(body).quote);
            resolve(JSON.parse(body).quote)

        }

    })

})


/* GET home page. */
router.get('/', function(req, res, next) {
    getKanyequotes.then(val => {
        res.render('ps6', { title: val });
    })


});

module.exports = router;
