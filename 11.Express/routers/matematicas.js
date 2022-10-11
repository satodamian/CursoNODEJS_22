const express = require('express');
const app = express();

const {matematicas} = require('../datos/cursos').infoCursos;
// const {matematicas} = infoCursos

const routerMatematicas = express.Router();
routerMatematicas.get('/', (req, res)=>{
    res.send(JSON.stringify(matematicas))
});

// ! Parametros de ruta: Matermaticas
routerMatematicas.get('/:tema', (req, res)=>{
    const tema = req.params.tema;
    const resultados = matematicas.filter((curso)=>curso.tema === tema);
    if(resultados.length ===0){
        return res.status(404).send(`No hay cursos de ${resultados}`);
    }

    return res.send(JSON.stringify(resultados));
})

module.exports.routerMatematicas = routerMatematicas;
