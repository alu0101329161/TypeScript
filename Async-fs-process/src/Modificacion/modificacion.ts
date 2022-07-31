/**
 * @class ReduceAlgoritmo
 */
export abstract class ReduceAlgoritmo {
  /**
   * Constructor
   * @param almacen valores numericos
   */
  constructor(protected almacen: number[]) {}

  /**
   * Metodo que realiza todo el trabajo.
   * @returns El valor del reduce
   */
  public run(callback: (s: number) => number): number {
    // Hook
    this.informacionArray();

    this.almacen = this.operacionMap(callback);

    const aux = this.operacion();

    // Hook
    this.informacionReduce();

    return aux;
  }

  /**
   * Metodo abstracto que cada algortimo tiene que implementar
   */
  protected abstract operacion(): any;

  /**
   * Metodo que es un Hook y muesta la informacion de los arrays de entrada.
   */
  protected informacionArray() {
    console.log(this.almacen);
  }

  /**
   * Realizar la funcion por cada elemento del array
   * @param callback 
   */
  protected operacionMap(callback: (s: number) => number) {
    const x: number[] = []; 
    this.almacen.forEach((s: number) => x.push(callback(s)));
    return x;
  }

  /**
   * Método que es un Hook y muestra que operacion se hizo correctamente.
   */
  protected informacionReduce() {}
}

