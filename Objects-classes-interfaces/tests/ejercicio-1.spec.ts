/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Pokedex} from '../src/ejercicio-1/pokedexClass';
import {Pokemon} from '../src/ejercicio-1/pokemonClass';
import {Combat} from '../src/ejercicio-1/combatClass';

const pikachu = new Pokemon("Pikachu", 10, 2.3, "electrico", 2, 3, 5, 6);
const bulbasur = new Pokemon("Bulbasur", 10, 2.3, "agua", 2, 3, 5, 6);
const pikachu2 = new Pokemon("Pikachu", 10, 2.3, "planta", 2, 3, 5, 6);
const bulbasur2 = new Pokemon("Bulbasur", 10, 2.3, "fuego", 2, 3, 5, 6);
const pidgeoto = new Pokemon("", 10, 2.3, "agua", 2, 3, 4, 5);

describe('Test class Pokemon', () => {
  describe('Se puede instanciar un Pokemon', () => {
    it('expect(pikachu).not.be.equal(null);', () => {
      expect(pikachu).not.be.equal(null);
    });
    it('expect(bulbasur).not.be.equal(null);', () => {
      expect(bulbasur).not.be.equal(null);
    });
  });
  describe('Tiene atributos para almacenar informacion del pokemon', () => {
    it('expect(pikachu.getNombre()).to.be.equal Pikachu;', () => {
      expect(pikachu.getNombre()).to.be.equal("Pikachu");
    });
    it('expect(pidgeoto.getAtaque()).to.be.equal 2;', () => {
      expect(pidgeoto.getAtaque()).to.be.equal(2);
    });
    it('expect(pidgeoto.getDefensa()).to.be.equal 3;', () => {
      expect(pidgeoto.getDefensa()).to.be.equal(3);
    });
    it('expect(pidgeoto.getVelocidad()).to.be.equal 4;', () => {
      expect(pidgeoto.getVelocidad()).to.be.equal(4);
    });
    it('expect(pidgeoto.getVida()).to.be.equal 5;', () => {
      expect(pidgeoto.getVida()).to.be.equal(5);
    });
    it('expect(pidgeoto.getPeso()).to.be.equal 10;', () => {
      expect(pidgeoto.getPeso()).to.be.equal(10);
    });
    it('expect(pidgeoto.getAltura()).to.be.equal 2.3;', () => {
      expect(pidgeoto.getAltura()).to.be.equal(2.3);
    });
    it('expect(pidgeoto.getTipo()).to.be.equal "agua";', () => {
      expect(pidgeoto.getTipo()).to.be.equal("agua");
    });
    it('expect(pidgeoto.setHp()).to.be.equal 2', () => {
      pidgeoto.setHp(2);
      expect(pidgeoto.getVida()).to.be.equal(2);
    });
  });
  describe('Tiene las siguientes funcionalidades', () => {
    it('expect(pikachu.printPokemon())).to.be.equal cadena que muesta información del pokemon;', () => {
      expect(pikachu.printPokemon()).eql(`El nombre del pokemon es Pikachu, tiene un peso de 10, una altura de 2.3, es de tipo electrico y sus estadisticas son:
    Ataque = 2,
    Defensa = 3,
    Velocidad = 5,
    Vida = 6`);
    });
  });
});

describe('Test class Pokedex', () => {
  const pokedex = new Pokedex([pikachu, bulbasur]);
  describe('Se puede instanciar una Pokedex', () => {
    it('expect(pokedex).not.be.equal(null);', () => {
      expect(pokedex).not.be.equal(null);
    });
  });
  describe('Tiene las siguientes funcionalidades', () => {
    it('expect(pokedex.eliminarPokemom(pikachu)).eql("Pokemon eliminado correctamente");', () => {
      expect(pokedex.eliminarPokemom(pikachu)).eql("Pokemon eliminado correctamente");
    });
    it('expect(pokedex.eliminarPokemom(pikachu)).eql("EL pokemon que intenta eliminar no existe");', () => {
      expect(pokedex.eliminarPokemom(pikachu)).eql("EL pokemon que intenta eliminar no existe");
    });
    it('expect(pokedex.añadirPokemon(bulbasur)).eql("Pokemon añadido");', () => {
      expect(pokedex.añadirPokemon(pidgeoto)).eql("Pokemon añadido");
    });
    it('expect(pokedex.añadirPokemon(bulbasur)).eql("Pokemon añadido");', () => {
      expect(pokedex.añadirPokemon(pidgeoto)).eql("Pokemon añadido");
    });
  });
});


describe('Test class Combat', () => {
  const combate = new Combat(pikachu, bulbasur);
  const combate1 = new Combat(pikachu2, bulbasur2);
  it('expect(combate).not.be.equal(null);', () => {
    expect(combate).not.be.equal(null);
  });
  describe('Tiene las siguientes funcionalidades', () => {
    it('expect(pokedex.eliminarPokemom(pikachu)).eql("Pokemon eliminado correctamente");', () => {
      const result = combate.start();
      expect(result).eql("EL ganador es Pikachu !!!!!!!!!!");
    });
    it('expect(pokedex.eliminarPokemom(pikachu)).eql("Pokemon eliminado correctamente");', () => {
      const result = combate.start();
      expect(result).eql("EL ganador es Pikachu !!!!!!!!!!");
    });
  });
});
