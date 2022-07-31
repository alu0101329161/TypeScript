import {Cancion} from "./cancion";
import {Coleccion} from "./coleccionGenerica";

/**
 * @type almbumType, tipo de dato que representa un album
 */
type albumType = {
  nombre: string,
  autor: string,
  fechaPublicacion: number,
  generos: string[],
  canciones: Coleccion<Cancion>,
}

/**
 * @class Album
 */
export class Album {
  /**
   * @param album, album que almacena la información.
   */
  public album: albumType = {nombre: "", autor: "", fechaPublicacion: 0, generos: [], canciones: new Coleccion<Cancion>()};
  /**
   * Constructor de la clase Album
   * @param album album a almacenar
   * @param memoria false si la información se va a sacar de la base de datos.
   */
  constructor(album: albumType, memoria: boolean = true) {
    this.album.nombre = album.nombre;
    this.album.autor = album.autor;
    this.album.fechaPublicacion = album.fechaPublicacion;
    this.album.generos = album.generos;

    if (memoria) {
      this.comprobarCanciones(album.canciones);
    } else {
      this.album.canciones = album.canciones;
    }
  }

  /**
   * Método que comprueba que las canciones cumplan los requisitos.
   * @param canciones Coleccion de canciones a comprobar
   */
  private comprobarCanciones(canciones: Coleccion<Cancion>): void {
    let aux = 0;
    [...canciones].forEach((cancion) => {
      if (this.album.autor === cancion.getAutor()) {
        cancion.getGeneros().forEach((genero) => {
          this.album.generos.forEach((generosAlbum) => {
            if (generosAlbum === genero) {
              aux++;
            }
          });
        });
        if (aux === cancion.getGeneros().length) {
          this.album.canciones.addElemento(cancion);
        }
        aux = 0;
      }
    });
  }

  /**
   * Método que añade canciones al album
   * @param canciones Coleccion de canciones a añadir
   */
  addCanciones(canciones: Coleccion<Cancion>): void {
    this.comprobarCanciones(canciones);
  }

  /**
   * getter del nombre del album.
   * @returns nombre del album
   */
  getNombre(): string {
    return this.album.nombre;
  }

  /**
   * getter del autor del album.
   * @returns nombre del autor
   */
  getAutor(): string {
    return this.album.autor;
  }

  /**
   * getter de la fecha de publicación
   * @returns fecha de publicaciónn del album
   */
  getFechaPublicacion(): number {
    return this.album.fechaPublicacion;
  }

  /**
   * getter de generos del album
   * @returns generos del albim
   */
  getGeneros(): string[] {
    return this.album.generos;
  }

  /**
   * getter de la colección de canciones del album
   * @returns canciones del album
   */
  getCanciones(): Coleccion<Cancion> {
    return this.album.canciones;
  }

  /**
   * setter nombre del album
   * @param nombre nuevo nombre del album
   */
  setNombre(nombre: string): void {
    this.album.nombre = nombre;
  }

  /**
   * setter nombre del autor
   * @param autor nuevo nombre del autor
   */
  setAutor(autor: string): void {
    this.album.autor = autor;
  }

  /**
   * setter de la fecha de publicación
   * @param fechaPublicacion nueva fecha de publicación
   */
  setFechaPublicacion(fechaPublicacion: number): void {
    this.album.fechaPublicacion = fechaPublicacion;
  }

  /**
   * setter generos del album
   * @param generos nuevos generos
   */
  setGeneros(generos: string[]): void {
    this.album.generos = generos;
  }

  /**
   * setter canciones del album
   * @param canciones nuevas canciones del album
   */
  setCanciones(canciones: Coleccion<Cancion>): void {
    this.album.canciones = canciones;
  }

  /**
   * método que calcula las reproducciones
   * @returns reporducciones totales del album
   */
  calcularReproduccionesTotales(): number {
    let total = 0;
    [...this.album.canciones].forEach((cancion) => {
      total += cancion.getReproducciones();
    });
    return total;
  }

  /**
   * método que añade una sola canción
   * @param canciones cancion a añadir
   */
  addCancion(canciones: Cancion): void {
    this.album.canciones.addElemento(canciones);
  }
}

/**
 * @class PrintAlbum
 */
export class PrintAlbum {
  /**
   * Constructor
   * @param album album a imprimir
   */
  constructor(private album: Album) {}

  /**
   * Método que imprime el album
   */
  print(): string {
    let result = "";
    [...this.album.getCanciones()].forEach((cancion) => {
      result += cancion.getNombre() + "," + " ";
    });
    const salida = `Nombre: ${this.album.getNombre()}` +
    `\nAutor: ${this.album.getAutor()}` +
    `\nFecha Publicación: ${this.album.getFechaPublicacion()}` +
    `\nGeneros: ${this.album.getGeneros().join(', ')}` +
    `\nCanciones: ${result}` +
    `\n////////////////////\n\n`;
    console.log(salida);
    return salida;
  }
}
