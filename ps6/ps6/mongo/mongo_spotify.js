// tried setttig up a db for spotify - but
/*
I have a more correct verison (or what I'm hoping to be more correct)
in the mongops8 file
and then the corresponding file in the routes folder is ps6
 */


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connection succeeded.");
});

var Schema = mongoose.Schema;
