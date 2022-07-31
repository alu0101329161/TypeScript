/* eslint-disable max-len */
/* eslint-disable semi */
import {BasicStreamableCollection, argumentosType} from './basicstreamcollectionClass'

/**
 * Posibles clasificaciones en la peliculas
 * @param  {} "+7"|"+12"|"+18"
 */
type clasificacionType = ("+7" | "+12" | "+18");
/**
 * Almacenamos las propiedades de las peliculas
 */
export type peliculas = {
  titulo: string;
  año: number;
  duracion: number;
  clasificacion: clasificacionType;
};
/**
 * Clase que representa las peliculas
 * @param  {peliculas[]} items
 */
export class StreamablePeliculas extends BasicStreamableCollection<peliculas> {
  /**
   * @param  {peliculas[]} items
   */
  constructor(items: peliculas[]) {
    super(items);
  }
  /**
   * Retornamos el Titulo
   * @param  {} {returnthis.items.filter((item
   * @param  {} =>item.titulo
   */
  getTitulo(searchTerm: string) {
    return this.items.filter((item) => item.titulo === searchTerm);
  }
  /**
   * Retornamos el Año
   * @param  {} {returnthis.items.filter((item
   * @param  {} =>item.año
   */
  getAño(searchTerm: number) {
    return this.items.filter((item) => item.año === searchTerm);
  }
  /**
   * Retornamos la duracion
   * @param  {} {returnthis.items.filter((item
   * @param  {} =>item.duracion
   */
  getDuracion(searchTerm: number) {
    return this.items.filter((item) => item.duracion === searchTerm);
  }
  /**
   * Retornamos la clasificacion
   * @param  {} {returnthis.items.filter((item
   * @param  {} =>item.clasificacion
   */
  getClasificacion(searchTerm: clasificacionType) {
    return this.items.filter((item) => item.clasificacion === searchTerm);
  }
  /**
   * Retornamos el catalogo
   * @param  {} {console.table(this.items
   */
  mostrarCatalogo() {
    console.table(this.items);
  }
  /**
   * Filtramos las peliculas
   * @param  {argumentosType} parametro
   * @param  {string} searchTerm
   * @returns peliculas
   */
  filtrar(parametro: argumentosType, searchTerm: string): peliculas[]|undefined {
    switch (parametro) {
      case 'titulo':
        return this.items.filter((item) => item.titulo === searchTerm);
      case 'año':
        return this.items.filter((item) => String(item.año) === searchTerm);
      case 'duracion':
        return this.items.filter((item) => String(item.duracion) === searchTerm);
      case 'clasificacion':
        return this.items.filter((item) => item.clasificacion === searchTerm);
      default:
        console.log("No ha aparecido ninguna coincidencia");
        return undefined;
    }
  }
}
