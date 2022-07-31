/**
 * Calculate factorial number
 * @param n 
 * @returns number
 */
export function factRecursivo(n: number): number {
  if (n == 0) {
    return 1;
  }
  return n * factRecursivo(n - 1);
}

/**
 * Convert factorial to decimal
 * @param str 
 * @returns number
 */
export function factorialToDecimal(str: string): number {
  let value: number = 0;
  let factorial: number = 0;
  for (let step = 0; step < str.length; step++) {
    value += parseInt(str.charAt(step)) *
      factRecursivo(str.length - 1 - factorial);
    factorial++;
  }
  return value;
}

// console.log(factorialToDecimal("341010"));

/**
 * Convert decimal to foradic
 * @param decimal 
 * @returns string
 */
export function decimalToFactorial(decimal: number): string {
  let n: number = 0;
  let fact: number = 0;
  let result: string = "";
  let numero: number = decimal;
  let count: number = 0;
  let val: boolean = true;
  while (fact <= numero) {
    n++;
    fact = factRecursivo(n);
  }
  n = n - 1;
  fact = 0;
  while (fact <= numero) {
    count++;
    if (val) {
      count = 0;
    }
    val = false;
    fact = factRecursivo(n) * count;
    if (fact > numero) {
      val = true;
      count--;
      numero = numero - (factRecursivo(n) * count);
      result += count.toString();
      count = 0;
      n--;
      if (n != 0) {
        fact = 0;
      }
    }
  }
  result += 0;
  return result;
}

/* console.log(decimalToFactorial(463)); */
