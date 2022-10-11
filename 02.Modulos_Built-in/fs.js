// FS: File System (Poder trabajar con el sistema de archivos)
// Operaciones: LEER, MODIFICAR, CREAR, ELIMINAR, CAMBIAR NOMBRE
// Todos los metodos de este modulo son asincrono por defecto

//! Leer Contenido de un archivo
// const fs = require('fs');
// fs.readFile('indexd.html', 'utf-8', (err, data)=>{
//     if(err){
//        throw err;
//     }
//     console.log(data)
// });

//! Cambiar nombre de un archivo
// const fs = require('fs');
//     fs.rename('index.html', 'main.html', (err)=>{
//         if(err){
//             throw err
//         }
//         console.log('Nombre cambiado :)')
//     })

// ! Agregar contenido al final de tu archivo
// const fs = require('fs');
// fs.appendFile('index.html', '<p>Hola</p>', (err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('Archivo actualizado');
// })

// ! Reemplazar todo el contenido del archivo
// const fs = require('fs');
// fs.writeFile('index.html', 'Contenido Nuevo', (err) =>{
//     if(err){
//         throw err;
//     }
//     console.log('Archivo Actualizado :)')
// })

// ! Eliminar archivos
const fs = require('fs');
fs.unlink('main.html', (err)=>{
    if(err){
        throw err
    }
    console.log('Archivo eliminado')
})