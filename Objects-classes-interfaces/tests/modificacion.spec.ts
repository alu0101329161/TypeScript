/* eslint-disable prefer-const */
import 'mocha';
import {expect} from 'chai';
import {Racional} from '../src/Modificación/modificacion';

describe('Pruebas clase Racional', () => {
  describe('Se puede instanciar un Racional', () => {
    const racional = new Racional(1, 2);
    const racional1 = new Racional(3, 2);
    it('expect(racional).not.be.equal(null);', () => {
      expect(racional).not.be.equal(null);
    });
    it('expect(racional1).not.be.equal(null);', () => {
      expect(racional1).not.be.equal(null);
    });
  });
  describe('Tiene atributos para almacenar numerador y denominador', () => {
    const racional = new Racional(1, 2);
    const racional1 = new Racional(3, 0);
    it('expect(racional.getNumerador().to.be.equal 1', () => {
      expect(racional.getNumerador()).to.be.equal(1);
    });
    it('expect(racional.getDenominador.to.be.equal 2', () => {
      expect(racional.getDenominador()).to.be.equal(2);
    });
    it('expect(No se debe poder introducir denominador 0', () => {
      expect(racional1.getDenominador()).to.be.equal(1);
    });
  });

  describe('Puedes realizar operaciones con los racionales', () => {
    const racional = new Racional(1, 2);
    const racional1 = new Racional(3, 1);
    const racional10 = new Racional(10, 10);
    let valor = racional.suma(racional1);
    let valor1 = racional.resta(racional1);
    let valor2 = racional.multiplicar(racional1);
    let valor3 = racional.dividir(racional1);
    it('expect(racional.suma(racional1).to.be.equal valor', () => {
      expect(racional.suma(racional1)).eql(valor);
    });
    it('expect(racional.resta(racional1).to.be.equal valor1', () => {
      expect(racional.resta(racional1)).eql(valor1);
    });
    it('expect(racional.multiplicar(racional1).to.be.equal valor2', () => {
      expect(racional.multiplicar(racional1)).eql(valor2);
    });
    it('expect(racional.dividir(racional1).to.be.equal valor3', () => {
      expect(racional.dividir(racional1)).eql(valor3);
    });
    it('Invertirmos el rational pasado por parámetro', () => {
      let salida = racional.invertir();
      expect(salida).not.to.be.equal(racional);
    });
    it('Simplificamos el rational introducido', () => {
      let salida = racional10.simplificar();
      expect(salida).eql(new Racional(1, 1));
    });
    it('Podemos imprimir un rational (El numero racional es: 3 / 1)', () => {
      let salida = racional1.printRacional();
      expect(salida).eql('El numero racional es: 3 / 1');
    });
  });
});
