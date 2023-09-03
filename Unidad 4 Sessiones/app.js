var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require ('express-session');

require('dotenv').config();

// Importacion de rutas

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var configuracion = require('./routes/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// // Controladores de session

app.use(session( { 
  secret: 'inserte la clave aqui',
  resave : false,
  saveUninitialized: true
}));

app.get('/login',function (req,res) {
  var conocido  = Boolean (req.session.nombre);
  
  res.render ('sesion', {
    title: 'sesiones en Express.js',
    conocido: conocido,
    nombre: req.session.nombre
  })
    });

app.post ('/ingresar' , function (req,res) {
  if (req.body.nombre) {
    req.session.nombre = req.body.nombre
  }
  res.redirect('/login')
})

app.get('/salir', function (req,res) {
  req.session.destroy();
  res.redirect('/')
})

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/interfazUsuario',configuracion)

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
