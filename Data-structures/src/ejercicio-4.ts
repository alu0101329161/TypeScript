/* eslint-disable max-len */
/**
 * Comprobar que las palabras de un array están encadenadas
 * @param str 
 * @returns string
 */
export function meshArray(str: string[]): string|undefined {
  let result = "";
  let jump = false;
  if (str.length <= 1) {
    jump = true;
  }
  for (let steap = 0; steap < str.length - 1; steap++) {
    const word: string = str[steap];
    const nextword: string = str[steap + 1];
    let wordIndex: number = word.length - 1;
    let nextwordIndex: number = 0;

    // Recorremos la primera palabra de izq a dch y 
    // hasta encontrar la primera coincidencia
    while (word[wordIndex] !== nextword[nextwordIndex]) {
      wordIndex--;
      if (wordIndex < 0) {
        jump = true;
        break;
      }
    }
    // Vamos guardando en result las que sean iguales en ambas
    // palabras
    for (let index = wordIndex; index < word.length; index++) {
      if (word[index] === nextword[nextwordIndex]) {
        result += word[index];
        nextwordIndex++;
      } else {
        jump = true;
        break;
      }
    }
  }
  if (jump == true) {
    return "Error al encadenar";
  } else {
    return result;
  }
}

console.log(meshArray(["kingdom", "dominator", "torusual", "allegory"]));
console.log(meshArray(["allow", "lowering", "ringmaster", "terror"]));
console.log(meshArray(["kingdom", "dominator", "notorious", "usual", "allegory"]));
