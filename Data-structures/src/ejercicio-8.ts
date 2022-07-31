/* eslint-disable max-len */

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

console.log(euclideanDistance([1, 10], [2, 5]));
console.log(euclideanDistance([1, 7], [-2, 5]));
