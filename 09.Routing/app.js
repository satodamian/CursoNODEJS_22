const http = require('http');
const cursos = require('./cursos');

const servidor = http.createServer((req, res)=>{
    const {method} = req;

    switch (method) {
        case 'GET':
            return manejarSolicitudGET(req,res);
        case 'POST':
            return manejarSolicitudPOST(req,res);
    
        default:
            res.statusCode = 501;
            res.end(`El metodo ${method} no puede ser usado en el puerto ${puerto}`)
            console.log(`El metodo ${method} no puede ser usado`)
            break;
    }
});

function manejarSolicitudGET(req,res){
    const path = req.url;
    console.log(res.statusCode)

    if(path === '/'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        // res.statusCode=200;
        return res.end('Bienvenidos a mi servidor y API creados con NodeJS')
    }else if(path === '/cursos'){
        // res.statusCode=200;
        return res.end(JSON.stringify(cursos.infoCursos))
    }else if(path === '/cursos/programacion'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion))
    }else{
        res.statusCode=404;
        return res.end('No existe')
    }
}


function manejarSolicitudPOST(req,res){
    const path = req.url;

    if(path==='/cursos/programacion'){
        res.statusCode = 200;
        return res.end('El servidor recibio una solicitud POST para /cursos/programacion')
    }
}

const puerto=3000;
    servidor.listen(puerto,()=>{
        console.log(`El servidor se ejecuta en el puerto ${puerto}`)
    });

