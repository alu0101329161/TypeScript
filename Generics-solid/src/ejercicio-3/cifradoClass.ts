import {Cesar} from "./cifradoabstractClass";

/**
 * Realizamos cifrado
 * @param  {string} alfabeto
 * @param  {string} clave
 */
export class Cifrado extends Cesar {
  /**
   * @param  {string} alfabeto
   * @param  {string} clave
   */
  constructor(alfabeto: string, clave: string) {
    super(alfabeto, clave);
  }
  /**
   * Ciframos el mensaje pasado parámetros
   * @param  {string} str
   * @returns string
   */
  cifradoIndescifrable(str: string): string {
    this.rellenarClave(str);
    let result = "";
    for (let step = 1; step <= str.length; step++) {
      // compruebo que el alfabeto pertenece al mensaje
      if (this.alfabeto.indexOf(str[step - 1]) === -1) {
        result += str[step - 1];
      } else {
        // saco la psoicion que hay q sumar
        const bit = this.alfabeto.indexOf(this.clave[step - 1]);
        result += this.alfabeto[(this.alfabeto.indexOf(str[step - 1]) + bit) % 
              this.alfabeto.length];
      }
    }
    return result;
  }
};


const variable = new Cifrado("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ", "CLAVE");
console.log(variable.cifradoIndescifrable("HOLAESTOESUNAPRUEBA"));
