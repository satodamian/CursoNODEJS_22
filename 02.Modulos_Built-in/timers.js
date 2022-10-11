//? Operaciones Asincronas
// Timer - Temporizador
// Contienen funciones que se ejecuten codigo luego de un cierto periodo de tiempo.

// ! Funciones: 
//** */ a) setTimeout() => Para ejecutar codigo luego de un numero especifico de ms: 1s = 1000ms

// function mostrarTema(tema){
//     console.log(`Estoy aprendiendo ${tema}`);
// }

// setTimeout(mostrarTema, 1000, 'NodeJS');
// setTimeout(() => {
//     mostrarTema('NodeJS')
// }, 1000);

// */ b) setImmediate() => Se usa para ejecutar codigo asincrono en la proxima iteracion del ciclo de eventos
                            // * Se ejecuta despues del codigo sincrono

// console.log('Antes del SetInmediante')
// function mostrarTema(tema){
//     console.log(`Estoy aprendiendo ${tema}`);
// }

// setImmediate(()=>{
//     mostrarTema('Node.JS')
// });

// console.log('Despues del setInmediate')

// */ c) setInterval() => PAra ejecutar codigo un numero infinito de veces con un retraso especifico de ms

    function mostrarTema(tema){
        console.log(`Estoy aprendiendo ${tema}`);
    }

    setInterval(() => {
        mostrarTema('NodeJS')
    }, 1500);