
/**
 * Funcion que devuelve otra funcion multiplicando el array recibido por
 * el valor pasado
 * @param array 
 * @returns 
 */
export function multiplyAll(array: number[]):
  (numero: number) => number[] | undefined {
  return (numero: number) => {
    if (array.length == 0) {
      return undefined;
    }
    const newArray: number[] = [];
    for (let step = 0; step < array.length; step++) {
      newArray.push(numero * array[step]);
    }
    return newArray;
  };
}

let myFunction: (a: number) => number[] | undefined;
// eslint-disable-next-line prefer-const
myFunction = multiplyAll([2, 6, 8]);
console.log(myFunction(2));
console.log(myFunction(3));
console.log(myFunction(4));
console.log(multiplyAll([])(3));
