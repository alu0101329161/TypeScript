import {ReduceAlgoritmo} from "./modificacion";

/**
 * @class AddReduce
 */
export class AddReduce extends ReduceAlgoritmo {
  /**
     * Constructor.
     * @param almacen Conjunto de numeros para inicializar el constructor de la clase aabstracta
     */
  constructor(...almacen: number[]) {
    super(almacen);
  }
  
  /**
   * Método que implementa el alggortimo
   * @returns El valor del algortimo.
   */
  protected operacion(): number {
    let aux: number = 0;
    this.almacen.forEach((valor) => {
      aux += valor;
    });
  
    console.log(aux);
    return aux;
  }
  
  /**
   * Método que es un Hook de la clase padre y lo hemos redefinicdo
   */
  protected informacionReduce() {
    console.log("La suma se ha completado");
  }
}
