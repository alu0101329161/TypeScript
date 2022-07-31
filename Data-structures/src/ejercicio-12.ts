/* eslint-disable max-len */
// Creamos el tipo de dato Complejo
type TypeComplex = [number, number];

/**
 * Sumar numeros complejos
 * @param numberOne 
 * @param numberTwo 
 * @ return devolvemos un nuevo complejo
 */
export function sumComplex(numberOne: TypeComplex, numberTwo: TypeComplex): TypeComplex {
  return [numberOne[0] + numberTwo[0], numberOne[1] + numberTwo[1]];
}

console.log(sumComplex([1, 2], [3, 4]));

/**
 * Restar números complejos
 * @param numberOne 
 * @param numberTwo 
 * @returns devolvemos un nuevo numero complejo 
 */
export function restComplex(numberOne: TypeComplex, numberTwo: TypeComplex): TypeComplex {
  return [numberOne[0] - numberTwo[0], numberOne[1] - numberTwo[1]];
}

console.log(restComplex([1, 2], [3, 4]));

/**
 * Multiplicar dos numeros complejos
 * @param numberOne 
 * @param numberTwo
 * @returns multipicamos complejos 
 */
export function productComplex(numberOne: TypeComplex, numberTwo: TypeComplex): TypeComplex {
  return [numberOne[0] * numberTwo[0] - numberOne[1] * numberTwo[1], numberOne[0] * numberTwo[1] + numberOne[1] * numberTwo[0]];
}
console.log(productComplex([5, 2], [2, -3]));

/**
 * Dividir dos numeros complejos
 * @param numberOne 
 * @param numberTwo 
 */

export function divideComplex(numberOne: TypeComplex, numberTwo: TypeComplex): TypeComplex {
  const real: number = (numberOne[0] * numberTwo[0] + numberOne[1] * numberTwo[1]) / (Math.pow(numberTwo[0], 2) + Math.pow(numberTwo[1], 2));
  const imaginaria: number = (numberOne[1] * numberTwo[0] - numberOne[0] * numberTwo[1])/(Math.pow(numberTwo[0], 2) + Math.pow(numberTwo[1], 2));
  return [real, imaginaria];
}

console.log(divideComplex([3, 2], [1, -2]));

/**
 * Realiza el productor escalar de un punto y un numero
 * @param numberOne 
 * @param numberTwo 
 * @return otro numero complejo
 */
export function escalarProductComplex(numberOne: TypeComplex, numberTwo: number): TypeComplex {
  return [numberOne[0] * numberTwo, numberOne[1] * numberTwo];
}

console.log(escalarProductComplex([2, 3], 4));
