/* funciones de practica 
function saludar (nombre){
    return `hola ${nombre}`
}

function saludarHolaMundo () { 
return "hola mundo"
}

funciones de practica 
*/ 
/* Metodo para exportar modulo. 
module.exports ={
    saludar: saludar ,
    saludarHolaMundo: saludarHolaMundo, 
}

Importante!, si no le pones console.log, en la terminal solo se ejecuta el codigo pero no ves que funcion actua. 
console.log(module.exports);
*/ 


let infoCursos = { 
    programacion : [
        {
        id : '1'    ,
        lenguaje : 'HTML',
        vistas: 1000, 
    },
    {      
        id : '2',
        lenguaje : 'CSS',
        vistas: 1200, 
        
    },
    {      
        id : '3',
        lenguaje : 'java',
        vistas: 1400, 
        
    }
]}

module.exports.infoCursos = infoCursos;