// Por convencion
// Estamos requiriendo un modulo, se usa el termino de incluir
// ! import y require son para modulos diferentes
const {saludar, saludarHolaMundo} = require('./saludos');
// Cuando llamamos dicho valor nos asigna un objeto de exportacion de dicho modulo
const saludarSanti = saludar('Santi :)')
const saludarMundo = saludarHolaMundo()
console.log(saludarSanti, saludarMundo);
