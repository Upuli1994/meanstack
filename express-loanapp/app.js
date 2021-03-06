var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors = require('cors');
var app = express();

app.use(cors({
  origin:['http://localhost:4200', 'http://127.0.0.1:4200'],
  credentials:true
}));

var mongoose =require('mongoose');

mongoose.connect('mongodb+srv://nilupuli:upuli1994@cluster0.mpjut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

//passport
// 222 var passport =require('mongoose');
// 222 var sessions =require('express-sessions'); 

// 222 app.use (sessions({
  //name:'myname.sid',
  //resave:false,
 // saveUninitialized:false,
 // cookie:{
    //maxAge:36000000,
    //httpOnly:false,
    //secure:false,
  //}
//}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// 222 require('./passport/config');
// 222 app.use(passport.session());
// 222 app.use(passport.initialize()); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
  res.render('error');
});

module.exports = app;
