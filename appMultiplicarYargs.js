const argv = require('./config/yargs').argv;
const { crearArchivo } = require('./multiplicar');
const { listarTabla } = require('./multiplicar');


//console.log(argv.base);

//console.log('Límite ', argv.limite);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Elija un comando válido');
}