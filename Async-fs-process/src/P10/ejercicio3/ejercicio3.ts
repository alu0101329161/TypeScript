import * as fs from "fs";

/**
 * @class Vigilar
 */
export class Vigilar {
  /**
   * Recibimos la informacion del ususario y la ruta además de la cantidad
   * de argumentos que se han pasado para controlar errores
   * @param usuario 
   * @param ruta 
   * @param argumentos 
   */
  constructor(private usuario: string, private ruta:string, private argumentos: number) {}

  /**
   * Método que escucha al usuario indicado en la ruta que se pasa al constructor
   */
  run() {
    if (this.argumentos !== 4) {
      console.log("Error: El número de argumentos no es correcto");
      process.exit(1);
    }
    fs.access(this.ruta, fs.constants.F_OK, (err) => {
      if (err) {
        console.log(`Usuario ${this.usuario} no existe o ruta incorrecta`);
        process.exit(1);
      }
      console.log(`Iniciando a vigilar usuario ${this.usuario}`);
      fs.watch(this.ruta, (eventType, filename) => {
        if (eventType === "change") {
          console.log(`${this.usuario} ha modificado el fichero ${filename} con evento ${eventType}`);
        } else if (eventType === "rename") {
          console.log(`${this.usuario} ha renombrado/eliminado el fichero ${filename} con evento ${eventType}`);
        }
      });
    });
  }
}


// const ejecucion = new Vigilar(process.argv[2], process.argv[3], process.argv.length);
// ejecucion.run();
