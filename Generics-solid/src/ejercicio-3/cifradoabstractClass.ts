/* eslint-disable max-len */

/**
 * Interfaz Alfabeto
 */
interface CesarAlphabet {
  alfabeto: string;
}

/**
 * Interfaz Clave
 */
interface CesarKey {
  clave: string;
}
/**
 * Clase para cifrar Cesar
 * @param  {string} publicalfabeto
 * @param  {string} publicclave
 * @returns string
 */
export abstract class Cesar implements CesarAlphabet, CesarKey {
  /**
   * @param  {string} publicalfabeto
   * @param  {string} publicclave
   */
  constructor(public alfabeto: string, public clave: string) {}

  /**
   * Rellenamos la clave hasta el tamaño del mensaje
   * @param  {string} str
   */
  protected rellenarClave(str: string): void {
    let claveNew = "";
    if (this.clave.length < str.length) {
      for (let step = 0; step < str.length; step++) {
        claveNew += this.clave[step % this.clave.length];
      }
    }
    this.clave = claveNew;
  }
  /**
   * Metodo que se define en cada subclase
   * @param  {string} mensaje
   * @returns string
   */
  abstract cifradoIndescifrable(mensaje:string): string|undefined;
}
