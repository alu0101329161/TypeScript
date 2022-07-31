/* eslint-disable camelcase */
/* eslint-disable max-len */

/**
 * Clase que recibe un numerador y un denominador
 */
export class Racional {
  /**
   * Comprobamos si el denominador es 0 y construimos
   * el objeto rational
   * @param numerador 
   * @param denominador 
   */
  constructor(private numerador: number, private denominador: number) {
    // Si el denominador es 0 introducimos un uno ya quer sería indeterminacion
    if (this.denominador === 0) {
      this.denominador = 1;
    }
  };
  /**
   * Getter del numerador
   */
  getNumerador() {
    return this.numerador;
  }
  /**
   * Getter de denominador
   */
  getDenominador() {
    return this.denominador;
  }
  /**
   * Simplificamos el rational introducido por teclado
   */
  public simplificar() {
    const valor = this.mcd(this.numerador, this.denominador);
    this.numerador = this.numerador/valor;
    this.denominador = this.denominador/valor;
    return this;
  }
  /**
   * Hallamos el maximo comun dividor
   * @param a 
   * @param b 
   */
  private mcd(a : number, b: number) {
    while (a != b) {
      if (a > b) {
        a = a - b;
      } else {
        b = b - a;
      }
    }
    return a;
  }
  /**
   * Invertimos el rational pasado por parámetro
   */
  public invertir() {
    const aux_numerador = this.numerador;
    this.numerador = this.denominador;
    this.denominador = aux_numerador;
  }
  /**
   * Sumamos dos numero racionales 
   * @param value 
   */
  public suma(value: Racional): Racional {
    return new Racional((this.numerador * value.denominador) + (this.denominador * value.numerador), this.denominador * value.denominador);
  }
  /**
   * Restamos dos numeros racionales
   * @param value 
   */
  public resta(value: Racional): Racional {
    return new Racional((this.numerador * value.denominador) - (this.denominador * value.numerador), this.denominador * value.denominador);
  }
  /**
   * Dividimos dos numero racinales
   * @param value 
   */
  public dividir(value: Racional): Racional {
    return new Racional(this.numerador * value.denominador, this.denominador * value.numerador);
  }
  /**
   * Multiplicamos dos racionales
   * @param value 
   */
  public multiplicar(value: Racional): Racional {
    return new Racional(this.numerador * value.numerador, this.denominador * value.denominador);
  }
  /**
   * Cambiamos la notacion del racional
   * @param decimales 
   */
  public notacionFija(decimales: number) {
    return (this.numerador / this.denominador).toFixed(decimales);
  }
  /**
   * Imprimimos el rational
   */
  public printRacional(): string {
    return `El numero racional es: ${this.numerador} / ${this.denominador}`;
  }
}

/* const value2 = new Racional(3, 9);
console.log(value2.simplificar());
const value = new Racional(1, 2);
const value1 = new Racional(3, 2);
console.table(value);
value.invertir();
console.table(value)
let valor = value.suma(value1);
console.log(valor.printRacional());
console.table(value)
console.log(value.printRacional());
console.log(value.notacionFija(2)); */
