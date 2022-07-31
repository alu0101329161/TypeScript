/* eslint-disable max-len */

/**
 * @param  {} "titulo"|"año"|"duracion"|"temporada"|"genero"|"clasificacion"
 */
export type argumentosType = ("titulo"|"año"|"duracion"|"temporada"|"genero" | "clasificacion");
/**
 * @param  {T} newItem
 * @returns void
 */
interface StreamableAdd<T> {
  añadir(newItem: T): void;
}

/**
 * @returns number
 */
interface StreamableLenght<T> {
  numeroElementos(): number;
}

/**
 * @param  {argumentosType} parametro
 * @param  {string} searchTerm
 * @returns T
 */
interface StreamableFilter<T> {
  filtrar(parametro: argumentosType, searchTerm: string): T[]|undefined;
}

/**
 * Interfaz con metodo
 * mostrar catalogo
 * @returns void
 */
interface StreamableShow<T> {
  mostrarCatalogo(): void;
}
/**
 * Clase abstracta que representa una coleccion de
 * @param  {T[]} protecteditems
 * @returns void
 */
export abstract class BasicStreamableCollection<T> implements StreamableFilter<T>, StreamableShow<T>, 
StreamableAdd<T>, StreamableLenght<T> {
  /**
   * @param  {T[]} protecteditems
   */
  constructor(protected items: T[]) {}

  /**
   * Añadir elemnto al conjunto
   * @param  {T} newItem
   */
  añadir(newItem: T): void {
    this.items.push(newItem);
  }

  /**
   * Sacar el numero de elementos
   */
  numeroElementos(): number {
    return this.items.length;
  }

  /**
   * Metodo abstracto para filtrar el array
   * @param  {argumentosType} parametro
   * @param  {string} searchTerm
   * @returns T
   */
  abstract filtrar(parametro: argumentosType, searchTerm: string): T[]|undefined;

  /**
   * Mostramso el catálogo
   * @returns void
   */
  abstract mostrarCatalogo(): void;
}
