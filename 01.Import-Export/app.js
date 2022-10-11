// Por convencion
// Estamos requiriendo un modulo, se usa el termino de incluir
// ! import y require son para modulos diferentes
// const saludos = require('./saludos');
// Cuando llamamos dicho valor nos asigna un objeto de exportacion de dicho modulo

const SaludarNombre = saludos.saludar('Santi');
const SaludarHolaMundo = saludos.saludarHolaMundo();

console.log(SaludarHolaMundo);
console.log(SaludarNombre);

// console.log(saludo);
