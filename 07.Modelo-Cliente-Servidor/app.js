// Crear nuestro primer servidor
const http = require('http');
                                  //peticion, respuesta
const servidor = http.createServer((request, response)=>{
    // Proceso: Enviar la respuesta al cliente
    console.log('Solicitud nuev')
    response.end('Hola mundo');
});

const PUERTO = 3000;

// ? Lograr escuchar
servidor.listen(PUERTO, ()=>{
    // Que queremos hacer
    console.log(`El servidor esta escuchando en http://localhost:${PUERTO}`)
});
