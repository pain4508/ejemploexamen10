const express = require('express');
var router = express.Router();

//JSON -> javascript Objet Notation

// json.org

var thingsCollection = [];

var thingsStruct = {

        "id" : 0,
        "descripcion" : '',
        "fecha" : '',
        "by" : ''
};

thingsCollection.push(
    Object.assign(thingsStruct,
         {"id": "1",
          "descripcion":"Mi primer things",
          "fecha": new Date().getTime(), 
          "by": "Cristian Prado" 
        })
);

router.get('/', (req, res, next)=>{
    res.status(200).json(thingsCollection);
}); //get 

//CRUD Crear, leer(read), Actualizar(Update), Eliminar(Delete)
//REST
//GET Consultas Read, Lectura
//POST Crear - Insert C
//PUT Update - Modificar
//DELETE Delete - Eliminar

router.post('/', (req, res, next)=>{
    var newElement = Object.assign(thingsStruct,
        req.body, {"fecha":new Date().getTime(), 
                    "id":new Date().getTime()});
    thingsCollection.push(newElement);
    res.status(200).json({newElement});
}); //post

router.put('/', (req, res, next)=>{
    res.status(200).json({"msg":"Entro en el put"});
});// put

router.delete('/', (req, res, next)=>{
    res.status(200).json({"msg":"Entro en el delete"});
}); // delete
module.exports = router;