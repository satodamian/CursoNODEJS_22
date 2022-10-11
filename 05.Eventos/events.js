// const EventEmitter = require('events');
// console.log(EventEmitter);

const EventEmitter = require('events');
const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total, prod)=>{
    console.log(`Se hizo una compra de ${prod} productos por ${total}`);
})

emisorProductos.emit('compra', 650, 3);
