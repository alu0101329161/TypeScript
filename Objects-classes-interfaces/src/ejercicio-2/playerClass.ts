/* eslint-disable curly */
/* eslint-disable max-len */

/**
 * Clase que representa a un jugador y su 
 * informacion
 */
export class Player {
  /**
   * COnstruimos el objeto player
   * @param  {string} privatename
   * @param  {number} privatetipo
   */
  constructor(private name: string,
    private tipo: number) {
    // Revisamos los parámetro introducidos por teclado 
    if (name === "") {
      this.name = "Manolo";
    }
    if (tipo !== 1 && tipo !== 2) {
      this.tipo = 1;
    }
  }
  /**
   * Jugador eligue columna de manera aleatoria
   * @param  {number} min
   * @param  {number} max
   */
  public random(min: number, max: number) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }
  /**
   * @returns Acceder al nombre del jugador
   */
  public getName() {
    return this.name;
  }
  /**
   * @returns Accedemos a la ficha del jugador
   */
  public getTipo() {
    return this.tipo;
  }
  /**
   * Imprimmimos la informacion del jugador
   */
  public printPlayer(): string {
    const result = `El jugador ${this.name} de tipo ${this.tipo} procede a intoducir ficha: `; 
    console.log(result);
    return result;
  }
  /**
   * Imprimimos al jugador ganador
   */
  public printGanador(): string {
    const result = `EL ganador es ${this.name}`;
    console.log(result);
    return result;
  }
}
const jugador1 = new Player("Manolo", 1);
const jugador2 = new Player("Paco", 2);
jugador2.printGanador();
jugador2.printPlayer();
