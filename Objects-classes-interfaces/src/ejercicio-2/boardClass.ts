/* eslint-disable curly */
/* eslint-disable max-len */

import {Player} from "./playerClass";

/**
 * Clase que representa al tablero 
 */
export class Board {
  tablero: number[][] = [];
  /**
   * Crear estructura del tablero
   * @param  {number} privatefilas
   * @param  {number} privatecolumnas
   */
  constructor(private filas: number = 6, private columnas: number = 7) {
    // Creamos el tablero de 6 filas y 7 columnas
    if (filas !== 6) {
      this.filas = 6;
    }
    if (columnas !== 7) {
      this.columnas = 7;
    }
    for (let i = 0; i < filas; i++) {
      this.tablero.push([]);
      for (let j = 0; j < columnas; j++) {
        this.tablero[i].push(0);
      }
    }
  };

  /**
   * Poder resetear el tablero
   */
  public vaciarTablero() {
    this.tablero = [];
    for (let i = 0; i < 6; i++) {
      this.tablero.push([]);
      for (let j = 0; j < 7; j++) {
        this.tablero[i].push(0);
      }
    }
  };

  /**
   * Jugador introduce en que columna quiere
   * introducir su ficha
   * @param  {Player} jugador
   * @param  {boolean} valor modo automatico
   */
  private usuarioIntroduceFicha(jugador: Player, automatic: boolean) {
    let columna;
    let primerafilavacia;
    jugador.printPlayer();
    do {
      if (automatic) {
        columna = jugador.random(0, 6); // Jugador eligue numero aleatorio
      } else {
        const readlineSync = require('readline-sync');
        columna = readlineSync.question("Introduzca la columna en la que quiere introducir ficha: ");
      }
      if (columna !== null) {
        primerafilavacia = this.primeraFilaVacia(Number(columna));
        if (primerafilavacia === -1) {
          console.log("Esta columna esta completa pruebe otra");
          columna++;
        } else {
          this.tablero[primerafilavacia][Number(columna)] = jugador.getTipo();
        }
        primerafilavacia = 0;
      }
    } while (Number(columna) < 0 || Number(columna) > 6);
  }
  /**
   * Devuelve la posicion de la primera fila de la columna indicada
   * por pámetro
   * @param  {number} columna
   * @returns number
   */
  private primeraFilaVacia(columna: number): number {
    for (let i = 5; i >= 0; i--) {
      if (this.tablero[i][columna] === 0) {
        return i;
      }
    }
    return -1;
  }
  /**
   * Indica si la partida ha acabado en empate
   * @returns booleano
   */
  private empate(): boolean {
    for (let filas = 0; filas < this.filas; filas++) {
      for (let columnas = 0; columnas < this.columnas; columnas++) {
        if (this.tablero[filas][columnas] === 0)
          return false;
      }
    }
    return true;
  }

  /**
   * Simula el juego con dos jugadores
   * @param  {Player} jugador1
   * @param  {Player} jugador2
   * @param  {boolean} automatic // modo automatico o manual
   */
  public start(jugador1: Player, jugador2: Player, automatic: boolean) {
    let result = "";
    this.mostrarTablero();
    let ganador = 0;
    while (true) {
      this.usuarioIntroduceFicha(jugador1, automatic);
      this.mostrarTablero();
      ganador = this.revisarPosibilidades();
      if (1 == ganador) {
        result = jugador1.printGanador();
        return result;
      }
      this.usuarioIntroduceFicha(jugador2, automatic);
      this.mostrarTablero();
      ganador = this.revisarPosibilidades();
      if (2 == ganador) {
        result = jugador2.printGanador();
        return result;
      }
      if (this.empate()) {
        result = "La partida ha resultado en empate";
        console.log(result);
        return result;
      }
    }
  }
  /**
   * Comprobamos si las linea es conecta4 de un mismo
   * jugador
   * @param a primera posicion
   * @param b posicion en el tablero desplazada
   * @param c siguiente desplazamiento
   * @param d y ultimo desplazamiento
   * @returns 
   */
  private revisarLinea(actual: number, actual1: number, actual2: number, actual3: number) {
    return ((actual != 0) && (actual == actual1) && (actual == actual2) && (actual == actual3));
  }
  /**
   * Recorremos todas las posibilidades
   * @returns el valor del ganador
   */
  private revisarPosibilidades() {
    for (let fila = 0; fila < 3; fila++) {
      for (let columna = 0; columna < 7; columna++) {
        if (this.revisarLinea(this.tablero[fila][columna], this.tablero[fila + 1][columna], this.tablero[fila + 2][columna], this.tablero[fila + 3][columna])) {
          return this.tablero[fila][columna];
        }
      }
    }
    for (let fila = 0; fila < 6; fila++) {
      for (let columna = 0; columna < 4; columna++) {
        if (this.revisarLinea(this.tablero[fila][columna], this.tablero[fila][columna + 1], this.tablero[fila][columna + 2], this.tablero[fila][columna + 3])) {
          return this.tablero[fila][columna];
        }
      }
    }
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 4; c++) {
        if (this.revisarLinea(this.tablero[r][c], this.tablero[r + 1][c + 1], this.tablero[r + 2][c + 2], this.tablero[r + 3][c + 3])) {
          return this.tablero[r][c];
        }
      }
    }
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (this.revisarLinea(this.tablero[r][c], this.tablero[r - 1][c + 1], this.tablero[r - 2][c + 2], this.tablero[r - 3][c + 3])) {
          return this.tablero[r][c];
        }
      }
    }
    return 0;
  }
  /**
   * Monstramos tablero por consola
   */
  public mostrarTablero() {
    console.log('\x1b[33m%s\x1b[0m', "========== CONECTA 4 =======");
    console.table(this.tablero);
  }
}
const jugador1 = new Player("Manolo", 1);
const jugador2 = new Player("Paco", 2);
const board = new Board(6, 7);
board.start(jugador1, jugador2, false);
/* board.start(jugador1, jugador2, false); */

