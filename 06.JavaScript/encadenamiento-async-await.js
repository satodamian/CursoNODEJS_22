// ASYNC-AWAIT

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

//! Definicion de respuesta
function procesarPedido(resp){
    return new Promise((resolve)=>{
        console.log('Procesando respuesta ...')
        console.log(`La respuesta fue "${resp}"`)

        setTimeout(()=>{
            resolve('Gracias por su compra, disfrute su producto')
        },4000);
    });
}

//? LLamando a la funcion
ordenarProducto('taza')
            .then((resp)=>{
                console.log(resp);
                return procesarPedido(resp);
            })
            .then((respProcesada)=>console.log(respProcesada))
            .catch((err)=>console.log(err))