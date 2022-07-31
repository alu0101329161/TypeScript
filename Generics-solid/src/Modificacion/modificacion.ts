/* eslint-disable max-len */

/**
 * Clase con la interfaz Colllection
 */
export interface Collection<T> {
  addItem(newItem: T): void;
  getItems(index: number): T;
  removeItem(index: number): T[];
  getNumberOfItems(): number;
}

/**
 * Clase que implementar la interfaz searchable
 */
export interface Searchable<T>{
  search(name: T): T[] | undefined;
}

/**
 * Clase que implemeta dos interfaces
 */
export abstract class SearchableCollection<T> implements Collection<T>, Searchable<T> {
  constructor(protected items: T[]) {
  }
  /**
   * Añadir elemento a la collecion
   * @param newItem 
   */
  addItem(newItem: T): void {
    this.items.push(newItem);
  }
  /**
   * Eliminamos la posicion de ese elemento
   * @param index 
   */
  removeItem(index: number): T[] {
    return this.items.splice(index, 1);
  }
  /**
   * Devuelve el elemento
   */
  getItems(index: number): T {
    return this.items[index];
  }
  getNumberOfItems(): number {
    return this.items.length;
  }
  /**
   * Busca el string o el number
   * @param name 
   */
  abstract search(name: T): T[] | undefined;
}

/**
 * Clase que hereda de la clase Searchable
 */
export class NumericSearchableCollection
  extends SearchableCollection<number> {
  /**
     * LLamamos alconstructor de la padre
     * @param items 
     */
  constructor(items: number[]) {
    super(items);
  }
  /**
   * Buscamos el elemtos en el array de tipo Number
   * @param name 
   */
  search(name: number) {
    return this.items.filter((item) => item === name);
  }
}

/**
 * Clase que hereda de la clase Searchable
 */
export class StringSearchableCollection
  extends SearchableCollection<string> {
  /**
   * Constructor de la clase string
   * @param items 
   */
  constructor(items: string[]) {
    super(items);
  }

  /**
   * Buscamos el elemento
   * @param name 
   */
  search(name: string) {
    return this.items.filter((item) => item === name);
  }
}
