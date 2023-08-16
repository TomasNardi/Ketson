const express = require ('express')

var router = express.Router(); 

router.get('/',function (req , res, next) {
    res.send ("Seccion de nosotros");
})

module.exports = router