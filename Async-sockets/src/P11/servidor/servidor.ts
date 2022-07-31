import {ManejarNotas} from "../../Notas/manejarNotas";
import * as net from "net";
import {MessageEventEmitterServer} from "./servidoremitter";
import {RequestType, ResponseType} from "../peticiontype";
const chalk = require("chalk");
/**
 * @class Servidor
 */
export class Servidor {
  private manejar = new ManejarNotas();
  constructor(private puerto: number) {}

  public run() {
    let response: ResponseType;
    const server = net.createServer((connection) => {
      const emitter = new MessageEventEmitterServer(connection);

      emitter.on("request", (request: RequestType) => {
        switch (request.tipo) {
          case "add":
            if (request.titulo !== undefined && request.cuerpo !== undefined && request.color !== undefined) {
              const salida = this.manejar.añadirNota(request.usuario, request.titulo, request.cuerpo, request.color);
              response = {tipo: "add", success: salida};
            }
            break;
          case "update":
            if (request.titulo !== undefined && request.cuerpo !== undefined && request.color !== undefined) {
              const salida = this.manejar.modificarNota(request.usuario, request.titulo, request.cuerpo, request.color);
              response = {tipo: "update", success: salida};
            }
            break;
          case "remove":
            if (request.titulo !== undefined) {
              const salida = this.manejar.eliminarNota(request.usuario, request.titulo);
              response = {tipo: "remove", success: salida};
            }
            break;
          case "read":
            if (request.titulo !== undefined) {
              const nota = this.manejar.leerNota(request.usuario, request.titulo);
              if (nota) {
                response = {tipo: "read", success: true, notes: [nota]};
              } else {
                response = {tipo: "read", success: false};
              }
            }
            break;
          case "list":
            const notas = this.manejar.listarNotas(request.usuario);
            if (notas) {
              response = {tipo: "list", success: true, notes: notas};
            } else {
              response = {tipo: "list", success: false};
            }
            break;
          default:
            console.log("Error: Unknown request tipo");
            break;
        }

        connection.write(JSON.stringify(response) + "\n", (err) => {
          if (err) {
            console.log(err);
          }
          console.log(chalk.yellow("Mensaje enviado al cliente"));
          connection.end();
        });

        connection.on("close", () => {
          console.log(chalk.yellow("Usuario desconectado"));
        });
      });
    });
    server.listen(this.puerto, () => {
      console.log(`Escuchando en el puerto ${this.puerto}`);
    });
  }
}


const servidor = new Servidor(8080);
servidor.run();


// Servidor cierra los dos lados de escritura
