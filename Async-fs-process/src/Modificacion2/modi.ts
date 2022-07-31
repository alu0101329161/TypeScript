import {constants, accessSync, watch} from "fs";
import {ChildProcessWithoutNullStreams, spawn} from "child_process";
import {EventEmitter} from 'events';
import {string} from "yargs";

/**
 * @class Clase Modificacion
 */
export class ModificacionEmitter {
  fichero: string;
  comando: string;
  flags: string = "";
  tamaño: number;
  /**
   * Guarda los valores del fichero y del comando.
   * además de los flags que se van a aplicar
   * @param argv 
   */
  constructor(argv: string[]) {
    this.fichero = argv[2];
    this.comando = argv[3];
    this.tamaño = argv.length;
    for (let i = 4; i < argv.length; i++) {
      this.flags += argv[i] + " ";
    }
  }

  /**
   * Método que escucha.
   */
  escuchar() {
    console.log(this.tamaño);
    // Miramos la cantidad de argumentos.
    if (this.tamaño <= 2) {
      console.log("Uso: node modi.js <fichero> <comandos> <flags>");
      process.exit(1);
    }
    
    // Miramos que podamos leer del fichero.
    try {
      accessSync(this.fichero, constants.R_OK);
    } catch (err) {
      console.log("No se puede acceder al fichero");
      process.exit(1);
    }
    
    // Observamos el fichero para detectar cambios.
    watch(this.fichero, (eventType) => {
      if (eventType === "change") {
        console.log("El tamaño del fichero ha cambiado");
      }
      // Creamos un array con los flags
      const newparameters: string[] = [];
      const flags = this.flags.split(" ");
      console.table(flags);
      for (let i = 0; i < flags.length; i++) {
        if (flags[i] === "") {
          continue;
        }
        newparameters.push(flags[i]);
        newparameters.push(",");
      }
      newparameters.push(this.fichero);
      console.table(newparameters);

      const comandoCut: ChildProcessWithoutNullStreams = spawn(this.comando, newparameters);
      let informacionCut: string = "";
    
      // Se produce un evento data sobre el cut.
      comandoCut.stdout.on("data", (data) => informacionCut += data);
      
      // Miramos que el fichero no se haya borrado.
      try {
        accessSync(this.fichero, constants.R_OK);
      } catch (err) {
        console.log("No se puede acceder al fichero");
        process.exit(1);
      }
      if (eventType === "rename") {
        console.log("Fichero eliminado o ruta cambiada");
        process.exit(1);
      }
      
      // Cuando el comando cut haya terminado emite un evento de tipo close.
      comandoCut.on("close", () => {
        console.table(informacionCut);
        const array: string[] = informacionCut.split(" ");
        const newArray: string[][] = [];
        for (let i = 0; i < array.length; i++) {
          if (array[i] === "") {
            continue;
          }
          newArray.push(array[i].split("\n"));
        }
        console.log(newArray);
      });
    });
  }
}
// const mod = new ModificacionEmitter(process.argv[2], process.argv[3], ,process.argv);
const mod = new ModificacionEmitter(process.argv);
mod.escuchar();
