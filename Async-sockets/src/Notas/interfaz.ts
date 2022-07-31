const chalk = require("chalk");
import * as yargs from 'yargs';
import {ManejarNotas} from './manejarNotas';

/**
 * Instancia que nos permite controlar la base de datos
 * con las notas
 */
const manejadorNotas = new ManejarNotas();

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
        manejadorNotas.añadirNota(argv.usuario, argv.titulo, argv.cuerpo, argv.color);
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
      manejadorNotas.eliminarNota(argv.usuario, argv.titulo);
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
        manejadorNotas.modificarNota(argv.usuario, argv.titulo, argv.cuerpo, argv.color);
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
      manejadorNotas.listarNotas(argv.usuario);
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
      manejadorNotas.leerNota(argv.usuario, argv.titulo);
    } else {
      console.log(chalk.red('Argumento no contemplado'));
    }
  },
});

// Para poder procesar los argumentos pasados desde línea de comandos a la aplicación 
// es importante que el punto de entrada o programa principal incluya la siguiente sentencia
yargs.parse();

