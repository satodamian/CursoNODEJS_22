//! Definicion de funciones asincronas
function ordenarProducto(producto){
    return new Promise((resolve, reject)=>{
        console.log(`Ordenando: ${producto} de Sato`)

        setTimeout(()=>{
            if(producto === 'taza'){
                resolve(`Ordenando una taza de Sato`)
            } else{
                reject(`${producto} sin stock`)
            }
        },2000);
    });
}

function procesarPedido(resp){
    return new Promise((resolve)=>{
        console.log('Procesando respuesta ...')
        console.log(`La respuesta fue "${resp}"`)

        setTimeout(()=>{
            resolve('Gracias por su compra, disfrute su producto')
        },4000);
    });
}
async function realizarPedido(prod){

    try {
        const resp = await ordenarProducto(prod)
        console.log('Respuesta recibida');

        const respProcesada = await procesarPedido(resp);
        console.log(respProcesada);
    } catch (error) {
        console.log(error)
    }
    
}

realizarPedido('taza')