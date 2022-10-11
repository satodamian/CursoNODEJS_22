//! Tomar JS y convertir a JSON
let infoCurso = {
    "titulo": "Aprender NODEJs",
    "numVistas": "21345",
    "numLikes": 9854,
    "temas":[
        "JavaScript",
        "NPM",
        "Node.JS"
    ],
    "esPublico": true
}

// console.log(typeof infoCurso);

let formatJSON = JSON.stringify(infoCurso);
console.log('VALOR: ' + formatJSON);
console.log('El primer formato es :' + typeof formatJSON);

// ! Tomar JSON a JS

let formatJS = JSON.parse(formatJSON);
console.log('VALOR: ' + formatJS.esPublico);
console.log('El segundo formato es :' + typeof formatJS);