/* eslint-disable max-len */

/**
 * Calcula la media y concatena
 * @param array 
 * @returns tupla con el valor de la media de numero y la
 * concatenacion de los string
 */
export function meanAndConcatenate(array: (number | string)[]): [number, string]|undefined {
  let count: number = 0;
  let mean: number = 0;
  let str: string = "";
  for (let step = 0; step < array.length; step++) {
    const value = array[step];
    switch (typeof(value)) {
      case "number":
        count ++;
        mean += value;
        break;
      case "string":
        str += value.toString();
        break;
    }
  }
  mean /= count;
  // Dividir entre cero es una indeterminacion
  if (count == 0 || str == "") {
    return undefined;
  }
  return [mean, str]; 
}

console.log(meanAndConcatenate(['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0]));
console.log(meanAndConcatenate(['u', 6, 'd', 1, 'i', 'w', 6]));
console.log(meanAndConcatenate(['u']));
console.log(meanAndConcatenate([]));
