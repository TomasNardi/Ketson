
const express = require ('express')

app = express(); 

puerto = 3000; 

app.listen (puerto, () => { 
    console.log(`Servidor escuchando en el puerto ==> ${puerto}`)
})

// Importacion de js 

const { infoCursos } = require("./cursos.js") ;

// ruteo y controladores

app.get('/',(req,res) => {
    res.send("Mi primer servidor")
});

// ruta 1

const rutaNumero1 = express.Router();

app.use('/curso', rutaNumero1)

// ruta 2

var router = require('./nosotros.js') // JS de nosotros

app.use('/nosotros', router)

// Filtrado de informacion

rutaNumero1.get('/:lenguaje',(req , res) => {
    const lenguaje = req.params.lenguaje;
    const resultado = infoCursos.programacion.filter (curso => curso.lenguaje === lenguaje);

    if (resultado.length === 0) {
        return res.status(404).send ( `No se detecto ningun curso con el nombre ${lenguaje}`)
    };

    res.send((resultado));

})

