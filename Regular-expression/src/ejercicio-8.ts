
/**
 * Daño que recibe el oponentes despues del ataque de mi
 * pokemon
 * @param type 
 * @param opponentType 
 * @param attack 
 * @param opponentDefense 
 * @returns number
 */
export function pokemonBattle(type: string, opponentType: string,
    attack: number, opponentDefense: number): number {
  const neutral: number = 50 * (attack / opponentDefense);
  let result: number = 0;

  if (type == "agua") {
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

  if (type == "fuego") {
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
    if (opponentType === "electrico") {
      result = 0.5;
    } else if (opponentType === "fuego") {
      result = 1;
    } else if (opponentType === "agua") {
      result = 2;
    } else if (opponentType === "planta") {
      result = 1;
    }
  }

  if (type === 'planta') {
    if (opponentType === "planta") {
      result = 0.5;
    } else if (opponentType === "fuego") {
      result = 0.5;
    } else if (opponentType === "agua") {
      result = 2;
    } else if (opponentType === "electrico") {
      result = 1;
    }
  }

  return result * neutral;
}


console.log(pokemonBattle("fuego", "electrico", 80, 100)); // 40
console.log(pokemonBattle("agua", "planta", 100, 100)); // 25
