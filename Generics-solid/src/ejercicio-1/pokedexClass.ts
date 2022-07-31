/* eslint-disable max-len */
import {DC, DCPrint} from './dcClass';
import {DragonBallPrint, DrangonBall} from './dragonballClass';
import {estadisticasType, Fighter} from './fighterClass';
import {Marvel, MarvelPrint} from './marvelClass';
import {Pokemon, PokemonPrint} from './pokemonClass';

/**
 * Clase que representa a la Pokedex
 */
export class Pokedex {
  /**
   * Recine un array de fighter
   * @param  {Fighter[]} privateluchadores
   */
  constructor(private luchadores: Fighter[]) { }
  /**
   * COnseguir luchador de la pokedex
   * @param  {number} index
   * @returns Fighter
   */
  getLuchador(index: number): Fighter {
    return this.luchadores[index];
  }
  /**
   * Getter del numero de luchadores de
   * la pokedex
   * @returns number
   */
  getNumeroLuchadores(): number {
    return this.luchadores.length;
  }
  /**
   * Añadimos luchador a la pokedex
   * @param  {Fighter} luchador
   */
  añadirLuchador(luchador: Fighter): void {
    this.luchadores.push(luchador);
  }
  /**
   * Eliminamos luchador de la pokedex
   * @param  {Fighter} luchador
   * @returns void
   */
  eliminarLuchador(luchador: Fighter): string {
    let result= "";
    const indice: number = this.luchadores.indexOf(luchador);
    if (indice === -1) {
      result = "EL luchador que intenta eliminar no existe";
      console.log(result);
      return result;
    }
    this.luchadores.splice(indice, 1);
    return "Eliminado correctamente";
  }
}

/**
 * Clase para imprimir la Pokedex
 */
export class PokedexPrint {
  /**
   * Recibimos el objeto Pokedex
   * @param  {Pokedex} privatepokedex
   */
  constructor(private pokedex: Pokedex) {}
  /**
   * Dependiendo de la instancia llamamos al
   * metodo de la clase que le corresponda
   * @returns string
   */
  print(): string {
    let result = "";
    let luchador: Fighter;
    for (let index = 0; index < this.pokedex.getNumeroLuchadores(); index++) {
      luchador = this.pokedex.getLuchador(index);
      if (luchador instanceof Pokemon) {
        const pokemonprint = new PokemonPrint(luchador);
        result += pokemonprint.print();
      }
      if (luchador instanceof Marvel) {
        const marvelprint = new MarvelPrint(luchador);
        result += marvelprint.print();
      }
      if (luchador instanceof DC) {
        const dcprint = new DCPrint(luchador);
        result += dcprint.print();
      }
      if (luchador instanceof DrangonBall) {
        const dragonballprint = new DragonBallPrint(luchador);
        result += dragonballprint.print();
      }
    }
    return result;
  }
}

const objeto: estadisticasType = {
  vida: 10,
  ataque: 20,
  defensa: 30,
  velocidad: 200,
};
const objeto1: estadisticasType = {
  vida: 100,
  ataque: 20,
  defensa: 30,
  velocidad: 200,
};
const luchador1 = new Pokemon("Pikachu", 10, 20, objeto, "Raatatatatatat", "Pokemon", "planta");
const luchador2 = new DrangonBall("Goku", 10, 10, objeto1, "Ondavitalll", "DragonBall", "Saiyan");
const pokedex =new Pokedex([luchador1, luchador2]);
const pokedexprint = new PokedexPrint(pokedex);
pokedexprint.print();
/* // Pruebas 
const pikachu = new Pokemon("Pikachu", 10, 2.3, "electrico", 2, 3, 5, 6);
const bulbasur = new Pokemon("Bulbasur", 10, 2.3, "agua", 2, 3, 5, 6);

pikachu.printPokemon();
console.log(pikachu.getDefensa());
console.log(pikachu.getNombre());

const pokedex = new Pokedex([pikachu, bulbasur]);
pokedex.printPokemons();
pokedex.eliminarPokemom(pikachu);
pokedex.printPokemons();
 */
