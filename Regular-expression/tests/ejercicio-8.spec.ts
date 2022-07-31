import 'mocha';
import {expect} from 'chai';
import {pokemonBattle} from '../src/ejercicio-8';


describe('Test funcion pokemonBattle', () => {
  it('pokemonBattle("fuego", "electrico", 80, 100) should return 40', () => {
    expect(pokemonBattle("fuego", "electrico", 80, 100)).to.be.equal(40);
  });
  it('pokemonBattle("agua", "planta", 100, 100) should return 25', () => {
    expect(pokemonBattle("agua", "planta", 100, 100)).to.be.equal(25);
  });
});
