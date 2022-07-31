/* eslint-disable max-len */
import {Pokemon} from "./pokemonClass";
/**
 * Clase que Simula combate entre dos pokemons
 */
export class Combat {
  /**
   * Recibimos los dos pokemons que van a pelear
   * @param atacante 
   * @param defensor 
   */
  constructor(private atacante: Pokemon, private defensor: Pokemon) { }

  /**
   * Hacemos el caculo del daño segun las estadisticas de 
   * cada pokemon
   * @param type 
   * @param opponentType 
   * @param attack 
   * @param opponentDefense 
   * @returns 
   */
  private pokemonBattle(type: string, opponentType: string,
      attack: number, opponentDefense: number): number {
    let neutral: number = 0;
    let result: number = 0;

    if (type === "agua") {
      switch (opponentType) {
        case "agua":
          result = 0.5;
          break;
        case "fuego":
          result = 2;
          break;
        case "planta":
          result = 0.5;
          break;
        case "electrico":
          result = 0.5;
          break;
        default:
          result = -1;
      }
    }
    if (type === "fuego") {
      switch (opponentType) {
        case "fuego":
          result = 0.5;
          break;
        case "planta":
          result = 2;
          break;
        case "agua":
          result = 0.5;
          break;
        case "electrico":
          result = 1;
          break;
        default:
          result = -1;
      }
    }
    if (type === "electrico") {
      switch (opponentType) {
        case "electrico":
          result = 0.5;
          break;
        case "fuego":
          result = 1;
          break;
        case "agua":
          result = 2;
          break;
        case "planta":
          result = 1;
          break;
        default:
          result = -1;
      }
    }
    if (type === "planta") {
      switch (opponentType) {
        case "planta":
          result = 0.5;
          break;
        case "fuego":
          result = 0.5;
          break;
        case "agua":
          result = 2;
          break;
        case "electrico":
          result = 1;
          break;
        default:
          result - 1;
      }
    }
    neutral = 50 * (attack / opponentDefense);
    return result * neutral;
  }
  /**
   * Realizamos simulacion del combate hasta que la vida de alguno llegue
   * a cero
   * @returns string indicando el ganador de la batalla
   */
  public start(): string {
    let daño: number = 0;
    let quienAtaca: number = 0;
    let result: string = "";
    this.atacante.printPokemon();
    console.log("VS");
    this.defensor.printPokemon();
    while (true) {
      console.log(`Ataca ${this.atacante.getNombre()}`);
      daño = this.pokemonBattle(this.atacante.getTipo(), this.defensor.getTipo(),
          this.atacante.getAtaque(), this.defensor.getDefensa());
      if (this.defensor.getVida() - daño > 0) {
        this.defensor.setHp(this.defensor.getVida() - daño);
      } else {
        // Para no imprimir vida negativa
        this.defensor.setHp(0);
      }
      console.log(`La vida del ${this.defensor.getNombre()} es ${this.defensor.getVida()}`);
      if (this.defensor.getVida() === 0) {
        result =`EL ganador es ${this.atacante.getNombre()} !!!!!!!!!!`;
        console.log(result);
        return result;
      }
      console.log(`Ataca ${this.defensor.getNombre()}`);
      daño = this.pokemonBattle(this.defensor.getTipo(), this.atacante.getTipo(),
          this.defensor.getAtaque(), this.atacante.getDefensa());
      if (this.atacante.getVida() - daño > 0) {
        this.atacante.setHp(this.atacante.getVida() - daño);
      } else {
        // Para no imprimir vida negativa
        this.atacante.setHp(0);
      }
      console.log(`La vida del ${this.atacante.getNombre()} es ${this.atacante.getVida()}`);
      quienAtaca = 0;
      if (this.atacante.getVida() == 0) {
        result = `EL ganador es ${this.defensor.getNombre()} !!!!!!!!!!`;
        console.log(result);
        return result;
      }
    }
  }
}

// Pruebas
/* const pikachu = new Pokemon("Pikachu", 10, 2.3, "electrico", 1, 3, 5, 150);
const bulbasur = new Pokemon("Bulbasur", 10, 2.3, "agua", 2, 3, 5, 100);

const combate = new Combat(pikachu, bulbasur);
combate.start(); */
