import {Cesar} from "./cifradoabstractClass";

/**
 * Clase para descifrar mensaje
 * @param  {string} alfabeto
 * @param  {string} clave
 */
export class Descifrado extends Cesar {
  constructor(alfabeto: string, clave: string) {
    super(alfabeto, clave);
  }
  /**
   * Desciframos el mensaje
   * @param  {string} str
   * @returns string
   */
  cifradoIndescifrable(str: string): string | undefined {
    this.rellenarClave(str);
    let result = "";
    for (let step = 1; step <= str.length; step++) {
      // compruebo que el alfabeto pertenece al mensaje
      if (this.alfabeto.indexOf(str[step - 1]) === -1) {
        result += str[step - 1];
      } else {
        // saco la psoicion que hay q restar
        const bit = this.alfabeto.indexOf(this.clave[step - 1]) - 
        this.alfabeto.length;
        // modulo para no salirnos
        result += this.alfabeto[(this.alfabeto.indexOf(str[step - 1]) - bit) % 
        this.alfabeto.length];
      }
    }
    return result;
  }
};

const variable1 = new Descifrado("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "CLAVE");
console.log(variable1.cifradoIndescifrable("JZLVIUEOZWWXALVWOBV"));
