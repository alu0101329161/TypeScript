/* eslint-disable max-len */
/* eslint-disable semi */

import {BasicStreamableCollection, argumentosType} from './basicstreamcollectionClass'

/**
 * @param  {} "anime"|"romace"|"aventuras"
 */
type generoType = ("anime" | "romace" | "aventuras");
export type series = {
  titulo: string;
  temporadas: number;
  año: number;
  duracion: number;
  genero: generoType;
};
/**
 * Clase que representa las series
 * @param  {series[]} items
 */
export class StreamableSeries extends BasicStreamableCollection<series> {
  /**
   * @param  {series[]} items
   */
  constructor(items: series[]) {
    super(items);
  }
  /**
   * Retornamos el titulo
   * @param  {} {returnthis.items.filter((item
   * @param  {} =>item.titulo
   */
  getTitulo(searchTerm: string): series[] {
    return this.items.filter((item) => item.titulo === searchTerm);
  }
  /**
   * Sacamos los que cumplan ese año
   * @returns series
   */
  getAño(searchTerm: number): series[] {
    return this.items.filter((item) => item.año === searchTerm);
  }
  /**
   * Retornamos la duracion
   * @param  {} {returnthis.items.filter((item
   * @param  {} =>item.duracion
   */
  getDuracion(searchTerm: number): series[] {
    return this.items.filter((item) => item.duracion === searchTerm);
  }
  /**
   * Retornamos el genero
   * @param  {} {returnthis.items.filter((item
   * @param  {} =>item.genero
   */
  getGenero(searchTerm: generoType): series[] {
    return this.items.filter((item) => item.genero === searchTerm);
  }
  /**
   * Retornamos el catalogo
   * @param  {} {console.table(this.items
   */
  mostrarCatalogo(): void {
    console.table(this.items);
  }
  /**
   * @param  {argumentosType} parametro
   * @param  {string} searchTerm
   * @returns series
   */
  filtrar(parametro: argumentosType, searchTerm: string): series[]|undefined {
    switch (parametro) {
      case 'titulo':
        return this.items.filter((item) => item.titulo === searchTerm);
      case 'año':
        return this.items.filter((item) => String(item.año) === searchTerm);
      case 'duracion':
        return this.items.filter((item) => String(item.duracion) === searchTerm);
      case 'temporada':
        return this.items.filter((item) => String(item.temporadas) === searchTerm);
      case 'genero':
        return this.items.filter((item) => item.genero === searchTerm);
      default:
        console.log("No ha aparecido ninguna coincidencia");
        return undefined;
    }
  }
}
