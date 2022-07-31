
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

console.log(productTable(2));
console.log(productTable(3));
console.log(productTable(4));
