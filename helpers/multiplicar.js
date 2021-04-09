const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, listar, hasta) => {
  try {
    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
      if (i === hasta) {
        consola += `${colors.brightBlue(base)} ${
          '*'.brightYellow
        } ${colors.brightBlue(i)} ${'='.brightYellow} ${colors.brightBlue(
          base * i
        )}`;

        salida += `${base} * ${i} = ${base * i}`;
        continue;
      }

      consola += `${colors.brightBlue(base)} ${
        '*'.brightYellow
      } ${colors.brightBlue(i)} ${'='.brightYellow} ${colors.brightBlue(
        base * i
      )}\n`;

      salida += `${base} * ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log('====================='.rainbow);
      console.log('    tabla del'.brightBlue, colors.brightYellow(base));
      console.log('=====================\n'.rainbow);
      console.log(`${consola}\n`);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`.brightMagenta;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
