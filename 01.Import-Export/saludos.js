//! UN MODULO ES UN ARCHIVO DE JAVASCRIPT

function saludar(nombre){
    return `Hola ${nombre}`;
}

function saludarHolaMundo(){
    return 'Hola Mundo';
}

// console.log(saludarHolaMundo);
// Module.Exports es un objeto
// Son independeintes (nombres de la definicion / nombre de la funcion)

//** 1. Primera Forma de exportacion */
// module.exports.saludar = saludar; 
// module.exports.saludarHolaMundo = saludarHolaMundo;

// ** 2. Segunda Forma de exportacion */
module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo,
};


