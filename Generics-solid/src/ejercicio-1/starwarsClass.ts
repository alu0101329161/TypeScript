/* eslint-disable max-len */
import {universeType, Fighter, estadisticasType} from './fighterClass';
/**
 * Posibles bandos de starwars
 */
type bandoType = ("Imperio" | "Rebeldes" | "Jedi" | "Siths" | "Fuerza")

/**
 * Clase que representa a starWars
 */
export class StarWars extends Fighter {
  /**
   * Creamos el objeto starwars
   * @param  {string} nombre
   * @param  {number} peso
   * @param  {number} altura
   * @param  {estadisticasType} estadisticas
   * @param  {string} frase
   * @param  {universeType} universo
   * @param  {bandoType} privatetipo
   */
  constructor(nombre: string, peso: number, altura: number,
      estadisticas: estadisticasType, frase: string, universo: 
        universeType, private tipo: bandoType) {
    super(nombre, peso, altura, estadisticas, frase, universo);
  }
  /**
 * @returns a que faccion pertenece
 */
  public getTipo() {
    return this.tipo;
  }
  /**
   * @returns cambiamos la faccion
   */
  setTipo(value: bandoType) {
    this.tipo = value;
  }
}

/**
 * Clase para imprmir el objeto starWars
 */
export class StarWarsPrint {
  /**
   * Objeto con el que impirmimos
   * @param  {StarWars} privatestarwars
   */
  constructor(private starwars: StarWars) {
  }
  /**
   * Impirmos el objeto starWars
   * @returns string
   */
  print(): string {
    const result = `El nombre es ${this.starwars.getNombre()}, tiene un peso de ${this.starwars.getPeso()}, una altura de ${this.starwars.getAltura()}, 
    es de tipo ${this.starwars.getTipo()} y sus estadisticas son:
    Ataque = ${this.starwars.getAtaque()},
    Defensa = ${this.starwars.getDefensa()},
    Velocidad = ${this.starwars.getVelocidad()},
    Vida = ${this.starwars.getVida()},
    Frase = ${this.starwars.getFrase()},
    Universo = ${this.starwars.getUniverso()}`;
    console.log(result);
    return result;
  }
}
