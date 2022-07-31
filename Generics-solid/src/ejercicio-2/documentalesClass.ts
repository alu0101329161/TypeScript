/* eslint-disable max-len */
/* eslint-disable semi */
import {BasicStreamableCollection, argumentosType} from './basicstreamcollectionClass'

/**
 * Tipos de documentales
 * @param  {} "ciencia"|"fauna"|"historia"
 */
export type documentalType = ("ciencia" | "fauna" | "historia");
/**
 * Obejto que almacena las propiedades de los 
 * documentales
 */
export type documentales = {
  titulo: string;
  año: number;
  duracion: number;
  genero: documentalType;
};

/**
 * Clase que representa las peliculas
 * @param  {documentales[]} items
 */
export class StreamableDocumentales extends BasicStreamableCollection<documentales> {
  /**
   * @param  {documentales[]} items
   */
  constructor(items: documentales[]) {
    super(items);
  }
  /**
   * Retornamos el titulo
   * @param  {} {returnthis.items.filter((item
   * @param  {} =>item.titulo
   */
  getTitulo(searchTerm: string) {
    return this.items.filter((item) => item.titulo === searchTerm);
  }
  /**
   * Retornamos el año
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
   * Retornamos el genero
   * @param  {} {returnthis.items.filter((item
   * @param  {} =>item.genero
   */
  getGenero(searchTerm: documentalType) {
    return this.items.filter((item) => item.genero === searchTerm);
  }
  /**
   * Mostramos el catalogo
   * @param  {} {console.table(this.items
   */
  mostrarCatalogo() {
    console.table(this.items);
  }

  /**
   * Filtramos los documentales
   * @param  {argumentosType} parametro
   * @param  {string} searchTerm
   * @returns documentales
   */
  filtrar(parametro: argumentosType, searchTerm: string): documentales[]|undefined {
    switch (parametro) {
      case 'titulo':
        return this.items.filter((item) => item.titulo === searchTerm);
      case 'año':
        return this.items.filter((item) => String(item.año) === searchTerm);
      case 'duracion':
        return this.items.filter((item) => String(item.duracion) === searchTerm);
      case 'genero':
        return this.items.filter((item) => item.genero === searchTerm);
      default:
        console.log("No ha aparecido ninguna coincidencia");
        return undefined;
    }
  }
}
