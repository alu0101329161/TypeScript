const chalk = require("chalk");
import * as yargs from 'yargs';
import {Cliente} from './cliente';

/**
 * Cliente
 */
const cliente = new Cliente(8080);


/**
 * Comando añadir que permite añadir una nota a un usuario
 * especificando el titulo0, el cuerpo y el color
 */
yargs.command({
  command: 'añadir',
  describe: 'Añadir una nota',
  builder: {
    usuario: {
      describe: 'Nombre del usuario',
      demandOption: true,
      type: 'string',
    },
    titulo: {
      describe: 'Titulo de la nota',
      demandOption: true,
      type: 'string',
    },
    cuerpo: {
      describe: 'Cuerpo de la Nota',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: "Color de la nota",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    if (typeof argv.usuario === 'string' && typeof argv.titulo === 'string' &&
    typeof argv.cuerpo === 'string' && typeof argv.color === "string") {
      if (argv.color == 'red' || argv.color == 'green' || argv.color == 'blue' || argv.color == 'yellow' ) {
        cliente.run({tipo: 'add', usuario: argv.usuario, titulo: argv.titulo, cuerpo: argv.cuerpo, color: argv.color});
      } else {
        console.log(chalk.red('Color no valido'));
      }
    } else {
      console.log(chalk.red('Argument invalid'));
    }
  },
});

/**
 * Comando elimnar que permite eliminar una nota
 * especificando el usuario y el titulo
 */
yargs.command({
  command: 'eliminar',
  describe: 'Eliminar una nota',
  builder: {
    usuario: {
      describe: 'Nombre del usuario',
      demandOption: true,
      type: 'string',
    },
    titulo: {
      describe: 'Titulo de la nota',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.usuario === 'string' && typeof argv.titulo === 'string') {
      cliente.run({tipo: 'remove', usuario: argv.usuario, titulo: argv.titulo});
    } else {
      console.log(chalk.red('Argument invalid'));
    }
  },
});

/**
 * Comando modificar que permite modificar una nota a un usuario
 * especificando el titulo0, el cuerpo y el color
 */
yargs.command({
  command: 'modificar',
  describe: 'Modificar una nota',
  builder: {
    usuario: {
      describe: 'Nombre del usuario',
      demandOption: true,
      type: 'string',
    },
    titulo: {
      describe: 'Titulo de la nota',
      demandOption: true,
      type: 'string',
    },
    cuerpo: {
      describe: 'Cuerpo de la Nota',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: "Color de la nota",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    if (typeof argv.usuario === 'string' && typeof argv.titulo === 'string' &&
    typeof argv.cuerpo === 'string' && typeof argv.color === "string") {
      if (argv.color == 'red' || argv.color == 'green' || argv.color == 'blue' || argv.color == 'yellow' ) {
        cliente.run({tipo: 'update', usuario: argv.usuario, titulo: argv.titulo, cuerpo: argv.cuerpo, color: argv.color});
      }
    } else {
      console.log(chalk.red('Argumento no contemplado'));
    }
  },
});

/**
 * Comando listar que permite listar las notas de un usuario
 */
yargs.command({
  command: 'listar',
  describe: 'Listar todas las notas',
  builder: {
    usuario: {
      describe: 'Nombre del usuario',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.usuario === 'string') {
      console.log(chalk.underline('Notas de ' + argv.usuario));
      cliente.run({tipo: 'list', usuario: argv.usuario});
    } else {
      console.log(chalk.red('Argumento no contemplado'));
    }
  },
});

/**
 * Comando leer que permite leer el contenido de una nota
 */
yargs.command({
  command: 'leer',
  describe: 'Leer una nota',
  builder: {
    usuario: {
      describe: 'Nombre del usuario',
      demandOption: true,
      type: 'string',
    },
    titulo: {
      describe: 'Titulo de la nota',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.usuario === 'string' && typeof argv.titulo === 'string') {
      cliente.run({tipo: 'read', usuario: argv.usuario, titulo: argv.titulo});
    } else {
      console.log(chalk.red('Argumento no contemplado'));
    }
  },
});

// Para poder procesar los argumentos pasados desde línea de comandos a la aplicación 
// es importante que el punto de entrada o programa principal incluya la siguiente sentencia
yargs.parse();

