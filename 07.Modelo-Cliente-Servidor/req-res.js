const http = require('http');

const servidor = http.createServer((req, res)=>{
    // ? req: Informacion de la solicitud HTTP que realizo el cliente
    // console.log('==> req(solicitud)');
    // ! Lo mas importantes de req
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);

    // ? res: Repsuesta
    console.log('==>res(solicitud)');
    // console.log(res);
    // ! Lo mas importante de res
    console.log(res.statusCode); /* 200 OK */
    res.setHeader('content-type', 'application/json');

    console.log(res.getHeaders());
   

    res.end('respuesta :3');
});

const puerto = 3000;
servidor.listen(puerto,()=>{
    console.log(`Se escucha el servidor en el puerto ${puerto}`)
})