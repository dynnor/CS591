var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var ps4Router = require('./routes/ps4');
//var usersRouter = require('./routes/users');
var searchRouter = require('./routes/search');
//var aboutRouter = require('./routes/about');
//var loginRouter = require('./routes/login');
//var loggedonRouter = require('./routes/loggedon');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/ps4', ps4Router);
//app.use('/users', usersRouter);
app.use('/search', searchRouter);
//app.use('/about', aboutRouter);
//app.use('/login', loginRouter);
//app.use('/loggedon', loggedonRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error.pug');
});


module.exports = app;
