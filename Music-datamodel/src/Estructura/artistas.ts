import {Coleccion} from "./coleccionGenerica";
import {Album} from "./album";
import {Cancion} from "./cancion";

/**
 * @type artistaType, tipo de dato que representa un artista
 */
type artistaType = {
  nombre: string,
  grupos: string[],
  generos: string[],
  albumes: Coleccion<Album>,
  canciones: Coleccion<Cancion>,
  oyentes: number,
}

/**
 * @class Artista
 */
export class Artista {
  /**
   * @param artista, artista que almacena la información.
   */
  public artista: artistaType = {nombre: "", grupos: [], generos: [], albumes: new Coleccion<Album>(), canciones: new Coleccion<Cancion>(),
    oyentes: 0};

  /**
   * Constructor de la clase Artista.
   * @param memoria, false si la información se va a sacar de la base de datos.
   * @param artista, artista que almacena.
   */
  constructor(artista: artistaType, memoria: boolean = true) {
    this.artista.nombre = artista.nombre;
    this.artista.grupos = artista.grupos;
    this.artista.generos = artista.generos;
    this.artista.oyentes = artista.oyentes;
    
    if (memoria) {
      this.comprobarAlbumes(artista.albumes);
      this.comprobarCanciones(artista.canciones);
    } else {
      this.artista.albumes = artista.albumes;
      this.artista.canciones = artista.canciones;
    }
  }

  /**
   * Método que comprueba que las canciones cumplan los requisitos.
   * @param canciones Coleccion de canciones a comprobar
   */
  private comprobarCanciones(canciones: Coleccion<Cancion>): void {
    let aux = 0;
    [...canciones].forEach((cancion) => {
      if (this.artista.nombre === cancion.getAutor()) {
        cancion.getGeneros().forEach((genero) => {
          this.artista.generos.forEach((generosArtista) => {
            if (generosArtista === genero) {
              aux++;
            }
          });
        });
        if (aux === cancion.getGeneros().length) {
          this.artista.canciones.addElemento(cancion);
        }
        aux = 0;
      }
    });
  }

  /**
   * Método que comprueba que los albumes cumplan los requisitos.
   * @param albumes Coleccion de albumes a comprobar
   */
  private comprobarAlbumes(albumes: Coleccion<Album>): void {
    let aux = 0;
    [...albumes].forEach((album) => {
      if (this.artista.nombre === album.getAutor()) {
        album.getGeneros().forEach((genero) => {
          this.artista.generos.forEach((generosArtista) => {
            if (generosArtista === genero) {
              aux++;
            }
          });
        });
        if (aux === album.getGeneros().length) {
          this.artista.albumes.addElemento(album);
        }
      }
    });
  }

  /**
   * getter del nombre del artista.
   * @returns nombre del album
   */
  getNombre(): string {
    return this.artista.nombre;
  }

  /**
   * getter del nombre del Grupo.
   * @returns nombre del grupo
   */
  getGrupos(): string[] {
    return this.artista.grupos;
  }

  /**
   * getter de los generos.
   * @returns array de generos
   */
  getGeneros(): string[] {
    return this.artista.generos;
  }

  /**
   * getter de los albumes.
   * @returns Coleccion de albumes
   */
  getAlbumes(): Coleccion<Album> {
    return this.artista.albumes;
  }

  /**
   * getter de las canciones.
   * @returns Coleccion de Canciones
   */
  getCanciones(): Coleccion<Cancion> {
    return this.artista.canciones;
  }

  /**
   * getter de los oyentes.
   * @returns numero de oyentes
   */
  getOyentes(): number {
    return this.artista.oyentes;
  }

  /**
   * setter de la cantidad de oyentes.
   * @param oyentes nueva cantidad de oyentes
   */
  setOyentes(oyentes: number): void {
    this.artista.oyentes = oyentes;
  }

  /**
   * setter del nombre del artista.
   * @param nombre nuevo nombre del artista
   */
  setNombre(nombre: string): void {
    this.artista.nombre = nombre;
  }

  /**
   * setter de los grupos.
   * @param artistasGrupos nuevos grupos del artista
   */
  setGrupos(artistasGrupos: string[]): void {
    this.artista.grupos = artistasGrupos;
  }

  /**
   * setter de los generos
   * @param generos nuevos generos del artista
   */
  setGeneros(generos: string[]): void {
    this.artista.generos = generos;
  }

  /**
   * setter de los albumes
   * @param albumes nueva coleccion de albumes
   */
  setAlbumes(albumes: Coleccion<Album>): void {
    this.artista.albumes = albumes;
  }

  /**
   * setter de las canciones
   * @param canciones nueva coleccion de canciones
   */
  setCanciones(canciones: Coleccion<Cancion>): void {
    this.artista.canciones = canciones;
  }

  /**
   * método que añade una canción al artista.
   * @param cancion nueva canción
   */
  addCancion(canciones: Cancion): void {
    this.artista.canciones.addElemento(canciones);
  }

  /**
   * método que añade un nuevo album al artista.
   * @param album nuevo album
   */
  addAlbum(album: Album): void {
    this.artista.albumes.addElemento(album);
  }
}

/**
 * @class PrintArtista
 */
export class PrintArtista {
  /**
   * Constructor de la clase PrintArtista.
   * @param artista artista a imprimir
  */
  constructor(private artista: Artista) {}

  /**
   * método que imprime informacion del artista.
   * @returns string con la informacion del artista
  */
  print(): string {
    const salida = `Nombre: ${this.artista.getNombre()}` +
    `\nGrupo: ${this.artista.getGrupos().join(", ")}` +
    `\nGeneros: ${this.artista.getGeneros().join(', ')}` +
    `\nAlbumes: ${[...this.artista.getAlbumes()].join(', ')}` +
    `\nCanciones: ${[...this.artista.getCanciones()].join(', ')}` +
    `\nOyentes: ${this.artista.getOyentes()}` +
    `\n////////////////////\n\n`;
    console.log(salida);
    return salida;
  }
}
