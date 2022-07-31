/* eslint-disable no-tabs */
import {RequestType, ResponseType} from "../peticiontype";
import * as net from "net";
import {MessageEventEmitterClient} from "./clienteemitter";
import {Nota} from "../../Notas/notas";
const chalk = require("chalk");

/**
 * @class Cliente
 */
export class Cliente {
  /**
	* Almacena el puerto del servidor
	* @param puerto 
	*/
  constructor(private puerto: number) {}

  /**
	 * Metodo que se encarga de enviar una peticion al servidor
	 * @param request 
	 */
  public run(request: RequestType) {
    const cliente: net.Socket = net.connect({port: this.puerto});
    const emitter:MessageEventEmitterClient= new MessageEventEmitterClient(cliente);

    emitter.on('response', (response: ResponseType) => {
      switch (response.tipo) {
        case 'add':
          if (response.success) {
            console.log(chalk.green("Nota añadida correctamente"));
          } else {
            console.log(chalk.red("Error al añadir nota"));
          }
          break;
        case 'update':
          if (response.success) {
            console.log(chalk.green("Nota modificada correctamente"));
          } else {
            console.log(chalk.red("Error al modificar nota"));
          }
          break;
        case 'remove':
          if (response.success) {
            console.log(chalk.green("Nota eliminada correctamente"));
          } else {
            console.log(chalk.red("Nota no encontrada"));
          }
          break;
        case 'read':
          if (response.success) {
            response.notes?.forEach((note: Nota) => {
              console.log(chalk.keyword(note.color)(note.titulo));
              console.log(chalk.keyword(note.color)(note.cuerpo));
            });
          } else {
            console.log(chalk.red("Nota no encontrada"));
          }
          break;
        case 'list':
          if (response.success) {
            response.notes?.forEach((note: Nota) => {
              console.log(chalk.keyword(note.color)(note.titulo));
            });
          } else {
            console.log(chalk.red("Error al listar las notas"));
          }
          break;
        default:
          console.log(chalk.red('Error: tipo de peticion no soportado'));
          break;
      }
    });
    cliente.write(JSON.stringify(request) + "\n", (err) => {
      if (err) {
        console.log(chalk.red(err));
      }
      console.log(chalk.yellow('Peticion enviada'));
    });
  }
}
