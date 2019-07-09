var express = require('express');
var router = express.Router();
// Esto es nuevo para generar un identificador unico
var uuid = require('uuid/v4');

var maestroCollection = [];
var maestroStruct = {

    id:'',
    nombre:'',
    direccion:'',
    telefono :'',
    correo:'',
    nota:''
}

maestroCollection.push(
    Object.assign( 
        {},
        maestroStruct,
        {
            id:uuid(),
            nombre:'juan perez',
            direccion:'barrrio el centro choluteca',
            telefono:'jajajaja',
            correo:'jlopez@gmail.com',
            nota:'ejemplo de ejercicio para examen'
        }
    )
);

router.get('/', (req, res, next)=>{
    //Obtiene la coleccion de maestros
    res.status(200).json(maestroCollection);
});//Get

router.get('/:id', (req, res, next)=>{
    res.status(403).json({msg:"not implemented"});
});//Get by id

router.post('/', (req, res, next)=>{
    res.status(403).json({msg:"not implemented"});
});//post

router.put('/:id', (req, res, next)=>{
    res.status(403).json({msg:"not implemented"});
});//put

router.delete('/:id', (req, res, next)=>{
    res.status(403).json({msg:"not implemented"});
});//delete

module.exports = router;