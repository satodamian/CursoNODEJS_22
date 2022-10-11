//todo: ****** PRIMER SERVIDOR BASICO **********

const express = require('express');
const app = express();

const {infoCursos} = require('./cursos');

// Routes en Express
// ! Routing

// ! Crear rutas
app.get('/',(req, res)=>{
    res.send('Mi primer servidor con express+nodemon :D')
});

// ! Agregar rutas
app.get('/api/cursos', (req, res)=>{
    res.send(JSON.stringify(infoCursos))
});

app.get('/api/cursos/programacion', (req, res)=>{
    res.send(JSON.stringify(infoCursos.programacion))
});

app.get('/api/cursos/matematicas', (req, res)=>{
    res.send(JSON.stringify(infoCursos.matematicas))
});

// ! Parametros de ruta: Programacion
app.get('/api/cursos/programacion/:lenguaje', (req, res)=>{
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter((curso)=>curso.lenguaje === lenguaje);
    // Si no se encutran cursos
    if(resultados.length===0){
        // No fue encontrado: 404
        return res.status(404).send(`No se encontro cursos de ${lenguaje}`);
    }
    // http://localhost:3000/api/cursos/programacion/PY?ordenar (Estoy mandando este URL siendo mi temrino query el valor de ordenar)
    // http://localhost:3000/api/cursos/programacion/PY?ordenar=vistas (Valor del parametro query ordenar es vistas)
    // Dandome como resultado de esa busqueda en el terminal el resultado: VISTAS
    // console.log(req.query.ordenar)

    if(req.query.ordenar === 'vistas'){
        // Orden descendente
        res.send(JSON.stringify(resultados.sort((a,b)=> b.vistas - a.vistas)))
        // Orden ascendente
        // res.send(JSON.stringify(resultados.sort((a,b)=> b.vistas - a.vistas)))
    }else{
         return res.send(JSON.stringify(resultados))
    }

   
})

// ! Parametros de ruta: Matermaticas
app.get('/api/cursos/matematicas/:tema', (req, res)=>{
    const tema = req.params.tema;
    const resultados = infoCursos.matematicas.filter((curso)=>curso.tema === tema);
    if(resultados.length ===0){
        return res.status(404).send(`No hay cursos de ${resultados}`);
    }

    return res.send(JSON.stringify(resultados));
})

// ? ---------------------------------------------------------------

// ************************* PARAMETROS QUERY **************************


app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res)=>{
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = infoCursos.programacion.filter((curso)=>curso.lenguaje === lenguaje && curso.nivel === nivel);
    // Si no se encutran cursos
    if(resultados.length===0){
        // No fue encontrado: 404
        return res.status(404).send(`No se encontro cursos de ${lenguaje} de nivel ${nivel}`);
    }

    // console.log(req.query.ordenar)
    return res.send(JSON.stringify(resultados))
})

// PARAMETRO QUERY: parametros que nosotros incluimos en la URL al final separados con un ? y un par clave valor



// ************************************************************************************************
// No es recomendable asignar un puerto exacto, sino dinamico
const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, ()=>{
    console.log(`El servidor corre en el puerto ${PUERTO}...`)
});