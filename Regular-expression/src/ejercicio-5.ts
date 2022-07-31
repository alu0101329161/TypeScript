
/**
 * Devolver secuencia más alta posible
 * @param numero 
 * @returns number
 */
export function descendingOrder(numero: number): number {
  let temp: string = numero.toString();
  let size: number = temp.length;
  let result: string = "";
  let part1 :string; let part2: string;
  while (size != 0) {
    let max = parseInt(temp.charAt(0));
    let maxIndex = 0;
    for (let step = 0; step < temp.length; step++) {
      if (parseInt(temp.charAt(step)) >= max) {
        max = parseInt(temp.charAt(step));
        maxIndex = step;
      } else {
        max = max;
      }
    }
    part1 = temp.substring(0, maxIndex);
    part2 = temp.substring(maxIndex +1, temp.length);
    temp = part1 + part2;
    size--;
    result += max;
  }
  return parseInt(result);
}


/* console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789)); */
