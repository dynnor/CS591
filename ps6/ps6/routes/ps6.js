//Hi!
//I think tbis is them more correct file
//I tried doing spotify at first but foumd this API easier to work
//with


var express = require('express');

var router = express.Router();
let config= require('../config/tsconfig');
const request = require("request");
var db= require('../mongo/mongops8');


//making the db connection
db.connect((err, client) => {
    if (err) {
        console.log(`ERR: ${err}`);
    } else {
        console.log(`Connected`);
    }
});

let recieveDB = false;

router.get('/', function (req, res, next)  {

    let mongo = db.getDB();
    mongo.collection('quotes').findOne({quote: req.params.quote}, (err, docs) => {
        if (err) {
            return next(err);
        } else {
            if (result == null){
                let resolver = new Promise((resolve, reject) => {
                    request(url, (error, response, body) => {
                        if (error) reject(new Error(error));
                        else resolve(JSON.parse(body));
                    });
                });

                resolver.then(val => {
                    return new Promise((resolve, reject)=> {
                        request(
                            config.url2 + config.url3,

                            (error, response, body) => {
                                if (error) reject(new Error(error));
                                else resolve(JSON.parse(body));
                            }
                        );
                    });
                })
                    .then(val => {
                        recieveDB = false;
                        value= val;
                        mongo.collection('quotes').insertOne({ quote: req.headers.data, obj:val.results });
                        res.send({ quote: val.results, recieveDB: recieveDB});
                    });
            } else{
                recieveDB = true;
                console.log(`Output: ${result.obj}`);
                res.send({
                    quote: result.obj,
                    recieveDB: recieveDB
                })
            }
        }

    })

})
//now we actually have the db and it will store things Kanye
//West has said
router.get('/ps6', function (req, res, next)  {

    let mongo = db.getDB();
    mongo.collection('Kanye_WestDB').find().
    toArray(function(err, docs) {
        console.log(docs)
        res.send(docs);
    })
});



module.exports = router;
