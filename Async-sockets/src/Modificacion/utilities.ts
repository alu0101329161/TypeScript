import {rejects} from "assert";
import {spawn} from "child_process";
import {resolve} from "path";
import {string} from "yargs";
// Realizamos la ejecucion del comando spawn
export const comando = (cmd: string, args:string) => {
  return new Promise<string>((resolve, reject) => {
    let comando: any;
    if (args !== "") {
      comando = spawn(cmd, args.split(','));
    } else {
      comando = spawn(cmd);
    }

    let respuesta: string = "";
    let error: string = "";
    comando.stdout.on("data", (data: Buffer) => {
      respuesta += data;
    });
    // Error comando
    comando.on('error', () =>{
      error = "Error al ejecutar el comando, comando erroneo o no existe";
    });
    // Error argumentos
    comando.stderr.on("data", (data: Buffer) => {
      error += data;
    });
    // Nos aseguramos que termine
    comando.on("close", () => {
      if (error === "") {
        resolve(respuesta);
      } else {
        reject(error);
      }
    });
  });
};
