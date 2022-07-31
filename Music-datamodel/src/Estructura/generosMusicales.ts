import {Coleccion} from "./coleccionGenerica";
import {Cancion} from "./cancion";
import {Album} from "./album";

/**
 * @type generoMusicalType, tipo de dato que representa un genero musical
 */
type generoMusicalType = {
  nombre: string,
  artistasGrupos: string[],
  albumes: string[],
  canciones: string[]
}

/**
 * @class GeneroMusical
*/
export class GenerosMusicales {
  /**
   * @param genero, genero que almacena la información.
   */
  public genero: generoMusicalType = {nombre: "", artistasGrupos: [], 
    albumes: [], canciones: []};
  /**
   * Constructor de la clase GeneroMusical
   * @param genero, genero que almacena.
   * @param memoria false si la información se va a sacar de la base de datos.
  */
  constructor(genero: generoMusicalType, memoria: boolean = true) {
    this.genero.nombre = genero.nombre;
    this.genero.artistasGrupos = genero.artistasGrupos;

    this.genero.artistasGrupos = genero.artistasGrupos;
    this.genero.albumes = genero.albumes;
    this.genero.canciones = genero.canciones;
  }

  /**
   * getter del nombre del genero.
   * @returns nombre del genero
   */
  getNombre(): string {
    return this.genero.nombre;
  }

  /**
   * getter del artista o grupo.
   * @returns Coleccion de artistas o grupos.
   */
  getArtistaGrupos(): string[] {
    return this.genero.artistasGrupos;
  }

  /**
   * getter del los albumes.
   * @returns Coleccion de albumes.
   */
  getAlbumes(): string[] {
    return this.genero.albumes;
  }

  /**
   * getter de las canciones.
   * @returns Coleccion de canciones.
   */
  getCanciones(): string[] {
    return this.genero.canciones;
  }

  /**
   * setter del nombre del genero.
   * @param nombre nueva nombre del genero.
   */
  setNombre(nombre: string): void {
    this.genero.nombre = nombre;
  }

  /**
   * setter de los artistas o grupos.
   * @param artistasGrupos nueva coleccion de artistas o grupos.
   */
  setArtistasGrupos(artistasGrupos: string[]): void {
    this.genero.artistasGrupos = artistasGrupos;
  }

  /**
   * setter de los albumes.
   * @param albumes nueva coleccion de albumes.
   */
  setAlbumes(albumes: string[]): void {
    this.genero.albumes = albumes;
  }

  /**
   * setter de las canciones.
   * @param canciones nueva coleccion de canciones.
   */
  setCanciones(canciones: string[]): void {
    this.genero.canciones = canciones;
  }

  /**
   * método que añade una canción al genero.
   * @param canciones nueva canción
   */
  addCancion(canciones: string): void {
    this.genero.canciones.push(canciones);
  }

  /**
   * método que añade un nuevo album al genero.
   * @param album nuevo album
   */
  addAlbum(album: string): void {
    this.genero.albumes.push(album);
  }

  /**
   * método que añade un nuevo artista o grupo al genero.
   * @param nombre nuevo artista o grupo
   */
  addArtistaGrupo(nombre: string): void {
    this.genero.artistasGrupos.push(nombre);
  }
}

/**
 * @class PrintGeneroMusical
 */
export class PrintGenerosMusicales {
  /**
   * Constructor de la clase PrintArtista.
   * @param genero genero musical a imprimir.
  */
  constructor(private genero: GenerosMusicales) {}

  /**
   * método que imprime informacion del genero.
   * @returns string con la informacion del genero
  */
  print(): string {
    const salida = `Nombre: ${this.genero.getNombre()}` +
    `\nArtistas: ${[...this.genero.getArtistaGrupos()].join(', ')}` +
    `\nAlbunes: ${[...this.genero.getAlbumes()].join(', ')}` +
    `\nCanciones: ${[...this.genero.getCanciones()].join(', ')}` +
    `\n////////////////////\n\n`;
    console.log(salida);
    return salida;
  }
}
