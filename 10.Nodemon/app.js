const http = require('http');
const servidor = http.createServer((req, res)=>{
    res.end('Mando mi msj a la hoja de mi web');
});

const puerto = 3000;
servidor.listen(puerto, ()=>{
    console.log(`El servidor escucha en el puerto ${puerto}`)
});