

/**
 * Transform Snake to CamelCase
 * Reemplaza los guiones y pone mayúsculas en la siguiente
 * posición
 * @param string 
 * @returns string
 */
export function fromSnakeToCamelCase(string: string): string {
  let newStr: string = "";
  const regex = /(_\w)/g;
  newStr = string.replace(regex,
      // accedemos a los match encontrados
      function apply(character: string) {
        const auxCharacter = character.charAt(1);
        return auxCharacter.toUpperCase();
      });
  return newStr;
}

/* console.log(fromSnakeToCamelCase("sample_string")); */

/**
 * Transform CamelCase to Snake
 * Añade guion en la posicion anterior a las mayúsculas
 * @param string 
 * @returns string
 */
export function fromCamelToSnake(string: string): string {
  let newStr: string = "";
  const regex = /[\w]([A-Z])/g;
  newStr = string.replace(regex,
      // accedemos a los match encontrados
      function apply(character: string): string {
        const auxCharacter = character.charAt(0) + "_" + character.charAt(1);
        return auxCharacter.toLowerCase();
      });
  return newStr;
}

/* console.log(fromCamelToSnake("theStealthWarrior")); */
