/* eslint-disable max-len */
import {universeType, Fighter, estadisticasType} from './fighterClass';

/**
 * Posibilidades entre los tipos de pokemons
 */
type pokemonType = ("planta" | "fuego" | "agua" | "electrico");

/**
 * @class Clase que permite representar Pokemon
 * ```typescript
 * const pikachu = new Pokemon("Pikachu", 10, 2.3, "electrico", [2, 3, 5, 6]);
 * ```
 */
export class Pokemon extends Fighter {
  constructor(nombre: string, peso: number, altura: number, estadisticas: estadisticasType,
      frase: string, universo: universeType, private tipo: pokemonType) {
    super(nombre, peso, altura, estadisticas, frase, universo);
  }
  /**
   * @returns el tipo del pokemon
   */
  public getTipo() {
    return this.tipo;
  }
  /**
   * Cambiamos el tipo del pokemon
   * @param value 
   */
  setTipo(value: pokemonType) {
    this.tipo = value;
  }
}

/**
 * Clase para imprmir al pokemon
 */
export class PokemonPrint {
  /**
   * Creamos el objeto con el que podemos
   * imprimir
   * @param  {Pokemon} privatepokemon
   */
  constructor(private pokemon: Pokemon) {
  }
  /**
   * Imprimimos el objeto pokemonPrint
   * @returns string
   */
  print(): string {
    const result = `El nombre es ${this.pokemon.getNombre()}, tiene un peso de ${this.pokemon.getPeso()}, una altura de ${this.pokemon.getAltura()}, 
    es de tipo ${this.pokemon.getTipo()} y sus estadisticas son:
    Ataque = ${this.pokemon.getAtaque()},
    Defensa = ${this.pokemon.getDefensa()},
    Velocidad = ${this.pokemon.getVelocidad()},
    Vida = ${this.pokemon.getVida()},
    Frase = ${this.pokemon.getFrase()},
    Universo = ${this.pokemon.getUniverso()}`;
    console.log(result);
    return result;
  }
}

// Pruebas
/* const pikachu = new Pokemon("Pikachu", 10, 2.3, "electrico", 2, 3, 5, 6); */
/* const bulbasur = new Pokemon("Bulbasur", 10, 2.3, "agua", 2, 3, 5, 6);

pikachu.printPokemon();
console.log(pikachu.getAtaque());
console.log(pikachu.getNombre());
 */
