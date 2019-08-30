const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime tabla de multiplicar', opt)
    .command('crear', 'Crea tabla de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
}