import {Cancion} from "./cancion";
import {Coleccion} from "./coleccionGenerica";

/**
 * @type PlaylistType, tipo de dato que representa una playlist
 */
type playlistType = {
  nombre: string,
  canciones: Coleccion<Cancion>,
  duracion: duracionHorMinType,
  generos: string[],
  creador: string,
}

/**
 * @type duracionHorMinType, tipo de dato que representa la duración de una playlist
 */
type duracionHorMinType = {
  hor: number,
  min: number
}

/**
 * @class Playlist
 */
export class PlayList {
  /**
   * @param playlist playlist de la clase
   */
  public playlist: playlistType = {nombre: "", canciones: new Coleccion<Cancion>(), duracion: {hor: 0, min: 0}, generos: [], creador: ""};
  /**
   * Constructor
   * @param playlist playlist
   * @param memoria false si la informacion se está sacando de la base de datos
   */
  constructor(playlist: playlistType, memoria: boolean = true ) {
    this.playlist.nombre = playlist.nombre;
    this.playlist.creador = playlist.creador;
    this.playlist.duracion = playlist.duracion;
    this.playlist.generos = playlist.generos;

    if (memoria) {
      this.incluirGeneros(playlist.canciones);
      this.calcularDuracion(playlist.canciones);
    }
    
    this.playlist.canciones = playlist.canciones;
  }

  /**
   * Metodo que crea los generos de la playslist a partir de las canciones
   * @param canciones canciones de la playlist
   */
  private incluirGeneros(canciones: Coleccion<Cancion>): void {
    [...canciones].forEach((cancion) => {
      cancion.getGeneros().forEach((genero) => {
        if (!this.playlist.generos.includes(genero)) {
          this.playlist.generos.push(genero);
        }
      });
    });
  }

  /**
   * Método que calcula la duración de la playlist
   * @param canciones canciones de la playlist
   */
  private calcularDuracion(canciones: Coleccion<Cancion>): void {
    let min = 0;
    let seg = 0;
    [...canciones].forEach((cancion) => {
      min += cancion.getDuracion().min;
      seg += cancion.getDuracion().seg;
    });

    // seg = seg % 60;
    min += seg / 60 >> 0;
    this.playlist.duracion.hor = min / 60 >> 0;
    this.playlist.duracion.min = min % 60;
  }

  /**
   * getter nombre
   * @returns nombre de la playlist
   */
  getNombre(): string {
    return this.playlist.nombre;
  }

  /**
   * getter canciones
   * @returns canciones
   */
  getCanciones(): Coleccion<Cancion> {
    return this.playlist.canciones;
  }

  /**
   * getter duracion
   * @returns duracion de la playlist
   */
  getDuracion(): duracionHorMinType {
    return this.playlist.duracion;
  }

  /**
   * getter generos
   * @returns generos
   */
  getGeneros(): string[] {
    return this.playlist.generos;
  }

  /**
   * getter autor
   * @returns autor de la playlist
   */
  getCreador(): string {
    return this.playlist.creador;
  }

  /**
   * setter creador
   * @param creador nuevo creador
   */
  setCreador(creador: string): void {
    this.playlist.creador = creador;
  }

  /**
   * setter nombre
   * @param nombre nombre de la playlist
   */
  setNombre(nombre: string): void {
    this.playlist.nombre = nombre;
  }

  /**
   * setter generos
   * @param generos nuevos generos
   */
  setGeneros(generos: string[]): void {
    this.playlist.generos = generos;
  }

  /**
   * setter duracion
   * @param duracion duracion de la playlist
   */
  setDuracion(duracion: duracionHorMinType): void {
    this.playlist.duracion = duracion;
  }

  /**
   * setter canciones
   * @param canciones nuevas canciones
   */
  setCanciones(canciones: Coleccion<Cancion>): void {
    this.playlist.canciones = canciones;
  }

  /**
   * método que añade cancion de la playlist.
   * @param cancion nombre de la cancion a añadir
   */
  addCancion(cancion: Cancion): void {
    this.playlist.canciones.addElemento(cancion);
    this.calcularDuracion(this.playlist.canciones);
    this.incluirGeneros(this.playlist.canciones);
  }

  /**
   * método que elimina cancion de la playlist.
   * @param nombre nombre de la cancion a eliminar
   */
  eliminarCancion(nombre: string): void {
    this.playlist.canciones.removeElemento(nombre);
    this.calcularDuracion(this.playlist.canciones);
    this.playlist.generos = [];
    this.incluirGeneros(this.playlist.canciones);
  }

  /**
   * método que calcula las reproducciones totales de una
   * playlist
   * @return numero de reprodducciones totales
   */
  calcularReproduccionesTotales(): number {
    let total = 0;
    [...this.playlist.canciones].forEach((cancion) => {
      total += cancion.getReproducciones();
    });
    return total;
  }
}

/**
 * @class PrintPlayList
 */
export class PrintPlayList {
  /**
   * Constructor de la clase PrintArtista.
   * @param playlist playlist a imprimir
  */
  constructor(private playlist: PlayList) {}
  
  /**
   * método que imprime informacion de la playlist.
   * @returns string con la informacion de la playlist
  */
  print(): string {
    let result = "";
    [...this.playlist.getCanciones()].forEach((cancion) => {
      result += cancion.getNombre() + "," + " ";
    });
    const salida = `Nombre: ${this.playlist.getNombre()}` +
    `\nCanciones: ${result}` +
    `\nDuración: ${this.playlist.getDuracion().hor}h ${this.playlist.getDuracion().min}min` +
    `\nGeneros: ${this.playlist.getGeneros().join(', ')}` +
    `\n////////////////////\n\n`;
    console.log(salida);
    return salida;
  }
}
