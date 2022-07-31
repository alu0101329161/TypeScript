# Práctica 4 - Arrays, tuplas y enumerados

En esta práctica continuaremos utilizando herramientas como jsdoc, mocha, chai para generar documentacion y segui metodología TDD. Además practicaremos el uso de arrays, tuplas y enumerados con sus diferentes métodos. En comparación a c++, typescript gracias a sus métodos permite reducir el número de líneas de código para implementar una función.

## **Índice**
 * [Tareas Previas](#dv1)
 * [Ejercicio 1](#dv2)
 * [Ejercicio 2](#dv3)
 * [Ejercicio 3](#dv4)
 * [Ejercicio 4](#dv5)
 * [Ejercicio 5](#dv6)
 * [Ejercicio 6](#dv7)
 * [Ejercicio 7](#dv8)
 * [Ejercicio 8](#dv9)
 * [Ejercicio 9](#dv10)
 * [Ejercicio 10](#dv11)
 * [Autor](#dv12)


<div id='dv1'/>

## Tareas Previas

> Typedoc: nos permitira realizar la documentación de nuestro código de manera automática. Para instalarlo y configurarlo pinche [aqui](https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view)

> Chai y mocha para aplicar metodología TDD en nuestro proyecto. Para instalarlo y configurarlo pinche [aqui](https://drive.google.com/file/d/1-z1oNOZP70WBDyhaaUijjHvFtqd6eAmJ/view)

> Debugger en Vscode: nos permitira establecer breakpoints, analizar la pila de llamadas, analizar variables y demás que facilitarán la resolución de errores. Para instalarlo y configurarlo pinche [aqui](https://drive.google.com/file/d/1u9sgHc0vIwDPAKpI2QmoRQbcMpi6XZMN/view)

> Metodos para trabajar con arrays en Javascript. Revisar [aqui](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

> Métodos para trabajar con strings en Javascript. Revisar [aqui](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

> [TDD](https://en.wikipedia.org/wiki/Test-driven_development) Iremos desarrollando primero las pruebas de la funcionalidad que queremos desarrollar y luego escribiremos el código necesario para ello por ello estableceremos primero el fichero `.spec.ts` y luego el `.ts`.

---

<div id='dv2'/>

## Ejercicio 1

```typescript
/**
 * Imprime las tablas de multiplicar hasta el n inidicado
 * @param numero 
 * @returns number[][] retorna array de arrays
 */
export function productTable(numero: number): number[][]|undefined {
  const table: number[][] = [];
  let row: number[] = [];
  let count: number = 1;
  if (numero < 1) {
    return undefined;
  }
  for (let step = 0; step < numero; step++) {
    while (count !== numero + 1) {
      row.push((step + 1) * count); 
      count ++;
    }
    table.push(row);
    row = [];
    count = 1;
  }
  return table;
}
```

Pruebas para dicho ejercicio

```typescript
/* eslint-disable max-len */
/* eslint-disable array-bracket-spacing */
import 'mocha';
import {expect} from 'chai';
import {productTable} from '../src/ejercicio-1';

describe('Test funcion productTable', () => {
  it('productTable(2) should return [ [ 1, 2 ], [ 2, 4 ] ]', () => {
    expect(productTable(2)).to.eql([[1, 2], [2, 4]]);
  });
  it('productTable(3) should return [ [ 1, 2, 3 ], [ 2, 4, 6 ], [ 3, 6, 9 ] ]', () => {
    expect(productTable(3)).to.eql([[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
  });
  it('productTable(4) should return [ [ 1, 2, 3, 4 ], [ 2, 4, 6, 8 ], [ 3, 6, 9, 12 ], [ 4, 8, 12, 16 ] ]', () => {
    expect(productTable(4)).to.eql([[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]);
  });
  it('productTable(-50) should return undefined', () => {
    expect(productTable(-50)).to.eql(undefined);
  });
});
```
  Test funcion productTable

    ✔ productTable(2) should return [ [ 1, 2 ], [ 2, 4 ] ]
    ✔ productTable(3) should return [ [ 1, 2, 3 ], [ 2, 4, 6 ], [ 3, 6, 9 ] ]
    ✔ productTable(4) should return [ [ 1, 2, 3, 4 ], [ 2, 4, 6, 8 ], [ 3, 6, 9, 12 ], [ 4, 8, 12, 16 ] ]
    ✔ productTable(-50) should return undefined

Se pide implementar una funcion que reciba un número como parámetro `>=1` y devuleva los productos de las tablas de multiplicar hasta ese n indicado por ello primero comprobamos que ese n sea >=1 si es así no pasa nada en caso contrario retornamos undefined luego recorremos tantas iteraciones como n y para cada n hacemos un while guardando en row los primeros n productos de ese n. En row guardamos las operaciones de la tabla en la que estemos y cuando acabemos lo insertamos gracias a push en table cada push en table será una fila nueva es decir una tabla nueva.

---

<div id='dv2'/>

## Ejercicio 2
Se nos pide implementar dos funciones la primera tiene que recibir un array de string . En caso de que la longitud sea cero retornamos undefined en caso contrario tenemos dos indices `actual` que como indica su nombre tiene la posicion actual y `pibote` que nos permitirá ir avanzando para comprobar si el que estamos mirando en pibote es igual a actual + 1 de esta manera cuando no sean iguales hemos determinado el rango entre los nunero que sean consecutivos teniendo en cuenta que puede que lleguemos al limite de actual que ese lenght así que ya no tendríamos que recorres más. Solo quedaría almacenar en result la nomenclatura `_` para indicar que entre actual y pibote hay una secuencia de numero por ejemplo 5, 6, 7, 8 .. => 5_8 quedaría indicar que acutal será pibote + 1 es decir si ternminamos en la posicion 8 pues volver a mirar pero desde 8 +1

```typescript
/**
 * Convierte un array  en un string comprimido por rangos
 * @param array 
 * @returns string o undefined
 */
export function fromArrayToRanges(array: number[]): string | undefined {
  let actual: number = 0;
  let pibote: number = 0;
  let result: string = "";
  // En caso de un array de longitud cero retornamos undefined
  if (array.length == 0) {
    return undefined;
  }
  // Mientras sean iguales aumentamos desplazamiento de pibote
  while (actual < array.length) {
    pibote = actual;
    for (pibote + 1; pibote < array.length; pibote++) {
      if (array[pibote + 1] !== array[pibote] + 1) {
        break;
      }
    }
    // Una vez hemos llegado a un numero que no es igual al que
    // estampos mirando 
    if (actual !== pibote) {
      result += array[actual] + "_" + array[pibote] + ",";
      actual = pibote + 1;
    } else {
      result += array[actual] + ",";
      actual++;
    }
  }
  return result.substring(0, result.length - 1);
}
```

La segunda funcion recibe un string  y devuelve un array de número lo primero es comprobar la longitud si es cero retornamos undefined de esta manera contemplamos errores que puedan suceder más adelante. Usamos split y dividimos ese string en un array que se ha separado usando las `,` por ello algunas posiciones contendrán `numeros` otras `numero_numero` por ello usamos include si encontramos esa coindidencia volvemos a hacer un split pero esta vez por `_` teniendo esto sabemos que ese guion hay que sustituirlo por una secuencia de número para ellos hacemos un bucle for y guardamos en result los limites y los numeros que hay de por medio, el otro caso es que ni hay un `_` para eso caso solo incluimos dicho numero en result. Por último eliminamos la ultima coma que se guarda en result y convertimos el string a un array de number gracias a split que separa por comas teniendo un array de string y map(Number) que pasa ese array de string a array de numbers que es lo que se nos pide retornar.

```typescript
/**
 * Convierte un string comprimido en ragos en un
 * array sin comprimir
 * @param str 
 * @returns array de tipo numbers
 */
export function fromRangesToArray(str: string): number[]|undefined {
  const array: string[] = str.split(",");
  let arrayRange: string[] = [];
  let result = "";
  if (str.length == 0) {
    return undefined;
  }
  for (let step = 0; step < array.length; step++) {
    if (array[step].includes('_')) {
      arrayRange = array[step].split('_');
      for (let i = parseInt(arrayRange[0]); i <= parseInt(arrayRange[1]); i++) {
        result += "," + i + " ";
      }
      arrayRange = [];
    } else {
      result += "," + array[step]; + ",";
    }
  }
  result = result.slice(1, result.length);
  const resultNumber = result.split(',').map(Number);
  return resultNumber;
}
```

Pruebas realizadas:

```typescript
/* eslint-disable max-len */
/* eslint-disable array-bracket-spacing */
import 'mocha';
import {expect} from 'chai';
import {fromArrayToRanges, fromRangesToArray} from '../src/ejercicio-2';

describe('Test funcion fromArrayToRanges', () => {
  it('fromArrayToRanges([5, 6, 7, 9, 12, 13, 14]) should return 5_7,9,12_14', () => {
    expect(fromArrayToRanges([5, 6, 7, 9, 12, 13, 14])).to.eql("5_7,9,12_14");
  });
  it('fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7]) should return “-3_-1, 3, 5_7”', () => {
    expect(fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7])).to.eql("-3_-1,3,5_7");
  });
  it('fromArrayToRanges([17]) should return “17”', () => {
    expect(fromArrayToRanges([17])).to.eql("17");
  });
  it('fromArrayToRanges([3, 5, 6, 7, 9, 10]) should return “3, 5_7, 9_10”', () => {
    expect(fromArrayToRanges([3, 5, 6, 7, 9, 10])).to.eql("3,5_7,9_10");
  });
  it('fromArrayToRanges([]) should return “undefined”', () => {
    expect(fromArrayToRanges([])).to.eql(undefined);
  });
});

describe('Test funcion fromRangesToArray', () => {
  it('fromRangesToArray("5_7,9,12_14") should return [5, 6, 7, 9, 12, 13, 14]', () => {
    expect(fromRangesToArray("5_7,9,12_14")).to.eql([5, 6, 7, 9, 12, 13, 14]);
  });
  it('fromRangesToArray("-3_-1,3,5_7") should return [-3, -2, -1, 3, 5, 6, 7]', () => {
    expect(fromRangesToArray("-3_-1,3,5_7")).to.eql([-3, -2, -1, 3, 5, 6, 7]);
  });
  it('fromRangesToArray("17") should return [17]', () => {
    expect(fromRangesToArray("17")).to.eql([17]);
  });
  it('fromRangesToArray("3,5_7,9_10") should return [3, 5, 6, 7, 9, 10]', () => {
    expect(fromRangesToArray("3,5_7,9_10")).to.eql([3, 5, 6, 7, 9, 10]);
  });
  it('fromRangesToArray([]) should return “undefined”', () => {
    expect(fromRangesToArray("")).to.eql(undefined);
  });
});
```
  Test funcion fromArrayToRanges

    ✔ fromArrayToRanges([5, 6, 7, 9, 12, 13, 14]) should return 5_7,9,12_14
    ✔ fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7]) should return “-3_-1, 3, 5_7”
    ✔ fromArrayToRanges([17]) should return “17”
    ✔ fromArrayToRanges([3, 5, 6, 7, 9, 10]) should return “3, 5_7, 9_10”
    ✔ fromArrayToRanges([]) should return “undefined”

  Test funcion fromRangesToArray

    ✔ fromRangesToArray("5_7,9,12_14") should return [5, 6, 7, 9, 12, 13, 14]
    ✔ fromRangesToArray("-3_-1,3,5_7") should return [-3, -2, -1, 3, 5, 6, 7]
    ✔ fromRangesToArray("17") should return [17]
    ✔ fromRangesToArray("3,5_7,9_10") should return [3, 5, 6, 7, 9, 10]
    ✔ fromRangesToArray([]) should return “undefined”

---

<div id='dv4'/>

## Ejercicio 3

Se nos pide implementar una funcion que reciba como parámetro un array de string siendo cada posicion colores y además solo tendremos en cuenta hasta la longitud dos tal y como indica el enunciado. Creamos un array con los colores ordenados con valores decreciente es decir Negro = 0 por tanto va en la posicion 0 por ello si recorremos input y usamos colo.indexOf(input[step]) podremos acceder directamente al valor por ejemplo recibimos marron  es decir array[step] = Marron si buscamos dicho valor en nuestro array de colores y sacamos su posicion tendremos directamente el valor que pasaremos a string y los guardaremos en result solo faltaria retornar dicho valor como un numero. Haría falta comprobar que la longitud no sea cero o que el array incluta `"` , si lo incliye retornamos false. También tendriamos que comprobar que ese color existe entre las posibilidades para ello tenemos indexOf que retorna -1 si no encuentra ese color.
```typescript
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
```

```typescript
/* eslint-disable max-len */
/* eslint-disable array-bracket-spacing */
import 'mocha';
import {expect} from 'chai';
import {decodeResistor} from '../src/ejercicio-3';

describe('Test funcion decodeResistor', () => {
  it('decodeResistor(["Marron", "Pepe"]) should return undefined', () => {
    expect(decodeResistor(["Marron", "Pepe"])).to.eql(undefined);
  });
  it('decodeResistor(["Marron", "Verde", "Violeta"]) should return 15', () => {
    expect(decodeResistor(["Marron", "Verde", "Violeta"])).to.eql(15);
  });
  it('decodeResistor(["Marron"]) should return 1', () => {
    expect(decodeResistor(["Marron"])).to.eql(1);
  });
  it('decodeResistor([]) should return undefined', () => {
    expect(decodeResistor([])).to.eql(undefined);
  });
  it('decodeResistor([""]) should return undefined', () => {
    expect(decodeResistor([""])).to.eql(undefined);
  });
  it('decodeResistor([""]) should return undefined', () => {
    expect(decodeResistor([""])).to.eql(undefined);
  });
});

```
  Test funcion decodeResistor

    ✔ decodeResistor(["Marron", "Pepe"]) should return undefined
    ✔ decodeResistor(["Marron", "Verde", "Violeta"]) should return 15
    ✔ decodeResistor(["Marron"]) should return 1
    ✔ decodeResistor([]) should return undefined
    ✔ decodeResistor([""]) should return undefined
    ✔ decodeResistor([""]) should return undefined

---

<div id='dv5'/>

## Ejercicio 4

Se nos pide implementar una funcion que reciba un array de string y vamos a mirar si las palabras dentro de ese array estan encadenadas unas con otras por ejemplo allow y lowering están encadenados por la cadena low pero dominator y notorius no estan encadenados ya que no hay cadena que se pueda formar . Para desarrollar este ejercicio recorremos la primera palabra de derecha a izquierda por ello guardamos en wordIndex word.lenght -1 y la segunda la recorremos de izquierda a derecha por ejemplo allow y lowering si aplicamos lo anterior tenemos lo siguiente:

w, o, l, l, a

l, o, w, e, r, i, n, g

Lo primero es comprobar cual es la el primer caracter de la segunda que coincide con algun carácter de la pirmera palabra una vez llegamos a la primera coincidencia y no hemos recorrido toda la primera palabra guardamos esa posicion y vamos recorriendo desde esa posicion hasta el final las dos palabras pero esta vez las dos a la hacia la derecha guardanado en result todas las coincidencia si de repente no hay coincidencia salimos del buvle gracias a break

En ese ejemplo nos quedarmos con la posicion 3 en word es decir `l` que es la primera coincidencia con la `l` de la segunda palabra, vamos guradando en result las coincidencia y cuando llegemos a w en las dos palabras salimos debido a que hemos llegado al último caracter de la primera palabra. Solo nos quedaría usar un booleano para retornar error al encadenar en caso de que dos palabras de dentro de ese array no tengan coincidencia

```typescript
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
```
Pruebas realizadas:

```typescript
/* eslint-disable max-len */
/* eslint-disable array-bracket-spacing */
import 'mocha';
import {expect} from 'chai';
import {meshArray} from '../src/ejercicio-4';

describe('Test funcion meshArray', () => {
  it('meshArray(["allow", "lowering", "ringmaster", "terror"]) should return lowringter', () => {
    expect(meshArray(["allow", "lowering", "ringmaster", "terror"])).to.eql("lowringter");
  });
  it('meshArray(["kingdom", "dominator", "notorious", "usual", "allegory"]) should return Error al encadenar', () => {
    expect(meshArray(["kingdom", "dominator", "notorious", "usual", "allegory"])).to.eql("Error al encadenar");
  });
  it('meshArray(["kingdom", "dominator", "torusual", "allegory"]) should return domtoral', () => {
    expect(meshArray(["kingdom", "dominator", "torusual", "allegory"])).to.eql("domtoral");
  });
  it('meshArray(["allow"]) should return Error al encadenar', () => {
    expect(meshArray(["allow"])).to.eql("Error al encadenar");
  });
  it('meshArray([""]) should return Error al encadenar', () => {
    expect(meshArray([""])).to.eql("Error al encadenar");
  });
  it('meshArray([]) should return Error al encadenar', () => {
    expect(meshArray([])).to.eql("Error al encadenar");
  });
});

```
  Test funcion meshArray

    ✔ meshArray(["allow", "lowering", "ringmaster", "terror"]) should return lowringter
    ✔ meshArray(["kingdom", "dominator", "notorious", "usual", "allegory"]) should return Error al encadenar
    ✔ meshArray(["kingdom", "dominator", "torusual", "allegory"]) should return domtoral
    ✔ meshArray(["allow"]) should return Error al encadenar
    ✔ meshArray([""]) should return Error al encadenar
    ✔ meshArray([]) should return Error al encadenar

---

<div id='dv6'/>

## Ejercicio 5

Se nos pide implementar una funcion que recibiendo un array de numbers o string devuelva la media de la posiciones tipo number y la concatenacion de las posiciones tipo string para ello recorremos el array y para cada posicion hacemos un switch con typeOf inficandos si esa posicion es de tipo number o de tipo string y concatenamos en str o guardamos en mean por ultimo como con number era la media miramos si count es 0 o srt esta vacio para retornar undefined es decir que  solo hayan pasado numeros o que sol hayan pasado carácteres y retornamos una tupla con la media y  el string encadenados. Por tanto según la he planteado siempre deben existir valores de ambos tipos en el array que se recibe por parámetro

```typescript
/**
 * Calcula la media y concatena
 * @param array 
 * @returns tupla con el valor de la media de numero y la
 * concatenacion de los string
 */
export function meanAndConcatenate(array: (number | string)[]): [number, string]|undefined {
  let count: number = 0;
  let mean: number = 0;
  let str: string = "";
  for (let step = 0; step < array.length; step++) {
    const value = array[step];
    switch (typeof(value)) {
      case "number":
        count ++;
        mean += value;
        break;
      case "string":
        str += value.toString();
        break;
    }
  }
  mean /= count;
  // Dividir entre cero es una indeterminacion
  if (count == 0 || str == "") {
    return undefined;
  }
  return [mean, str]; 
}
```
Pruebas realizadas 
```typescript
/* eslint-disable max-len */
/* eslint-disable array-bracket-spacing */
import 'mocha';
import {expect} from 'chai';
import {meanAndConcatenate} from '../src/ejercicio-5';

describe('Test funcion meanAndConcatenate', () => {
  it('meanAndConcatenate(["u", 6, "d", 1, "i", "w", 6, "s", "t", 4, "a", 6, "g", 1, 2, "w", 8, "o", 2, 0]) should return [ 3.6, "udiwstagwo" ]', () => {
    expect(meanAndConcatenate(['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0])).to.eql([ 3.6, 'udiwstagwo' ]);
  });
  it('meanAndConcatenate(["u", 6, "d", 1, "i", "w", 6]) should return [ 3.6, "udiwstagwo" ]', () => {
    expect(meanAndConcatenate(["u", 6, "d", 1, "i", "w", 6])).to.eql([ 4.333333333333333, 'udiw' ]);
  });
  it('meanAndConcatenate(["u"]) should return undefined', () => {
    expect(meanAndConcatenate(["u"])).to.eql(undefined);
  });
  it('meanAndConcatenate([6]) should return undefined', () => {
    expect(meanAndConcatenate([6])).to.eql(undefined);
  });
  it('meanAndConcatenate([]) should return undefined', () => {
    expect(meanAndConcatenate([])).to.eql(undefined);
  });
});

```
  Test funcion meanAndConcatenate

    ✔ meanAndConcatenate(["u", 6, "d", 1, "i", "w", 6, "s", "t", 4, "a", 6, "g", 1, 2, "w", 8, "o", 2, 0]) should return [ 3.6, "udiwstagwo" ]
    ✔ meanAndConcatenate(["u", 6, "d", 1, "i", "w", 6]) should return [ 3.6, "udiwstagwo" ]
    ✔ meanAndConcatenate(["u"]) should return undefined
    ✔ meanAndConcatenate([6]) should return undefined
    ✔ meanAndConcatenate([]) should return undefined
---

<div id='dv7'/>

## Ejercicio 6

Se nos pide inplementar una funcion que reciba un array de numbers y que en caso de que ese array tuviera ceros eliminar esos ceros de dichas posiciones e insertarlos todos juntos al final para ello hacemos unas comprobaciones al principio de longitud o si no incluye ceros para retornar undefined o el array directamente en caso de que no ocurra lo anterior recorremos el array en caso de econtrar un o hacemos un delete y vamos guardando en otro array dichos cero para al final gracias a filter quitamos esos huevos vacios y con el metodo concat incluimos el array de ceros al final del array que hemos recibido por parámetro. En caso de longitud uno o que el array no incluya ceros devolvemos el propio array ya que no es necesario realizar ningún calculo.

```typescript
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

```
Pruebas realizadas

```typescript
/* eslint-disable max-len */
/* eslint-disable array-bracket-spacing */
import 'mocha';
import {expect} from 'chai';
import {moveZeros} from '../src/ejercicio-6';

describe('Test funcion moveZeros', () => {
  it('moveZeros([1, 0, 1, 2, 0, 1, 3]) should return [1, 1, 2, 1, 3, 0, 0]', () => {
    expect(moveZeros([1, 0, 1, 2, 0, 1, 3])).to.eql([1, 1, 2, 1, 3, 0, 0]);
  });
  it('moveZeros([1, 1, 2, 1, 3]) should return [1, 1, 2, 1, 3]', () => {
    expect(moveZeros([1, 1, 2, 1, 3])).to.eql([1, 1, 2, 1, 3]);
  });
  it('moveZeros([]) should return undefined', () => {
    expect(moveZeros([])).to.eql(undefined);
  });
});
```
  Test funcion moveZeros

    ✔ moveZeros([1, 0, 1, 2, 0, 1, 3]) should return [1, 1, 2, 1, 3, 0, 0]
    ✔ moveZeros([1, 1, 2, 1, 3]) should return [1, 1, 2, 1, 3]
    ✔ moveZeros([]) should return undefined

---

<div id='dv8'/>

## Ejercicio 7

Se nos pide implementar una funcion que reciba por parámetro un array de number y devuelva otra funcion para ello añadimos un return dentro de esa funcion que devuelva una funcion anónima que recibe un numero dentro de ella si el array esta vacio retornamos undefined en caso contrario vamos guardando en un array nuevo el numero que hemos recibido por parámetro por cada posicion del array original gracias a un bucle for que va desde la posicion cero hasta el tamaño del array recibido menos uno. Si recibimos un array vacio devolvemos undefined. 

```typescript
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
```
Pruebas realizadas:

```typescript
/* eslint-disable max-len */
/* eslint-disable array-bracket-spacing */
import 'mocha';
import {expect} from 'chai';
import {multiplyAll} from '../src/ejercicio-7';

// creamos variable que guarde a la funcion
let myFunction: (a: number) => number[] | undefined;

describe('Test funcion multiplyAll', () => {
  it('multiplyAll([2, 6, 8])(2) should return [4, 12, 16]', () => {
    myFunction = multiplyAll([2, 6, 8]);
    expect(myFunction(2)).to.eql([4, 12, 16]);
  });
  it('multiplyAll([2, 6, 8])(3) should return [6, 18, 24]', () => {
    expect(myFunction(3)).to.eql([6, 18, 24]);
  });
  it('multiplyAll([2, 6, 8])(4) should return [8, 24, 32]', () => {
    expect(myFunction(4)).to.eql([8, 24, 32]);
  });
  it('multiplyAll([])(4) should return undefined', () => {
    expect(multiplyAll([])(3)).eql(undefined);
  });
});

```
  Test funcion multiplyAll

    ✔ multiplyAll([2, 6, 8])(2) should return [4, 12, 16]
    ✔ multiplyAll([2, 6, 8])(3) should return [6, 18, 24]
    ✔ multiplyAll([2, 6, 8])(4) should return [8, 24, 32]
    ✔ multiplyAll([])(4) should return undefined
---

<div id='dv9'/>

## Ejercicio 8

Se nos pide implementar una serie de funciones que sumen, resten multiplique por un valor y hagan la distancia euclidea entre dos puntos para ello definimos un nuevo tipo de dato PointType que será un array de dos posiciones de tipo number. Solo quedaría implementar esas funciones  posicion cero del primer y segundo punto para sumar y restar si queremos multiplicar solo recibimos un punto y un valor y multipliaamos cada posicion por dicho valor devolviendo otro punto y por ultimo la distancia euclidea sería aplicar la siguiente fórmula:

> d(A,B) = √((XB – XA)^2)

```typescript
type PointType = [number, number]
/**
 * Suma dos puntos de dos coordenadas
 * @param firstPoint 
 * @param secondPoint 
 * @returns pointType 
 */
export function sumPoints(firstPoint: PointType, secondPoint: PointType): PointType {
  const thirdPoint: PointType = [firstPoint[0] + secondPoint[0], firstPoint[1] + secondPoint[1]];
  return thirdPoint;
}

console.log(sumPoints([1, 2], [3, 4]));

/**
 * Resta dos puntos de dos coordenadas
 * @param firstPoint 
 * @param secondPoint 
 * @returns PoinType
 */
export function restPoints(firstPoint: PointType, secondPoint: PointType): PointType {
  const thirdPoint: PointType = [firstPoint[0] - secondPoint[0], firstPoint[1] - secondPoint[1]];
  return thirdPoint;
}

console.log(restPoints([1, 4], [2, 2]));
/**
 * Multiplica un punto por un valor
 * @param firstPoint 
 * @param numero 
 * @returns PoinType
 */
export function productPoints(firstPoint: PointType, numero:number): PointType {
  const thirdPoint: PointType = [firstPoint[0] * numero, firstPoint[1] * numero];
  return thirdPoint;
}

console.log(productPoints([1, 4], 2));
/**
 * Calcula la distancia euclidea entre dos puntos
 * @param firstPoint 
 * @param seconPoint 
 * @returns PoinType
 */
export function euclideanDistance(firstPoint: PointType, seconPoint: PointType): number {
  return Math.sqrt(Math.pow(firstPoint[0] - seconPoint[0], 2) +
  Math.pow(seconPoint[1] - firstPoint[1], 2));
}
```
Pruebas desarrolladas:

```typescript
/* eslint-disable max-len */
/* eslint-disable array-bracket-spacing */
import 'mocha';
import {expect} from 'chai';
import {sumPoints, restPoints, productPoints, euclideanDistance} from '../src/ejercicio-8';


describe('Test funcion sumPoints', () => {
  it('sumPoints([1, 1], [2, 2]) should return [3, 3]', () => {
    expect(sumPoints([1, 1], [2, 2])).to.eql([3, 3]);
  });
  it('sumPoints([1, 2], [3, 4]) should return [4, 6]', () => {
    expect(sumPoints([1, 2], [3, 4])).to.eql([4, 6]);
  });
});

describe('Test funcion restPoints', () => {
  it('restPoints([1, 1], [2, 2]) should return [-1, -1]', () => {
    expect(restPoints([1, 1], [2, 2])).to.eql([-1, -1]);
  });
  it('restPoints([1, 2], [3, 4]) should return [-2, -2]', () => {
    expect(restPoints([1, 2], [3, 4])).to.eql([-2, -2]);
  });
});

describe('Test funcion productPoints', () => {
  it('productPoints([1, 1], 2) should return [2, 2]', () => {
    expect(productPoints([1, 1], 2)).to.eql([2, 2]);
  });
  it('productPoints([1, 2], 3) should return [3, 6]', () => {
    expect(productPoints([1, 2], 3)).to.eql([3, 6]);
  });
});

describe('Test funcion euclideanDistance', () => {
  it('euclideanDistance([1, 10], [2, 5]) should return 5.0990', () => {
    expect(euclideanDistance([1, 10], [2, 5])).to.eql(5.0990195135927845);
  });
  it('euclideanDistance([1, 7], [-2, 5]) should return 3.6055', () => {
    expect(euclideanDistance([1, 7], [-2, 5])).to.eql(3.605551275463989);
  });
});

```
  Test funcion sumPoints

    ✔ sumPoints([1, 1], [2, 2]) should return [3, 3]
    ✔ sumPoints([1, 2], [3, 4]) should return [4, 6]

  Test funcion restPoints

    ✔ restPoints([1, 1], [2, 2]) should return [-1, -1]
    ✔ restPoints([1, 2], [3, 4]) should return [-2, -2]

  Test funcion productPoints

    ✔ productPoints([1, 1], 2) should return [2, 2]
    ✔ productPoints([1, 2], 3) should return [3, 6]

  Test funcion euclideanDistance

    ✔ euclideanDistance([1, 10], [2, 5]) should return 5.0990
    ✔ euclideanDistance([1, 7], [-2, 5]) should return 3.6055


---

<div id='dv10'/>

## Ejercicio 9

Se nos pide implemetar lo mismo que antes pero esta vez el puunto tiene que tener minimo 3 corrdenadas y máximo las que quieras por ello definimos un nuevo tipo de dato que sea un array de 3 numbers minimos y usamos el operador `...` para definir que puedan ser más de 3 almacenando estos en un array. Esta vez he añadido un nuevo parámetro a suma y resta para poder tener todo en la misma implementacion pasándole un caracter por tercer parámetro `+` o `-` ya que hacen lo mismo, la multiplicacion y distancia euclidea es exactamente lo anterior pero usando un bucle ya que pueden ser muchas coordenadas dentro de un punto.
Importante que los puntos tengas la misma cantidad de coordenadas de no ser así retornamos undefined.

```typescript
type PointType = [number, number, number, ...number[]];
// Minimo 3 puntos maximo los que quieras
/**
 * Suma dos puntos de n-coordenadas
 * @param firstPoint 
 * @param secondPoint 
 * @returns pointType 
 */
export function operationNPoints(firstPoint: PointType, secondPoint: PointType,
    operation: string): PointType | undefined {
  if (firstPoint.length !== secondPoint.length) {
    return undefined;
  }
  switch (operation) {
    case "+":
      for (let step = 0; step < firstPoint.length; step++) {
        firstPoint[step] = firstPoint[step] + secondPoint[step];
      }
      return firstPoint;
    case "-":
      for (let step = 0; step < firstPoint.length; step++) {
        firstPoint[step] = firstPoint[step] - secondPoint[step];
      }
      return firstPoint;
  }
  return undefined;
}


/**
 * Multiplica un valor por un punto de n-dimesiones
 * @param firstPoint 
 * @param numero 
 * @returns PointType
 */
export function productNPoints(firstPoint: PointType,
    numero: number): PointType {
  for (let step = 0; step < firstPoint.length; step++) {
    firstPoint[step] = firstPoint[step] * numero;
  }
  return firstPoint;
}


/**
 * Calcula la distancia euclediana entre dos puntos de 
 * n-dimesiones
 * @param firstPoint 
 * @param secondPoint 
 * @returns number o undefined 
 */
export function euclideanNDistance(firstPoint: PointType,
    secondPoint: PointType): number|undefined {
  if (firstPoint.length !== secondPoint.length) {
    return undefined;
  }
  let result: number = 0;
  for (let step = 0; step < firstPoint.length; step++) {
    result += Math.pow(firstPoint[step] - secondPoint[step], 2);
  }
  return Math.sqrt(result);
}
```
Pruebas realizadas:

```typescript
/* eslint-disable max-len */
/* eslint-disable array-bracket-spacing */
import 'mocha';
import {expect} from 'chai';
import {operationNPoints, productNPoints, euclideanNDistance} from '../src/ejercicio-9';


describe('Test funcion operationNPoints', () => {
  it('operationNPoints([1, 1, 1, 5], [2, 2, 2, 7], "+")) should return [ 3, 3, 3, 12 ]', () => {
    expect(operationNPoints([1, 1, 1, 5], [2, 2, 2, 7], "+")).to.eql([3, 3, 3, 12]);
  });
  it('operationNPoints([1, 1, 1, 5], [2, 2, 2, 7], "-")) should return [ -1, -1, -1, -2 ]', () => {
    expect(operationNPoints([1, 1, 1, 5], [2, 2, 2, 7], "-")).to.eql([-1, -1, -1, -2]);
  });
  it('operationNPoints([1, 1, 1, 5], [2, 2, 2, 7], "a")) should return undefined', () => {
    expect(operationNPoints([1, 1, 1, 5], [2, 2, 2, 7], "a")).to.eql(undefined);
  });
  it('operationNPoints([1, 1, 1, 5], [2, 2, 2], "+")) should return undefined', () => {
    expect(operationNPoints([1, 1, 1, 5], [2, 2, 2], "+")).to.eql(undefined);
  });
});

describe('Test funcion productNPoints', () => {
  it('productNPoints([1, 2, 5, 7], 2) should return [ 3, 3, 3, 12 ]', () => {
    expect(productNPoints([1, 2, 5, 7], 2)).to.eql([ 2, 4, 10, 14 ]);
  });
  it('productNPoints([1, 2, 5, 7], 3) should return [ 3, 6, 15, 21 ]', () => {
    expect(productNPoints([1, 2, 5, 7], 3)).to.eql([ 3, 6, 15, 21 ]);
  });
});

describe('Test funcion euclideanNDistance', () => {
  it('euclideanNDistance([1, 3, 6], [2, 6, 7]) should return 3.3166', () => {
    expect(euclideanNDistance([1, 3, 6], [2, 6, 7])).to.eql(3.3166247903554);
  });
  it('euclideanNDistance([1, 3, 6], [2, 6]) should return undefined', () => {
    expect(euclideanNDistance([1, 3, 6], [2, 6, 5, 6])).to.eql(undefined);
  });
});

```
  Test funcion operationNPoints

    ✔ operationNPoints([1, 1, 1, 5], [2, 2, 2, 7], "+")) should return [ 3, 3, 3, 12 ]
    ✔ operationNPoints([1, 1, 1, 5], [2, 2, 2, 7], "-")) should return [ -1, -1, -1, -2 ]
    ✔ operationNPoints([1, 1, 1, 5], [2, 2, 2, 7], "a")) should return undefined
    ✔ operationNPoints([1, 1, 1, 5], [2, 2, 2], "+")) should return undefined

  Test funcion productNPoints

    ✔ productNPoints([1, 2, 5, 7], 2) should return [ 3, 3, 3, 12 ]
    ✔ productNPoints([1, 2, 5, 7], 3) should return [ 3, 6, 15, 21 ]

  Test funcion euclideanNDistance

    ✔ euclideanNDistance([1, 3, 6], [2, 6, 7]) should return 3.3166
    ✔ euclideanNDistance([1, 3, 6], [2, 6]) should return undefined
---

<div id='dv11'/>

## Ejercicio 10

Vivimos en una ciudad y llegas 10 minutos antes a tu destino así que decides dar un paseo teniendo que cada direccion que tomas N, S, E, O cosumen un minuto de tu tiempo asi que te interesa saber si después de 10 minutos vuelves a estar en la posicion de la que partiste para ello usaremos el tipo de dato point que usamos antes y  recorremos el tamaño del array que hemos puesto a 10 porque lo que pase despues de esos 10 movimeintos no nos interesa, pasamos por cada movimiento si es Norte sumamos 1 y si es Sur restamos 1 en la posicion x de esta manera controlamos que en esa corrdenada hemos vuelto al origen hacemos lo mismo con Oeste y Este en la corrdenada y. Si cuando acabemos de recorrer el array la coordenada x es cero y la y también siginifica que hemos vuelto al origen y retornamos true en caso contrario retornamos false y si no pasas bien el fomato por parámetro retornamos undefined.

```typescript
/* eslint-disable max-len */
type PointType = [number, number]
/**
 * Comprueba si en 10 min llegas al origen luego de dar
 * un paseo  
 * @param array 
 * @returns boolean or undefined dependiendo del tamaño del array
 */
export function generationApp(array: string[]): boolean | undefined {
  const posicion: PointType = [0, 0];
  if (array.length === 0 || array.includes("")) {
    return undefined;
  } else if (array.length > 10) {
    array.length = 10;
  }
  for (let step = 0; step < array.length; step++) {
    switch (array[step]) {
      case 'n':
        posicion[0]++;
        break;
      case 's':
        posicion[0]--;
        break;
      case 'e':
        posicion[1]++;
        break;
      case 'o':
        posicion[1]--;
        break;
    }
  }
  if (posicion[0] === 0 && posicion[1] === 0) {
    return true;
  } else {
    return false;
  }
}

```
Pruebas realizadas:

```typescript
/* eslint-disable max-len */
/* eslint-disable array-bracket-spacing */
import 'mocha';
import {expect} from 'chai';
import {generationApp} from '../src/ejercicio-10';


describe('Test funcion generationApp', () => {
  it('generationApp(["n", "n", "s", "s", "n", "s", "n", "s", "n", "s"]) should return true', () => {
    expect(generationApp(["n", "n", "s", "s", "n", "s", "n", "s", "n", "s"])).to.eql(true);
  });
  it('generationApp(["n", "n", "s", "s"]) should return true', () => {
    expect(generationApp(["n", "n", "s", "s"])).to.eql(true);
  });
  it('generationApp(["n", "n", "o", "o"]) should return false', () => {
    expect(generationApp(["n", "n", "o", "o"])).to.eql(false);
  });
  it('generationApp([]) should return undefined', () => {
    expect(generationApp([])).to.eql(undefined);
  });
  it('generationApp([""]) should return undefined', () => {
    expect(generationApp([""])).to.eql(undefined);
  });
});

```
  Test funcion generationApp

    ✔ generationApp(["n", "n", "s", "s", "n", "s", "n", "s", "n", "s"]) should return true
    ✔ generationApp(["n", "n", "s", "s"]) should return true
    ✔ generationApp(["n", "n", "o", "o"]) should return false
    ✔ generationApp([]) should return undefined
    ✔ generationApp([""]) should return undefined

---
<div id='dv12'/>

En conclusión
He aprendido a usar cierto métodos de array con mayor fluides como indexOd, slice, include, map y demás esto permite desarrollar ciertas implementaciones con mayor entendimiento. Además tener cuidado con métodos como reverse ya que modifican el objeto directamente y no solo modifican la copia esto puede generar problemas en futuras implementaciones pero gracias a la opcion del compilador "sourceMap": true, puedes darte cuenta rapidamente de esto.

Imágenes de la documentacion generada por jsdoc:
![](images/JSDOC.png)
## Autor

* [Joseph Gabino Rodríguez](https://github.com/alu0101329161)