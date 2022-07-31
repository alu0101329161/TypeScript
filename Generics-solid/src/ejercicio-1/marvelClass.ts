/* eslint-disable max-len */
import {universeType, Fighter, estadisticasType} from './fighterClass';

/**
 * Tipo de soldado villano o heroe
 */
type entidadType = ("Superhéroes" | "Supervillanos");

/**
 * Clase que representa al Universo Marvel
 */
export class Marvel extends Fighter {
  /**
   * Añadimos el objeto de la clase Marvel
   * @param  {string} nombre
   * @param  {number} peso
   * @param  {number} altura
   * @param  {estadisticasType} estadisticas
   * @param  {string} frase
   * @param  {universeType} universo
   * @param  {entidadType} privatetipo
   */
  constructor(nombre: string, peso: number, altura: number,
      estadisticas: estadisticasType, frase: string, 
      universo: universeType, private tipo: entidadType) {
    super(nombre, peso, altura, estadisticas, frase, universo);
  }
  /**
 * @returns tipo del Superheroes o Villano
 */
  public getTipo() {
    return this.tipo;
  }
  /**
   * @returns Cambiamos el tipo de objeto
   */
  setTipo(value: entidadType) {
    this.tipo = value;
  }
}

/**
 * Clase para imprimir el obejto de la clase
 * Marvel
 */
export class MarvelPrint {
  /**
   * Creamos el objeto
   * @param  {Marvel} privatemarvel
   */
  constructor(private marvel: Marvel) {
  }
  /**
   * Atributos del universo Marvel
   * @returns string
   */
  print(): string {
    const result = `El nombre es ${this.marvel.getNombre()}, tiene un peso de ${this.marvel.getPeso()}, una altura de ${this.marvel.getAltura()}, 
      es de tipo ${this.marvel.getTipo()} y sus estadisticas son:
      Ataque = ${this.marvel.getAtaque()},
      Defensa = ${this.marvel.getDefensa()},
      Velocidad = ${this.marvel.getVelocidad()},
      Vida = ${this.marvel.getVida()},
      Frase = ${this.marvel.getFrase()},
      Universo = ${this.marvel.getUniverso()}`;
    console.log(result);
    return result;
  }
}
