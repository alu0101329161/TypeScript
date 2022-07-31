import "mocha";
import { expect } from "chai";
import {Nota, typeColor} from "../src/Notas/notas";
import {PrintNota} from "../src/Notas/imprimirNota";
let color: typeColor = "red";
const nota= new Nota("Lista de la compra", "->Leche", color);
describe("Pruebas clase Nota", () => {
    it('Se puede instanciar un objeto', () => {
      expect(nota).instanceOf(Nota);
    });
    describe('Getters', () => {
      it('La nota tiene un titulo', () => {
        expect(nota.getTitulo()).to.eql('Lista de la compra');
      });
      it('La nota tiene un cuerpo', () => {
        expect(nota.getCuerpo()).to.eql('->Leche');
      });
      it('La nota tiene un color', () => {
        expect(nota.getColor()).to.eql('red');
      });
    });
    describe('Setter', () => {
        it('Se puede cambiar el titulo', () => {
            nota.setTitulo("AA")
          expect(nota.getTitulo()).to.eql('AA');
        });
        it('Se puede cambiar el cuerpo', () => {
            nota.setCuerpo("BB")
          expect(nota.getCuerpo()).to.eql('BB');
        });
        it('Se puede cambiar el color', () => {
            nota.setColor("blue")
          expect(nota.getColor()).to.eql('blue');
        });
      });
  });

  const printnota = new PrintNota(nota);
  describe("Pruebas de la clase PrintNota", () => {
    it('Se puede instanciar un objeto', () => {
        expect(printnota).instanceOf(PrintNota);
    });
    it('Metodo para imprimir una nota', () => {
        expect(printnota.print()).to.eql(`{
 "titulo": "AA",
 "cuerpo": "BB",
 "color": "blue"
}`)
    });
  })