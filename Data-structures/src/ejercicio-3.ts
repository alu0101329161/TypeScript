
/**
 * Devuelve segun los colores el valor de la resistencia
 * @param input 
 * @returns number
 */
export function decodeResistor(input: string[]): number|undefined {
  if (input.length == 0 || input.includes("")) {
    return undefined;
  }
  const color: string[] = [
    'Negro', 'Marron', 'Rojo', 'Naranja',
    'Amarillo', 'Verde', 'Azul', 'Violeta', 'Gris', 'Blancos'];
  let result: string = "";
  if (input.length > 2) input.length = 2;
  for (let steap = 0; steap < input.length; steap++) {
    if (color.indexOf(input[steap]) == -1) {
      return undefined;
    }
    result += String(color.indexOf(input[steap]));
  }
  return parseInt(result);
}

console.log(decodeResistor(["Marron"]));
console.log(decodeResistor(["Pepe", "Marron"])); // comprobar Pepe
console.log(decodeResistor(["Marron", "Verde", "Violeta"]));
console.log(decodeResistor(["Marron", "Verde", "Violeta", "Azul"]));
