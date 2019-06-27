//I found this code from stack overflow



/*
THe correspondind file that works with this mongo db is going to be
ps6.js
I left a few more comments there

 */
//This code is from https://stackoverflow.com/questions/24621940/how-to-properly-reuse-connection-to-mongodb-across-nodejs-application-and-module
const mongoClient = require('mongodb').MongoClient;
const config = require("../tsconfig.json");
const mongoURL = config.db.host;

let _db;

module.exports = {

    connect: function( callback ) {
        mongoClient.connect( mongoURL,  { useNewUrlParser: true }, function( err, client ) {
            _db  = client.db(config.db.db);
            return callback( err );
        } );
    },
    getDB: () => { return _db; }


};
