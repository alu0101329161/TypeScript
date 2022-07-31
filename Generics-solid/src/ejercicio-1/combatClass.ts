/* eslint-disable max-len */
import {DrangonBall} from "./dragonballClass";
import {Fighter} from "./fighterClass";
import {Pokemon} from "./pokemonClass";
import {DC} from "./dcClass";
import {StarWars} from "./starwarsClass";
/**
 * Clase que Simula combate entre dos luchadores
 */
export class Combat {
  constructor(private atacante: Fighter, private defensor: Fighter) { }

  private pokemonBattle(universo: string, opponentUniverso: string,
      attack: number, opponentDefense: number): number {
    let neutral: number = 0;
    let result: number = 0;
    let type;
    let opponentType;

    if (universo === opponentUniverso) {
      if (this.atacante instanceof Pokemon && this.defensor instanceof Pokemon) {
        type = this.atacante.getTipo();
        opponentType = this.defensor.getTipo();
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
      } else if (this.atacante instanceof DrangonBall && this.defensor instanceof DrangonBall) {
        type = this.atacante.getTipo();
        opponentType = this.defensor.getTipo();
        if (type === 'Saiyan' && opponentType !== 'Saiyan') {
          result = 1000;
        } else {
          result = 10;
        }
      } else if (this.atacante instanceof DC && this.defensor instanceof DC) {
        result = 50;
      } else if (this.atacante instanceof StarWars && this.defensor instanceof StarWars) {
        type = this.atacante.getTipo();
        opponentType = this.defensor.getTipo();
        if (type === 'Jedi' && opponentType !== 'Jedi') {
          result = 1000;
        } else {
          result = 10;
        }
      } else {
        result = 50;
      }
    } else if (universo === 'Pokemon') {
      switch (opponentUniverso) {
        case 'DragonBall':
          result = 0;
          break;
        case 'StarWars':
          result = 0;
          break;
        case 'DC':
          result = 0;
          break;
        case 'Marvel':
          result = 0;
          break;
      }
    } else if (universo === 'DragonBall') {
      result = 10000;
    } else if (universo === 'Marvel') {
      result = 100;
    } else if (universo === 'DC') {
      result = 100;
    }
    neutral = 50 * (attack / opponentDefense);
    return result * neutral;
  }
  /**
   * Realizamos simulacion del combate hasta que la vida de alguno llegue
   * a cero
   */
  public start(): string {
    let result;
    let daño: number = 0;
    let quienAtaca: number = 0;
    console.log(this.atacante.getNombre());
    console.warn("VS");
    console.log(this.defensor.getNombre());
    console.log("///////////////");
    while (true) {
      console.log(`Ataca ${this.atacante.getNombre()} ${this.atacante.getFrase()}`);
      daño = this.pokemonBattle(this.atacante.getUniverso(), this.defensor.getUniverso(),
          this.atacante.getAtaque(), this.defensor.getDefensa());
      if (this.defensor.getVida() - daño > 0) {
        this.defensor.setVida(this.defensor.getVida() - daño);
      } else {
        // Para no imprimir vida negativa
        this.defensor.setVida(0);
      }
      console.log(`La vida del ${this.defensor.getNombre()} es ${this.defensor.getVida()}`);
      if (this.defensor.getVida() === 0) {
        result = `EL ganador es ${this.atacante.getNombre()} !!!!!!!!!!`;
        console.log(result);
        return result;
      }
      console.log(`Ataca ${this.defensor.getNombre()} ${this.defensor.getFrase()}`);
      daño = this.pokemonBattle(this.defensor.getUniverso(), this.atacante.getUniverso(),
          this.defensor.getAtaque(), this.atacante.getDefensa());
      if (this.atacante.getVida() - daño > 0) {
        this.atacante.setVida(this.atacante.getVida() - daño);
      } else {
        // Para no imprimir vida negativa
        this.atacante.setVida(0);
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

/* const luchador1 = new Pokemon("Pikachu", 10, 20, 20, 10, 20, 30, "Raatatatatatat", "Pokemon", "planta");
const luchador2 = new DrangonBall("Goku", 10, 10, 10, 10, 10, 100, "Ondavitalll", "DragonBall", "Saiyan");
const combate = new Combat(luchador1, luchador2);
combate.start();
 */
