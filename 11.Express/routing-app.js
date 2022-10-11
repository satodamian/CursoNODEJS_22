//todo: ****** PRIMER SERVIDOR BASICO **********

const express = require('express');
const app = express();

const { infoCursos } = require('./datos/cursos');

// ** --> Routers
const { routerMatematicas } = require('./routers/matematicas');
app.use('/api/cursos/matematicas', routerMatematicas)

const { routerProgramacion } = require('./routers/programacion');
app.use('/api/cursos/programacion', routerProgramacion);

//* ---> Routing
// ! Crear rutas
app.get('/',(req, res)=>{
    res.send('Servidor Express + Routing desde Routing-app')
});

// ! Agregar rutas
app.get('/api/cursos', (req, res)=>{
    res.send(JSON.stringify(infoCursos))
});


// ? ---------------------------------------------------------------

// ************************* PARAMETROS QUERY **************************


// PARAMETRO QUERY: parametros que nosotros incluimos en la URL al final separados con un ? y un par clave valor



// ************************************************************************************************
// No es recomendable asignar un puerto exacto, sino dinamico
const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, ()=>{
    console.log(`El servidor corre en el puerto ${PUERTO}...`)
});