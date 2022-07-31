/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Board} from '../src/ejercicio-2/boardClass';
import {Player} from '../src/ejercicio-2/playerClass';

const jugador1 = new Player("Manolo", 1);
const jugador2 = new Player("Paco", 2);
const jugador3 = new Player("", 3);
const board = new Board(6, 7);
describe('Test class Player', () => {
  describe('Se puede instanciar un Jugador', () => {
    it('expect(jugador1).not.be.equal(null);', () => {
      expect(jugador1).not.be.equal(null);
    });
    it('expect(jugador2).not.be.equal(null);', () => {
      expect(jugador2).not.be.equal(null);
    });
    it('expect(jugador3).not.be.equal(null);', () => {
      expect(jugador3).not.be.equal(null);
    });
  });
  describe('Tiene atributos para almacenar informacion del jugador', () => {
    it('expect(jugador1.getName()).to.be.equal Mnaolo;', () => {
      expect(jugador1.getName()).to.be.equal("Manolo");
    });
    it('expect(jugador2.getName()).to.be.equal Paco;', () => {
      expect(jugador2.getName()).to.be.equal("Paco");
    });
    it('expect(jugador1.getTipo()).to.be.equal 1;', () => {
      expect(jugador1.getTipo()).to.be.equal(1);
    });
    it('expect(jugador2.getTipo()).to.be.equal 2;', () => {
      expect(jugador2.getTipo()).to.be.equal(2);
    });
  });
  describe('Tiene las siguientes funcionalidades', () => {
    it('expect(jugador1.printGanador()).to.be.equal EL ganador es Manolo', () => {
      expect(jugador1.printGanador()).to.be.equal("EL ganador es Manolo");
    });
    it('expect(jugador2.printGanador()).to.be.equal EL ganador es Paco', () => {
      expect(jugador2.printGanador()).to.be.equal("EL ganador es Paco");
    });
    it('expect(jugador2.printPlayer()).to.be.equal El jugador Paco de tipo 2 procede a intoducir ficha: ', () => {
      expect(jugador2.printPlayer()).to.be.equal("El jugador Paco de tipo 2 procede a intoducir ficha: ");
    });
    it('expect(jugador2.random()).to.be.equal El jugador Paco de tipo 2 procede a intoducir ficha: ', () => {
      expect(jugador2.random(0, 0)).to.be.equal(0);
    });
  });
});

describe('Test class Board', () => {
  describe('Se puede instanciar un Jugador', () => {
    it('expect(board).not.be.equal(null);', () => {
      expect(board).not.be.equal(null);
    });
  });
  describe('Tiene las siguientes funcionalidades', () => {
    it('expect(board.start(jugador1, jugador2, true))).not.be.equal(null);', () => {
      expect(board.start(jugador1, jugador2, true)).not.be.equal(null);
    });
    it('expect(board.start(jugador1, jugador2, false))).not.be.equal(null);', () => {
      expect(board.start(jugador1, jugador2, true)).not.be.equal(null);
    });
    it('expect(board.vaciarTablero()).not.be.equal(null);', () => {
      expect(board.vaciarTablero()).not.be.equal(null);
    });
  });
});
