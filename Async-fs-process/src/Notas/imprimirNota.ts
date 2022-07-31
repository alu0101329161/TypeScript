import {Nota} from './notas';

/**
 * Clase que nos permite imprimir una nota
 */
export class PrintNota {
  /**
   * Contructor que recibe el objeto nota
   * @param nota 
   */
  constructor(private nota: Nota) {}

  /**
   * Metodo que permite construir un string y imprimirlo
   * o visualizarlo por consola
   * @returns string
   */
  print(): string {
    const contenido = '{\n "titulo": \"' + this.nota.getTitulo() + "\"," +
      '\n "cuerpo": \"' + this.nota.getCuerpo() + "\"," +
      '\n "color": \"' + this.nota.getColor() + "\"" +
      '\n}';
  
    // console.log(contenido);
    return contenido;
  }
}
  
