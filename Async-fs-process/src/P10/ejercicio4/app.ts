const chalk = require("chalk");
import * as yargs from 'yargs';
import {Comandos} from './comandos';

const comandos = new Comandos();

/**
 * Comando que comprueba si es un directorio o un fichero
 */
yargs.command({
  command: 'analizar',
  describe: 'Comprueba si es un directorio o un fichero',
  builder: {
    ruta: {
      describe: 'Ruta del fichero o directorio',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.ruta === 'string') {
      comandos.analizar(argv.ruta);
    } else {
      console.log(chalk.red('Argument invalid'));
    }
  },
});

/**
 * Crea un directorio en la ruta indicada
 */
yargs.command({
  command: 'mkdir',
  describe: 'Crea un directorio en una ruta',
  builder: {
    ruta: {
      describe: 'Ruta de destino',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.ruta === 'string') {
      comandos.mkdir(argv.ruta);
    } else {
      console.log(chalk.red('Argument invalid'));
    }
  },
});

/**
 * Muestra el contenido de un directorio
 */
yargs.command({
  command: 'ls',
  describe: 'Muestra el contenido de un directorio',
  builder: {
    ruta: {
      describe: 'Ruta del directorio',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.ruta === 'string') {
      comandos.ls(argv.ruta);
    } else {
      console.log(chalk.red('Argument invalid'));
    }
  },
});

/**
 * Muestra el fichero de la ruta indicada
 */
yargs.command({
  command: 'cat',
  describe: 'Muestra el contenido de un fichero',
  builder: {
    ruta: {
      describe: 'Ruta del fichero',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.ruta === 'string') {
      comandos.cat(argv.ruta);
    } else {
      console.log(chalk.red('Argument invalid'));
    }
  },
});

/**
 * Borra un fichero en la ruta indicada
 */
yargs.command({
  command: 'rm',
  describe: 'Elimina un fichero o directorio',
  builder: {
    ruta: {
      describe: 'Ruta del fichero o directorio',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.ruta === 'string') {
      comandos.rm(argv.ruta);
    } else {
      console.log(chalk.red('Argument invalid'));
    }
  },
});

/**
 * Copia/mueve un fichero o directorio a otra ruta
 */
yargs.command({
  command: 'cp',
  describe: 'copia un fichero o directorio',
  builder: {
    origen: {
      describe: 'Ruta del fichero o directorio',
      demandOption: true,
      type: 'string',
    },
    destino: {
      describe: 'Ruta de destino',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.origen === 'string' && typeof argv.destino === 'string') {
      comandos.cp(argv.origen, argv.destino);
    } else {
      console.log(chalk.red('Argument invalid'));
    }
  },
});

// Para poder procesar los argumentos pasados desde línea de comandos a la aplicación 
// es importante que el punto de entrada o programa principal incluya la siguiente sentencia
yargs.parse();
