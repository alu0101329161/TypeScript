/* eslint-disable max-len */

/**
 * @type Almacenamos los valores de ataque, defensa, velocidad, vida
 * en una tupla de 4 elemtos pero no lo uso para implementar el
 * console.table
 */
// type estadisticasType = [number, number, number, number];

/**
 * Posibilidades entre los tipos de pokemons
 */
type pokemonType = ("planta" | "fuego" | "agua" | "electrico");

// Interfaz para implementar clase Pokemon
/* private interface InfoPokemon {
  nombre: string;
  peso: number;
  altura: number;
  tipo: string;
  estadisticas: estadisticasType;
} */

/**
 * @class Clase que permite representar Pokemon
 * ```typescript
 * const pikachu = new Pokemon("Pikachu", 10, 2.3, "electrico", [2, 3, 5, 6]);
 * ```
 */
export class Pokemon {
  /**
   * COnstructor que recibe informacion básica del pokemon
   * @param  {string} publicreadonlynombre
   * @param  {number} publicreadonlypeso
   * @param  {number} publicreadonlyaltura
   * @param  {string} publicreadonlytipo
   * @param  {estadisticasType} publicestadisticas
   */
  constructor(private nombre: string, private peso: number,
    private altura: number, private tipo: pokemonType,
    private ataque: number, private defensa: number,
    private velocidad: number, private vida: number) {
    // Comporbamos que los valores han sido correctamente introducidos
    if (nombre === "") {
      this.nombre = "Defecto";
    }
    if (peso <= 0) {
      this.peso = 99;
    }
    if (altura <= 0) {
      this.peso == 99;
    }
    if (ataque <= 0) {
      this.ataque = 99;
    }
    if (defensa <= 0) {
      this.defensa = 99;
    }
    if (velocidad <= 0) {
      this.defensa = 99;
    }
    if (vida <= 0) {
      this.vida = 99;
    }
  }
  /**
   * @returns ataque del pokemon
   */
  public getAtaque() {
    return this.ataque;
  }
  /**
   * @returns defensa del pokemon
   */
  public getDefensa() {
    return this.defensa;
  }
  /**
   * @returns velocidad del pokemon
   */
  public getVelocidad() {
    return this.velocidad;
  }
  /**
   * @returns vida del pokemon
   */
  public getVida() {
    return Math.round(this.vida);
  }
  /**
   * @returns nombre del pokemon
   */
  public getNombre() {
    return this.nombre;
  }
  /**
   * @returns peso del pokemom
   */
  public getPeso() {
    return this.peso;
  }
  /**
   * @returns altura del pokemon
   */
  public getAltura() {
    return this.altura;
  }
  /**
   * @returns tipo del pokemon
   */
  public getTipo() {
    return this.tipo;
  }
  /**
  * Establecemos nueva vida del pokemon
  * @param  {number} valor
  */
  public setHp(valor: number) {
    this.vida = valor;
  }
  /**
   * Imprimiratributos básicos del pokemon
   * ```typescript
   * pikachu.printPokemon();
   * ```
   */
  public printPokemon(): string {
    const result = `El nombre del pokemon es ${this.nombre}, tiene un peso de ${this.peso}, una altura de ${this.altura}, es de tipo ${this.tipo} y sus estadisticas son:
    Ataque = ${this.ataque},
    Defensa = ${this.defensa},
    Velocidad = ${this.velocidad},
    Vida = ${this.vida}`;
    console.log(result);
    return result;
  }
}

// Pruebas
/* const pikachu = new Pokemon("Pikachu", 10, 2.3, "electrico", 2, 3, 5, 6);
const bulbasur = new Pokemon("Bulbasur", 10, 2.3, "agua", 2, 3, 5, 6);

pikachu.printPokemon();
console.log(pikachu.getAtaque());
console.log(pikachu.getNombre()); */

