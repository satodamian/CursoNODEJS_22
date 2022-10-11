// Es un objeto de JavaScript asociada a los callback
// ! CALLBACK: Funcion que se pasa a otra funcion como arguemnto y luego se ejecuta dentro de la funcion externa
// Objeto que representa un eventual resultado o error de una operacion asincrona
// Cuando interactuamos con una app web y hacemos una solicitud al servidor es necesario usar promesas
// El servidor implica usar promesas porque no sabe cuanto tiempo va a tomar
// No existe return para las promesas
// PROMESA => PENDIENTE => CUMPLIDA / ! REJECTED
// ? Las promesas tienen un metodo .then() en el cual podemos decidir que ocurre cuando se completa una promesa

// * -- Ejemplo 01
// const promesaCumplida = false;
// const miPromesa = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if(promesaCumplida){
//            resolve('Exitoso')
//         }else{
//            reject('Fallido')
//         }
//     },3000)
// });
// console.log(miPromesa);

// miPromesa.then((valor)=>console.log(valor))
//           .catch((err)=>console.log(err))

// * -- Ejemplo 2
const statusPedido = () =>{
    return Math.random()<0.8;
}

const miPedidoPizza = new Promise((resolve,reject)=>{
    setTimeout(()=>{
            if(statusPedido()){
                resolve('!Pedido exitoso')
            }else{
                reject('Pedido mal')
            }
        }, 3000)
});


miPedidoPizza.then((valor)=>console.log(valor))
              .catch((err)=>console.log(err))