import {ReduceAlgoritmo} from "./modificacion";

/**
 * @class RestReduce
 */
export class RestReduce extends ReduceAlgoritmo {
  /**
     * Constructor.
     * @param almacen Conjunto de numeros para inicializar el constructor de la clase abstracta
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
      aux -= valor;
    });
  
    console.log(aux);
    return aux;
  }
  
  /**
   * Método que es un Hook de la clase padre y lo hemos redefinicdo
   */
  protected informacionReduce() {
    console.log("La resta se ha completado");
  }
}


/* function clienteResta(restReduce: RestReduce) {
  restReduce.run();
}
  
clienteResta(new RestReduce(1, 2, 3, 4)); */
