
/**
 * Calculate factorial number
 * @param n 
 * @returns number
 */
function factRecursivo(n: number): number {
  if (n == 0) {
    return 1;
  }
  return n * factRecursivo(n - 1);
}
/**
 * Permite conocer las cabezas de Cerberus despues de 
 * los ataques de Diana
 * @param initialHead 
 * @param numberOfAttacks 
 * @param newHead 
 * @returns FinalHead: number
 */
export function princessDiana(initialHead: number,
    newHead: number, numberOfAttacks: number): number {
  let actualHead: number = 0;
  for (let step = 0; step < numberOfAttacks; step++) {
    actualHead = initialHead - 1 + newHead * factRecursivo(step + 1);
    // console.log(actualHead);
    initialHead = actualHead;
  }
  return actualHead;
}

console.log(princessDiana(2, 1, 1)); // 2 */
console.log(princessDiana(5, 10, 3)); // 92
console.log(princessDiana(3, 8, 9)); // 3272898 
console.log(princessDiana(5, 2, 7)); // 11824
console.log(princessDiana(2, 3, 10)); // 12113731 */
