
/**
 * Mueve los zeros al final manteniendo el orden
 * @param array 
 * @returns number[] array con los zeros al final
 */
export function moveZeros(array: number[]): number[]|undefined {
  const zero: number[] = [];
  if (array.length < 1) {
    return undefined;
  }
  if (array.includes(0) == false) {
    return array;
  }
  for (let step = 0; step < array.length; step++) {
    if (array[step] === 0) {
      delete array[step];
      zero.push(0);
    }
  }
  return array.filter(Number).concat(zero);
}

console.log(moveZeros([1, 0, 1, 2, 0, 1, 3]));
console.log(moveZeros([1, 1, 2, 1, 3]));
console.log(moveZeros([]));
