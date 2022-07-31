
/**
 * Recibimos un string y convertimos al alfabeto inverso de 5 en 5 y 
 * si es más de 5 o menos de 5 retornamos solo esas posiciones
 * @param str
 *  @returns array de string o undefined
 */
export function encodeMessage(str: string): string[] | undefined {
  const alfabeto: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", 
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", 
    "v", "w", "x", "y", "z"];

  let result = "";
  const cifrado: string[] = [];
  let count: number = 0;

  for (let step = 1; step <= str.length; step++) {
    if (alfabeto.indexOf(str[step - 1]) === -1) {
      return undefined;
    }

    result += alfabeto[alfabeto.length - 1 - alfabeto.indexOf(str[step - 1])];
    count++;

    if (count == 5) {
      cifrado.push(result);
      count = 0;
      result = "";
    }
    if (step !== 5 && step == str.length && result !== '') {
      cifrado.push(result);
    }
  }
  return cifrado;
}

/* console.log(encodeMessage("abcdf"))
console.log(encodeMessage("abcdfghijk"))
console.log(encodeMessage("abcdfghijklm"))
console.log(encodeMessage("abc")) */

/**
 * Decodifica el mensaje pasado en forma de vector de 5 en 5
 * @param array
 * @returns string o undefined dependiendo de la longitud recibida 
 */
export function decodeMessage(array: string[]): string | undefined {
  const alfabeto: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", 
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
    "w", "x", "y", "z"];
  if (array.length === 0) {
    return undefined;
  }

  for (let step = 0; step < array.length; step++) {
    if (array[step].length !== 5) {
      return undefined;
    }
  }

  let result: string = "";
  let variable: number = 0;

  for (let step = 0; step < array.length; step++) {
    for (let index = 0; index < array[step].length; index++) {
      variable = alfabeto.indexOf(array[step][index]);
      if (variable === -1) {
        return undefined;
      }
      result += alfabeto[alfabeto.length - 1 - variable];
    }
  }

  return result;
}

/* console.log(decodeMessage(["abcde"]))
console.log(decodeMessage(["abcde", "fghij"])) */
