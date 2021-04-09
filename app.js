const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

// console.log('base yargs:', argv.base);

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, 'creado'.brightBlue))
  .catch((err) => console.error(err));
