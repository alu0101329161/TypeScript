
/**
 * Verifica si es un ISNB valido 
 * @param string 
 * @returns 
 */
export function isValidISBN(string: string): boolean {
  let value: number = 0;
  let count: number = 10;
  for (let step = 0; step < string.length; step++) {
    if (string.charAt(step) != '-') {
      if (string.charAt(step) == 'X') {
        value += 10 * count;
        count --;
      } else {
        value += parseInt(string.charAt(step)) * count;
        count--;
      }
    }
  }
  if (value % 11 == 0) {
    return true;
  }
  return false;
}

/* console.log(isValidISBN("3-598-21507-X"));
console.log(isValidISBN("359821507X"));
console.log(isValidISBN("3-598-21508-8"));
console.log(isValidISBN("3-598-21508-")); */
