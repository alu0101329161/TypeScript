import {spawn} from "child_process";
import * as fs from "fs";

export class Comandos {
  /**
   * Comando que comprueba si es un directorio o un fichero primero debemos saber
   * 
   * @param ruta 
   */
  analizar(ruta: string) {
    fs.access(ruta, fs.constants.F_OK, (err) => {
      console.log(ruta);
      if (err) {
        console.log("Hay un error con la ruta indicada");
        process.exit(1);
      } else {
        fs.stat(ruta, (err, stats) => {
          if ( !err ) {
            if (stats.isFile()) {
              console.log('Es un fichero ' + stats.isFile());
            } else if (stats.isDirectory()) {
              console.log('Es un directorio ' + stats.isDirectory());
            }
          } else {
            console.log("Error");
            process.exit(1);
          } 
        });
      }
    });
  }

  /**
   * Crea un directorio en la ruta indicada comrpobando
   * que el susuario
   * @param ruta 
   */
  mkdir(ruta: string) {
    const mkdir = spawn('mkdir', [ruta]);
    mkdir.stderr.on("data", (chunk) => {
      console.log(chunk.toString());
      process.exit(1);
    });
    mkdir.on("close", () => {
      console.log(`Directorio ${ruta} creado`);
    });
  }

  /**
   * Muestra los ficheros de un directorio con los
   * permisos de lectura y ejecucion
   * @param ruta 
   */
  ls(ruta: string) {
    fs.access(ruta, fs.constants.R_OK, (err) => {
      if (err) {
        console.log(`El destino ${ruta} no existe`);
        process.exit(1);
      }
      const ls = spawn('ls', [ruta]);
      let data = "";
      ls.stdout.on("data", (chunk) => {
        data += chunk;
      });
      ls.on("close", () => {
        if (data.length > 0) {
          console.log(data);
        } else {
          console.log(`No hay contenido en ${ruta}`);
        }
      });
    });
  }

  /**
   * Muestra el contenido de un fichero con 
   * solo permiso de lectura
   * @param ruta 
   */
  cat(ruta: string) {
    fs.access(ruta, fs.constants.R_OK, (err) => {
      if (err) {
        console.log(`Fichero ${ruta} no existe`);
        process.exit(1);
      }
      fs.stat(ruta, (err, stats) => {
        if (!err) {
          if (stats.isFile()) {
            const cat = spawn('cat', [ruta]);
            let data = "";
            cat.stdout.on("data", (chunk) => {
              data += chunk;
            });
            cat.on("close", () => {
              if (data.length > 0) {
                console.log(data);
              } else {
                console.log(`El fichero esta vacio`);
              }
            });
          } else {
            console.log(`${ruta} no es un fichero`);
          }
        } else {
          console.log("Error");
        }
      });
    });
  }

  /**
   * Eliminar un fichero o directorio de la ruta indicada
   * con los permisos correspondientes
   * @param ruta 
   */
  rm(ruta: string) {
    fs.access(ruta, fs.constants.F_OK, (err) => {
      if (err) {
        console.log(`Fichero ${ruta} no existe`);
        process.exit(1);
      }
      const rm = spawn('rm', ["-rf", ruta]);

      rm.stderr.on("data", (chunk) => {
        console.log(chunk.toString());
        process.exit(1);
      });

      rm.on("close", () => {
        console.log(`Fichero ${ruta} eliminado`);
      });
    });
  }

  /**
   * Comando cp para copiar/mover ficheros/directorios
   * @param ruta puede ser un directorio o fichero
   * @param destino solo un directorio
   */
  cp(origen: string, destino: string) {
    fs.access(origen, fs.constants.F_OK, (err) => {
      if (err) {
        console.log(`Fichero ${origen} origen no existe`);
        process.exit(1);
      }
      fs.access(destino, fs.constants.F_OK, (err) => {
        if (err) {
          console.log(`Fichero ${destino} destino existe`);
          return;
        }
        const cp = spawn('cp', ["-r", origen, destino]);

        cp.stderr.on("data", (chunk) => {
          console.log(chunk.toString());
          process.exit(1);
        });

        cp.on("close", () => {
          console.log(`Fichero ${origen} copiado en ${destino}`);
        });
      });
    });
  }
}
