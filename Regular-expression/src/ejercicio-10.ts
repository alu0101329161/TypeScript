

/**
 * Calcula la distancia de Manhattan entre dos puntos
 * @param str1 
 * @param str2 
 * @returns value: number
 */
export function distanceOfManhattan(str1: string, str2:string) :number {
  const array: string[] = str1.split(",");
  const array1: string[] = str2.split(",");
  let value: number = 0;
  for (let step = 0; step < array.length; step++) {
    value += Math.abs(parseInt(array[step]) - parseInt(array1[step]));
  }
  return value; 
}

/* console.log(distanceOfManhattan("1,3", "4,10"));
console.log(distanceOfManhattan("1,1", "1,1"));
console.log(distanceOfManhattan("-1,3,7", "-5,8,7"));  */
