/* eslint-disable max-len */
import {universeType, Fighter, estadisticasType} from './fighterClass';

/**
 * Posibles entidades dentro del universo Marvel
 */
type entidadType = ("Gods" | "Death" | "Elementals" | "Endless" | "Wizards" | "Demons");

/**
 * Clase que representa al universo DC
 */
export class DC extends Fighter {
  /**
   * Creamos el objeto del universo
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
   * Retornaos el tipo de DC
   */
  public getTipo() {
    return this.tipo;
  }
  /**
   * Cambiamos el tipo de DC
   * @param  {entidadType} value
   */
  setTipo(value: entidadType) {
    this.tipo = value;
  }
}

/**
 * Clase para imprimir el objeto DC
 */
export class DCPrint {
  /**
   * Creamos el objeto
   * @param  {DC} privatedc
   */
  constructor(private dc: DC) {
  }
  /**
   * Imprimimos el objeto DC
   * @returns string
   */
  print(): string {
    const result = `El nombre es ${this.dc.getNombre()}, tiene un peso de ${this.dc.getPeso()}, una altura de ${this.dc.getAltura()}, 
          es de tipo ${this.dc.getTipo()} y sus estadisticas son:
          Ataque = ${this.dc.getAtaque()},
          Defensa = ${this.dc.getDefensa()},
          Velocidad = ${this.dc.getVelocidad()},
          Vida = ${this.dc.getVida()},
          Frase = ${this.dc.getFrase()},
          Universo = ${this.dc.getUniverso()}`;
    console.log(result);
    return result;
  }
}

