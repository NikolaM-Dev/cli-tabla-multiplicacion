const argv = require('yargs')
  .option({
    b: {
      alias: 'base',
      type: 'number',
      default: 5,
      describe: 'Es la base de la tabla de multiplicar',
    },

    l: {
      alias: 'listar',
      type: 'boolean',
      default: false,
      describe: 'Muestra la tabla en consola',
    },

    h: {
      alias: 'hasta',
      type: 'number',
      default: 10,
      describe: 'Indica el limite de veces que se multiplicara la base',
    },
  })
  .check((argv, _) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un numero';
    } else if (isNaN(argv.h)) {
      throw 'La bandera "hasta" tiene que ser un numero';
    }
    return true;
  }).argv;

module.exports = argv;
