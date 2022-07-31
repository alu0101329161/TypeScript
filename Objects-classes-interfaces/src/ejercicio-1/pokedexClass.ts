/* eslint-disable max-len */
import {Pokemon} from "./pokemonClass";

/**
 * @class Estructura que almacena todos los pokemon que
 * queramos
 */
export class Pokedex {
  /**
   * Recibimos el array de pokemons
   * @param pokemons 
   */
  constructor(private pokemons: Pokemon[]) { }

  /**
   * Imprimos los pokemos de la pokedex
   */
  public printPokemons() {
    console.table(this.pokemons);
  }
  /**
   * Añadimos un pokemon a la pokedex
   * @param pokemon 
   */
  public añadirPokemon(pokemon: Pokemon) {
    this.pokemons.push(pokemon);
    return "Pokemon añadido";
  }
  /**
   * ELiminamos un pokemon de la pokedex
   * @param pokemon 
   */
  public eliminarPokemom(pokemon: Pokemon): string {
    let result= "";
    const indice: number = this.pokemons.indexOf(pokemon);
    if (indice === -1) {
      result = "EL pokemon que intenta eliminar no existe";
      console.log(result);
      return result;
    }
    this.pokemons.splice(indice, 1);
    return "Pokemon eliminado correctamente";
  }
}

// Pruebas 
/* const pikachu = new Pokemon("Pikachu", 10, 2.3, "electrico", 2, 3, 5, 6);
const bulbasur = new Pokemon("Bulbasur", 10, 2.3, "agua", 2, 3, 5, 6);

pikachu.printPokemon();
console.log(pikachu.getDefensa());
console.log(pikachu.getNombre());

const pokedex = new Pokedex([pikachu, bulbasur]);
pokedex.printPokemons();
pokedex.eliminarPokemom(pikachu);
pokedex.printPokemons(); */
