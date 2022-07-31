
/**
 * @interface NombreInterfaz Todos los elementos que se van a guardar en la colección deben implementar esta interfaz
 */
interface NombreInterfaz {
  /**
   * Todos los elementos que se van a guardar en la colección deben tener metodo
   * getNombre() que devuelva el nombre del elemento
   */
  getNombre: () => string,
}

/**
 * @class Coleccion
 */
export class Coleccion<T extends NombreInterfaz> implements Iterable<T> {
  /**
   * @param coleccion almacen
   */
  public coleccion: T[];
  
  /**
   * Cosntructor.
   * @param coleccion coleccion a almacenar
   */
  constructor(...coleccion: T[]) {
    this.coleccion = coleccion;
  }

  /**
   * getter de un elemento segun el nombre
   * @param nombre nombre del eleemnto
   * @returns un elemento
   */
  getElemento(nombre: string) {
    return [...this.coleccion.values()].find((elemento) =>
      elemento.getNombre() === nombre);
  }

  /**
   * elimina un elemento segun su nombre
   * @param nombre nombre a eliminar
   */
  removeElemento(nombre: string) {
    this.coleccion = this.coleccion.filter((item) => item.getNombre() !== nombre);
  }

  /**
   * Cambia un nuevo valor por otro
   * @param valor nuevo valor
   * @param posicion posicion del valor a cambiar
   */
  changeElemento(valor: T, posicion: number): void {
    this.coleccion[posicion] = valor;
  }

  /**
   * Añade un elemento.
   * @param elemento elemento a añadir
   */
  addElemento(elemento: T) {
    this.coleccion.push(elemento);
  }

  /**
   * Metodo que vacía el almacen
   */
  limpiarElementos(): void {
    this.coleccion = [];
  }

  /**
   * Metodo que elimina un determinado objeto
   * @param elemento elemento a eliminar
   */
  deleteElemento(elemento: T) {
    this.coleccion.splice(this.coleccion.indexOf(elemento), 1);
  }

  /**
   * Metodo que devuelve el tamaño del almacen
   */
  longitudColeccion(): number {
    return this.coleccion.length;
  }

  /**
   * Iterable
   * @returns un iterador
   */
  [Symbol.iterator](): Iterator<T> {
    return this.coleccion.values();
  }
}
