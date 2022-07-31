import * as fs from "fs";
import {spawn} from "child_process";
import {EventEmitter} from "stream";

/**
 * Clase CatNoPipeGrep
 */
export class CatNoPipeGrep extends EventEmitter {
  /**
   * Guardamos información básica
   * @param fichero 
   * @param palabra 
   * @param argumentos 
   */
  constructor(private fichero: string, private palabra: string, private argumentos: number) {
    super();
  }

  /**
   * Método que escucha el fichero y ejecuta un cat pero usamos el write en vez del pipe
   */
  run() {
    if (this.argumentos !== 4) {
      console.log("Error: El número de argumentos no es correcto");
      process.exit(1);
    }
    fs.access(this.fichero, fs.constants.R_OK, (err) => {
      if (err) {
        console.log(`Fichero ${this.fichero} no existe`);
        process.exit(1);
      }
      console.log(`Iniciando a vigilar fichero ${this.fichero}`);
      let data = "";
      const cat = spawn("cat", [this.fichero]);
      const grep = spawn("grep", [this.palabra]);
      cat.stdout.on("data", (chunk) => {
        grep.stdin.write(chunk);
      });
      cat.on("close", () => {
        grep.stdin.end();
      });
      grep.stdout.on("data", (chunk) => {
        data += chunk;
      });
      grep.on("close", () => {
        console.log(data);
        const regex = new RegExp(this.palabra, "g");
        console.log(`Ocurrencias de la palabra ${this.palabra}: ${data.match(regex)?.length ?? 0}`);
        this.emit("finish", "Se ha terminado la ejecución");
      });
    });
  }
}

// $node dist/P10/ejercicio2/catpipegrep fichero.txt BEBE
// const ejecucion = new CatNoPipeGrep(process.argv[2], process.argv[3], process.argv.length);
// ejecucion.run();
