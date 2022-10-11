const express = require('express');
const app = express();

const {programacion} = require('../datos/cursos').infoCursos;

const routerProgramacion = express.Router();
// ********* MIDDLEWARE ***********
// Para poder extraer informacion que recibir en formato json
routerProgramacion.use(express.json());

routerProgramacion.get('/', (req, res)=>{
    res.send(JSON.stringify(programacion))
});

routerProgramacion.get('/:lenguaje', (req, res)=>{
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter((curso)=>curso.lenguaje === lenguaje);
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

routerProgramacion.get('/:lenguaje/:nivel', (req, res)=>{
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = programacion.filter((curso)=>curso.lenguaje === lenguaje && curso.nivel === nivel);
    // Si no se encutran cursos
    if(resultados.length===0){
        // No fue encontrado: 404
        return res.status(404).send(`No se encontro cursos de ${lenguaje} de nivel ${nivel}`);
        // return res.status(404).end ---> Buena practica
    }

    // console.log(req.query.ordenar)
    return res.send(JSON.stringify(resultados))
})

//! METODO HTTP POST
    routerProgramacion.post('/', (req, res)=>{
        // Extraemos el cuerpo de la solicitud para poder incluir un curso nuevo a nuestro nuevo arreglo de cursos de programacion
        let cursoNuevo = req.body;
        // Lo agregamos al arreglo de cursos de programacion (Linea 4)
        programacion.push(cursoNuevo);
        res.end(JSON.stringify(programacion))
    });

//! METODO HTTP PUT
// Actualizar una entidad en tu informacion; termino de conjutno de propiedades que representa en una BD (objeto, cliente, productos, etc.)

routerProgramacion.put('/:id',(req, res)=>{
    const cursoActualizado = req.body;
    const id = req.params.id;

    // Nos permite encontrar el indice de un elemento en un arreglo en base a un criterio
    const indice = programacion.findIndex((curso)=>curso.id == id);
    if(indice>=0){  /* Si el indice es valido, sino me devolvera un -1 */
        programacion[indice] = cursoActualizado;
    }

    res.send(JSON.stringify(programacion));
})

//! METODO HTTP PATCH
routerProgramacion.patch('/:id',(req, res)=>{
    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex((curso)=>curso.id == id);
    if(indice>=0){
        const cursoAModificar = programacion[indice];
        // METODO DE OBJETOS: Nos permite pasar un objeto que vamos a modificar y otro objeto que tiene propiedades y valores
        Object.assign(cursoAModificar, infoActualizada);
    }

    res.send(JSON.stringify(programacion));
});

//! METODO HTTP DELETE
routerProgramacion.delete('/:id',(req, res)=>{
    const id = req.params.id;
    const indice = programacion.findIndex((curso)=>curso.id == id);

    if(indice>=0){
        const cursoAModificar = programacion[indice];
        // METODO DE OBJETOS: Nos permite pasar un objeto que vamos a modificar y otro objeto que tiene propiedades y valores
       programacion.splice(indice, 1);
    }
    res.send(JSON.stringify(programacion));
    // res.json(programacion) -> Buena forma de aplicar
})
module.exports.routerProgramacion = routerProgramacion;