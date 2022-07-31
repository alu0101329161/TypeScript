/* eslint-disable max-len */
/**
 * Definimos los posibles universos
 */
export type universeType = ("Pokemon" | "DC" | "Marvel" | "StarWars" | "DragonBall");
/**
 * Estadisticas compartidas entre universos
 */
export type estadisticasType = {
  vida: number;
  ataque: number;
  defensa: number;
  velocidad: number;
};

/**
 * Clase abstractas donde se apoyarán los universos
 */
export abstract class Fighter {
  /**
   * Creamos el objeto fighter
   * @param  {string} privatenombre
   * @param  {number} privatepeso
   * @param  {number} privatealtura
   * @param  {estadisticasType} privateestadisticas
   * @param  {string} privatefrase
   * @param  {universeType} privateuniverso
   */
  constructor(private nombre: string, private peso: number, private altura: number,
    private estadisticas: estadisticasType, private frase: string, private universo: universeType) {
    // Si se introduce un parámetro mal ponemos valores por defecto 
    if (nombre === "") {
      this.nombre = "Defecto";
    }
    if (peso <= 0) {
      this.peso = 99;
    }
    if (altura <= 0) {
      this.peso == 99;
    }
    if (estadisticas.ataque <= 0) {
      this.estadisticas.ataque = 99;
    }
    if (estadisticas.defensa <= 0) {
      estadisticas.defensa = 99;
    }
    if (estadisticas.velocidad <= 0) {
      estadisticas.velocidad = 99;
    }
    if (estadisticas.vida <= 0) {
      estadisticas.vida = 99;
    }
    if (frase === "") {
      this.frase = "Olalala muamuasel";
    }
  };

  /**
   * @returns ataque del luchador
   */
  public getAtaque(): number {
    return this.estadisticas.ataque;
  }
  /**
   * @returns defensa del luchador
   */
  public getDefensa(): number {
    return this.estadisticas.defensa;
  }
  /**
   * @returns velocidad del luchador
   */
  public getVelocidad(): number {
    return this.estadisticas.velocidad;
  }
  /**
   * @returns vida del luchador
   */
  public getVida(): number {
    return Math.round(this.estadisticas.vida);
  }
  /**
   * @returns nombre del luchador
   */
  public getNombre(): string {
    return this.nombre;
  }
  /**
   * @returns peso del luchador
   */
  public getPeso(): number {
    return this.peso;
  }
  /**
   * @returns altura del luchador
   */
  public getAltura(): number {
    return this.altura;
  }
  /**
   * @returns Universo del luchador
   */
  public getUniverso(): string {
    return this.universo;
  }
  /**
  * @returns frase del luchador
  */
  public getFrase(): string {
    return this.frase;
  }
  /**
 * @returns ataque del luchador
 */
  public setAtaque(value: number): void {
    this.estadisticas.ataque = value;
  }
  /**
   * @returns defensa del luchador
   */
  public setDefensa(value: number): void {
    this.estadisticas.defensa = value;
  }
  /**
   * actualiza velocidad del luchador
   */
  public setVelocidad(value: number): void {
    this.estadisticas.velocidad = value;
  }
  /**
   * @returns vida 
   */
  public setVida(value: number): void {
    this.estadisticas.vida = value;
  }
  /**
   * @returns nombre 
   */
  public setNombre(value: string): void {
    this.nombre = value;
  }
  /**
   * @returns peso 
   */
  public setPeso(value: number): void {
    this.peso = value;
  }
  /**
   * @returns altura
   */
  public setAltura(value: number): void {
    this.altura = value;
  }
  /**
   * @returns altura
   */
  public setUniverso(value: universeType): void {
    this.universo = value;
  }
  /**
  * @returns altura
  */
  public setFrase(value: string): void {
    this.frase = value;
  }
}
