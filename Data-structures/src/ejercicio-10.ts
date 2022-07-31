/* eslint-disable max-len */

type PointType = [number, number]
/**
 * Comprueba si en 10 min llegas al origen luego de dar
 * un paseo  
 * @param array 
 * @returns boolean or undefined dependiendo del tamaño del array
 */
export function generationApp(array: string[]): boolean | undefined {
  const posicion: PointType = [0, 0];
  if (array.length === 0 || array.includes("")) {
    return undefined;
  } else if (array.length > 10) {
    array.length = 10;
  }
  for (let step = 0; step < array.length; step++) {
    switch (array[step]) {
      case 'n':
        posicion[0]++;
        break;
      case 's':
        posicion[0]--;
        break;
      case 'e':
        posicion[1]++;
        break;
      case 'o':
        posicion[1]--;
        break;
    }
  }
  if (posicion[0] === 0 && posicion[1] === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(generationApp(['n', 'n', 's', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(generationApp(['e', 'e', 'o', 'o']));
console.log(generationApp(['n', 'e', 's', 'o']));
console.log(generationApp(['n', 'n', 'o', 'o']));
console.log(generationApp([""]));
