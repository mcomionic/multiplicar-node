// require
const fs = require('fs');

let base = 5;
let datos = '';

for (let i = 1; i <= 10; i++) {
    datos = datos + `${ base } * ${ i} = ${ base * i}`;

}
fs.writeFile(`tablas/tabla${base}.txt`, datos, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla${base} ha sido creado`);
});

crearArchivo(base)
    .then(archivo => console.log('Archivo creado'))