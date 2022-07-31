
/**
 * Nos permitira limitar los tipos de colores en Chalk
 * 
 */
export type typeColor = ("red" | "green" | "blue" | "yellow");

/**
 * Clase Notas que alamacenara el titulo de la nota,
 * el cuerpo y el color
 */
export class Nota {
  /**
   * Constructor que permitirá crear la Nota
   * @param titulo titulo de la nota
   * @param cuerpo contenido de la nota
   * @param color  color de la nota
   */
  constructor(private titulo: string, private cuerpo: string, private color: typeColor) {}

  /**
   * Conocer el titulo de la nota
   * @returns string
   */
  getTitulo(): string {
    return this.titulo;
  }

  /**
   * Conocer el contenido de la nota
   * @returns string
   */
  getCuerpo(): string {
    return this.cuerpo;
  }

  /**
   * Obtener el color de la nota
   * @returns string
   */
  getColor(): string {
    return this.color;
  }

  /**
   * Cambiar el titulo de la nota
   * @param newTitulo 
   */
  setTitulo(newTitulo: string) {
    this.titulo = newTitulo;
  }

  /**
   * Cambiar el contenido de la nota
   * @param newCuerpo 
   */
  setCuerpo(newCuerpo: string) {
    this.cuerpo = newCuerpo;
  }

  /**
   * Cambiar el color de la nota
   * @param newColor 
   */
  setColor(newColor: typeColor) {
    this.color = newColor;
  }
}
