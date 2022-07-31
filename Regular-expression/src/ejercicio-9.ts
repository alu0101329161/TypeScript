
/**
 * Convert decimal to Roman
 * @param numero 
 * @returns string
 * I,X,C,M no se pueden escribir mas de 3 veces
 */
export function decimalToRomanLast(numero: number): string {
  const units = Math.trunc(numero % 10); numero /= 10;
  // console.log(units);
  const tens = Math.trunc(numero % 10); numero /= 10;
  // console.log(tens);
  const hundreds = Math.trunc(numero % 10); numero /= 10;
  // console.log(hundreds);
  const thousands = Math.trunc(numero % 10); numero /= 10;
  // console.log(thousands);
  let result = "";

  switch (thousands) {
    case 1: result +="M"; break; // 1000
    case 2: result +="MM"; break; // 2000
    case 3: result +="MMM"; break; // 3000
  }

  switch (hundreds) {
    case 1: result +="C"; break; // 100
    case 2: result +="CC"; break; // 200
    case 3: result +="CCC"; break; // 300
    case 4: result +="CD"; break; // 400
    case 5: result +="D"; break;
    case 6: result +="DC"; break;
    case 7: result +="DCC"; break;
    case 8: result +="DCCC"; break;
    case 9: result +="CM"; break;
  }

  switch (tens) {
    case 1: result +="X"; break; // 10
    case 2: result +="XX"; break; // 20
    case 3: result +="XXX"; break; // 30
    case 4: result +="XL"; break; // 40
    case 5: result +="L"; break; // 50
    case 6: result +="LX"; break; // 60
    case 7: result +="LXX"; break; // 70
    case 8: result +="LXXX"; break; // 80
    case 9: result +="XC"; break; // 90
  }

  switch (units) {
    case 1: result +="I"; break; // 1
    case 2: result +="II"; break; // 2
    case 3: result +="III"; break; // 3
    case 4: result +="IV"; break; // 4
    case 5: result +="V"; break; // 5
    case 6: result +="VI"; break; // 6
    case 7: result +="VII"; break; // 7
    case 8: result +="VIII"; break; // 8
    case 9: result +="IX"; break; // 9
  }
  return result;
}
console.log(decimalToRomanLast(35)); 
console.log(decimalToRomanLast(2014)); // MMXIV
console.log(decimalToRomanLast(1995));// MCMXCV
console.log(decimalToRomanLast(20)); // XX 

// console.log("salida= " + decimalToRoman(2014)); // salida MMXIV
// console.log(decimalToRoman(1995));  // MCMXCV
// console.log(decimalToRoman(20));

/**
 * Convert character to decimal
 * @param character 
 * @returns number
 */
export function characterToDecimal(character: string): number {
  // Valores numericos asocidos a cada letra del alfabeto
  if (character == 'I') {
    return 1;
  } else if ((character == 'V')) {
    return 5;
  } else if (character == 'X') {
    return 10;
  } else if (character == 'L') {
    return 50;
  } else if (character == 'C') {
    return 100;
  } else if (character == 'D') {
    return 500;
  } else if (character == 'M') {
    return 1000;
  } else {
    return -1;
  }
}

/**
 * Convert roman to decimal
 * @param romanNumber 
 * @returns result: number
 */
export function romanToDecimal(romanNumber: string): number {
  // Recogemos el primer caracter recibido y su valor asociado
  let result: number = characterToDecimal(romanNumber.charAt(0));
  let lastPosition: number = 0;
  let actualPosition: number = 0;

  // Recorremos hasta el tamaño del argumento empezando en 1
  for (let step: number = 1; step < romanNumber.length; step++) {
    actualPosition = characterToDecimal(romanNumber.charAt(step));
    lastPosition = characterToDecimal(romanNumber.charAt(step - 1));
    // console.log(actualPosition, lastPosition);

    if (actualPosition <= lastPosition) {
      // Sumamos valor numerico actual 
      result = result + actualPosition;
    } else {
      // Sumamos digito con mayor peso
      result = result - lastPosition * 2 + actualPosition;
      // console.log(actualPosition, lastPosition);
    }
  }

  return result;
}


console.log(romanToDecimal('MCMXCV'));
console.log(romanToDecimal('MMXIV'));
console.log(romanToDecimal('XX'));
