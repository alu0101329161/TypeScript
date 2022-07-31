import 'mocha';
import {expect} from 'chai';
import {EventEmitter} from 'events';
import {MessageEventEmitterServer} from '../src/P11/servidor/servidoremitter';

describe('EventEmitterCliente', () => {
    it('Debería emitir una respuesta', (done) => {
      const socket = new EventEmitter();
      const auxEventEmitterCliente = new MessageEventEmitterServer(socket);
      // Recibimos la informacion del servidor
      auxEventEmitterCliente.on('request', (message) => {
        expect(message).to.be.eql({'tipo': 'add', 'sucess': 'true', 'notes': '{user: User1, nota: Amazing, contenido: azucar, color: green}'});
        done();
      });
      // Simulamos el data
      socket.emit('data', '{"tipo": "add", "sucess": "true"');
      socket.emit('data', ',"notes": "{user: User1, nota: Amazing, contenido: azucar, color: green}"}');
      socket.emit('data', '\n');
    });
  });