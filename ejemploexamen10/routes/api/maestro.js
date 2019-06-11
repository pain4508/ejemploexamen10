var express = require(express);
var router = express.Router();


var maestroCollection = [];
var maestroStruct = {

    id=0,
    nombre : '',
    direccion: '',
    telefono : '',
    correo : '',
    nota : ''
}



router.get('/', (req, res, next)=>{
    req.status(403).json({msg:"not implemented"});
});//Get

router.get('/:id', (req, res, next)=>{
    req.status(403).json({msg:"not implemented"});
});//Get by id

router.post('/', (req, res, next)=>{
    req.status(403).json({msg:"not implemented"});
});//post

router.put('/:id', (req, res, next)=>{
    req.status(403).json({msg:"not implemented"});
});//put

router.delete('/:id', (req, res, next)=>{
    req.status(403).json({msg:"not implemented"});
});//delete
module.exports = router;