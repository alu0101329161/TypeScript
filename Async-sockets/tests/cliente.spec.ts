import 'mocha';
import {expect} from 'chai';
import {EventEmitter} from 'events';
import {MessageEventEmitterClient} from '../src/P11/cliente/clienteemitter';

describe('EventEmitterCliente', () => {
    it('Debería emitir una respuesta', (done) => {
      const socket = new EventEmitter();
      const auxEventEmitterCliente = new MessageEventEmitterClient(socket);
      // Recibimos la informacion del cliente
      auxEventEmitterCliente.on('response', (message) => {
        expect(message).to.be.eql({'user': 'User1', 'nota': 'Amazing', 'contenido': 'azucar', 'color': 'green'});
        done();
      });
      // Simulamos el data
      socket.emit('data', '{"user": "User1", "nota": "Amazing"');
      socket.emit('data', ', "contenido": "azucar", "color": "green"}');
      socket.emit('data', '\n');
    });
  });