
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

console.log(operationNPoints([1, 1, 1, 5], [2, 2, 2, 7], ""));
// [ 3, 3, 3, 12 ]
console.log(operationNPoints([1, 1, 1, 5], [2, 2, 2, 7], "-"));
// [ -1, -1, -1, -2 ]

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

console.log(productNPoints([1, 2, 5, 7], 2)); // [ 2, 4, 10, 14 ]
console.log(productNPoints([1, 2, 5, 7], 0));
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

console.log(euclideanNDistance([1, 3, 6], [2, 6, 7]));
