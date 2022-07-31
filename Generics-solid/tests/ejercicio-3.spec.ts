/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Cifrado} from '../src/ejercicio-3/cifradoClass';
import {Descifrado} from '../src/ejercicio-3/descifradoClass';

const variable1 = new Descifrado("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "CLAVE");
const variable = new Cifrado("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "CLAVE");
describe('Test class Cifrado', () => {
  describe('Se puede instanciar un Pokemon', () => {
    it('expect(pikachu).not.be.equal(null);', () => {
      expect(variable).not.be.equal(null);
    });
  });
  describe('Tiene las siguientes funcionalidades', () => {
    it('Cifrar mensaje HOLAESTOESUNAPRUEBA eql JZLVIUEOZWWXALVWOBV ', () => {
      expect(variable.cifradoIndescifrable("HOLAESTOESUNAPRUEBA")).eql("JZLVIUEOZWWXALVWOBV");
    });
    it('Cifrar mensaje HOLA111 eql JZLV11 ', () => {
      expect(variable.cifradoIndescifrable("HOLAESTOESUNAPRUEBA1")).eql("JZLVIUEOZWWXALVWOBV1");
    });
  });
});

describe('Test class Descifrado', () => {
  describe('Se puede instanciar un Pokemon', () => {
    it('expect(pikachu).not.be.equal(null);', () => {
      expect(variable1).not.be.equal(null);
    });
  });
  describe('Tiene las siguientes funcionalidades', () => {
    it('descifrar mensaje JZLVIUEOZWWXALVWOBV eql HOLAESTOESUNAPRUEBA ', () => {
      expect(variable1.cifradoIndescifrable("JZLVIUEOZWWXALVWOBV")).eql("HOLAESTOESUNAPRUEBA");
    });
    it('descifrar mensaje que tiene caracter que no es del alfabeto JZLVIUEOZWWXALVWOBV2 eql HOLAESTOESUNAPRUEBA2 ', () => {
      expect(variable1.cifradoIndescifrable("JZLVIUEOZWWXALVWOBV2")).eql("HOLAESTOESUNAPRUEBA2");
    });
  });
});
