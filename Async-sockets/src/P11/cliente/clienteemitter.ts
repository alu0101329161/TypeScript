import {EventEmitter} from "events";
import {ResponseType} from "../peticiontype";

/**
 * Recibimos  la informacion del servidor
 */
export class MessageEventEmitterClient extends EventEmitter {
  constructor(connection: EventEmitter) {
    super();

    let wholedata = '';
    connection.on('data', (chunk) => {
      wholedata += chunk;

      let messageLimit: number = wholedata.indexOf('\n');

      while (messageLimit !== -1) {
        const message: ResponseType = JSON.parse(wholedata.substring(0, messageLimit));
        wholedata = wholedata.substring(messageLimit + 1);
        this.emit('response', message);
        messageLimit = wholedata.indexOf('\n');
      }
    });
  }
}
