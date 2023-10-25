var express = require('express');
var router = express.Router();
var usuriosModels = require ('../../models/usuariosModel')

    router.get('/', function(req, res, next) {
      res.render('admin/login', { 
         layout: 'admin/layout'
      });
    });

    //para destruir las sessiones 
    router.get('/logout', function(req, res, next) {
       req.session.destroy(); //destruir la sesion 
        res.render('admin/login', { 
           layout: 'admin/layout'
        });
      });
  
     router.post('/',async (req, res , next) => {
        try {

            var users = req.body.users;
            var password = req.body.password;

            console.log(req.body);

            var data = await usuriosModels.getUsersByUsernameAndPassword
            (users,password);

            if (data != undefined) {
                req.session.id_usuario = data.id;
                req.session.users = data.users;

                res.redirect('/admin/novedades');
            } else {
                res.render ('admin/login', {
                    layout: 'admin/layout',
                    error: true
                })  
            } // cierra el else 
        } catch (error) {
            console.log(error)
        }
     })

module.exports = router;
