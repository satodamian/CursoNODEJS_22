// ************************
// console.log(process);
// Enviroment: Ambiente de ejecucion del programa
// console.log(process.env);

// **************************
// console.log(process.argv[2]);
// Me muestra un arreglo [node, app.js, 6, 7]
// Arguments
// Process: Nos permite acceder a los argumento que se pasan en el terminal
// Nos permite saber cuanta memoria estamos usando ahora

// for (let i = 2; i < process.argv.length; i++) {
//     console.log(process.argv[i]);
    
// }


console.log(process.memoryUsage());