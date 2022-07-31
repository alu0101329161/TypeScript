/**
 * Convierte un array  en un string comprimido por rangos
 * @param array 
 * @returns string o undefined
 */
export function fromArrayToRanges(array: number[]): string | undefined {
  let actual: number = 0;
  let pibote: number = 0;
  let result: string = "";
  // En caso de un array de longitud cero retornamos undefined
  if (array.length == 0) {
    return undefined;
  }
  // Mientras sean iguales aumentamos desplazamiento de pibote
  while (actual < array.length) {
    pibote = actual;
    for (pibote + 1; pibote < array.length; pibote++) {
      if (array[pibote + 1] !== array[pibote] + 1) {
        break;
      }
    }
    // Una vez hemos llegado a un numero que no es igual al que
    // estampos mirando 
    if (actual !== pibote) {
      result += array[actual] + "_" + array[pibote] + ",";
      actual = pibote + 1;
    } else {
      result += array[actual] + ",";
      actual++;
    }
  }
  return result.substring(0, result.length - 1);
}

console.log(fromArrayToRanges([5, 6, 7, 9, 12, 13, 14])); // “5_7, 9, 12_14”
console.log(fromArrayToRanges([31, 32, 33]));
console.log(fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7])); // “-3_-1, 3, 5_7”
console.log(fromArrayToRanges([3, 5, 6, 7, 9, 10])); // “3, 5_7, 9_10”
console.log(fromArrayToRanges([17]));
console.log(fromArrayToRanges([]));
/**
 * Convierte un string comprimido en ragos en un
 * array sin comprimir
 * @param str 
 * @returns array de tipo numbers
 */
export function fromRangesToArray(str: string): number[]|undefined {
  const array: string[] = str.split(",");
  let arrayRange: string[] = [];
  let result = "";
  if (str.length == 0) {
    return undefined;
  }
  for (let step = 0; step < array.length; step++) {
    if (array[step].includes('_')) {
      arrayRange = array[step].split('_');
      for (let i = parseInt(arrayRange[0]); i <= parseInt(arrayRange[1]); i++) {
        result += "," + i + " ";
      }
      arrayRange = [];
    } else {
      result += "," + array[step]; + ",";
    }
  }
  result = result.slice(1, result.length);
  const resultNumber = result.split(',').map(Number);
  return resultNumber;
}

console.log(fromRangesToArray("5_7,9,12_14"));
console.log(fromRangesToArray("-3_-1,3,5_7"));
console.log(fromRangesToArray("17"));
console.log(fromRangesToArray("3,5_7,10"));
console.log(fromRangesToArray(""));
