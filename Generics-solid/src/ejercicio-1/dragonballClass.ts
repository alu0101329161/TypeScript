/* eslint-disable max-len */
import {universeType, Fighter, estadisticasType} from './fighterClass';

/**
 * Razas del universo DragonBall
 */
type razaType = ("Androides" | "Animales" | "Dragones" | "Terrícolas" | "Namekianos" | "Ogro" | "Saiyan");


/**
 * Clase que representa al universo DragonBall
 */
export class DrangonBall extends Fighter {
  constructor(nombre: string, peso: number, altura: number,
      estadisticas: estadisticasType, frase: string, 
      universo: universeType, private tipo: razaType) {
    super(nombre, peso, altura, estadisticas, frase, universo);
  }
  /**
   * Conseguir la raza
   * @returns razaType
   */
  public getTipo(): razaType {
    return this.tipo;
  }
  /**
   * Cambiar la raza
   * @param value 
   */
  setTipo(value: razaType): void {
    this.tipo = value;
  }
}

/**
 * Clase para imprimir el objeto DragonBall
 */
export class DragonBallPrint {
  /**
   * Creamos el objeto
   * @param  {DrangonBall} privatedragonball
   */
  constructor(private dragonball: DrangonBall) {
  }
  /**
   * Imprimimos el objeto dragonBall
   * @returns string
   */
  print(): string {
    const result = `El nombre es ${this.dragonball.getNombre()}, tiene un peso de ${this.dragonball.getPeso()}, una altura de ${this.dragonball.getAltura()}, 
        es de tipo ${this.dragonball.getTipo()} y sus estadisticas son:
        Ataque = ${this.dragonball.getAtaque()},
        Defensa = ${this.dragonball.getDefensa()},
        Velocidad = ${this.dragonball.getVelocidad()},
        Vida = ${this.dragonball.getVida()},
        Frase = ${this.dragonball.getFrase()},
        Universo = ${this.dragonball.getUniverso()}`;
    console.log(result);
    return result;
  }
}
