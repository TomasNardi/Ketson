var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post ('/',async (req , res , next) => {

console.log(req.body) // prueba de captura de datos.

  var nombre = req.body.nombre;
  var email = req.body.email;
  var asunto = req.body.asunto;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'tomas.nardi@outlook.com',
    subject: 'Contacto Web Motos',
    html: nombre + "Se contacto a través de la web Nardi Motos y quiere más informacion a este correo : " + email + "El asunto es : " + asunto + "<br> Además, hizo el comentario : " + mensaje
  }

  var tranport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  var info = await tranport.sendMail(obj);

  res.render('index',{
    message : 'Mensaje enviado exitosamente'
  }); 
});


module.exports = router;
