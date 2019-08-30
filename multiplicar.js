// require
const fs = require('fs');

let listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i} = ${ base * i}`);

    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base introducida no es un número');
            return;
        }
        let datos = '';

        for (let i = 1; i <= limite; i++) {
            datos = datos + `${ base } * ${ i} = ${ base * i}`;

        }
        fs.writeFile(`tablas/tabla${base}-al-${limite}.txt`, datos, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla${base}.txt`)

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}