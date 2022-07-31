import {EventEmitter} from 'events';
import {RequestType} from '../peticiontype';
/**
 * Recibimos la informacion del cliente
 */
export class MessageEventEmitterServer extends EventEmitter {
  constructor(connection: EventEmitter) {
    super();

    let wholeData = '';
    connection.on('data', (dataChunk) => {
      wholeData += dataChunk;

      let messageLimit = wholeData.indexOf('\n');
      while (messageLimit !== -1) {
        const message: RequestType = JSON.parse(wholeData.substring(0, messageLimit));
        wholeData = wholeData.substring(messageLimit + 1);
        this.emit('request', message);
        messageLimit = wholeData.indexOf('\n');
      }
    });
  }
}

