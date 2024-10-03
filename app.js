var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
require('dotenv').config()

const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/interviewDB')

mongoose.connect(`${process.env.DB_URL}interviewDB`)
  .then(() => console.log('Connected!'))
  .catch((err) => console.log(err.message))


var usersRouter = require('./routes/catagory');
var adminRouter = require('./routes/admin');
var catagoryRouter = require('./routes/catagory')
var subcatagoryRouter = require('./routes/subcatagory')
var questionsRouter = require('./routes/questions')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors())


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get("/",function (req,res) {
    res.render("index",{title : "Express API Running"})
})
app.use('/users', usersRouter);
app.use('/admin', adminRouter)
app.use('/catagory', catagoryRouter)
app.use('/subcatagory', subcatagoryRouter)
app.use('/questions', questionsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
