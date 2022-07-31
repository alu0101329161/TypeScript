import 'mocha';
import {expect} from "chai";
import {Coleccion} from '../../src/Estructura/coleccionGenerica';
import {Cancion} from '../../src/Estructura/cancion';

const cancion1 = new Cancion({nombre: "Ular SciencE", autor: "Bayside", 
  duracion: {min: 2, seg: 4}, generos: ["Pop", "Rock"], single: true, reproducciones: 200});
const cancion2 = new Cancion({nombre: "Starting Over", autor: "John Lennon",
  duracion: {min: 3, seg: 40}, generos: ["Rock"], single: false, reproducciones: 10000});
const cancion3 = new Cancion({nombre: "J Smoov", autor: "Stephen Malkmus",
  duracion: {min: 2, seg: 50}, generos: ["Rock"], single: true, reproducciones: 5000});
const cancion4 = new Cancion({nombre: "P Power", autor: "Gunna", 
  duracion: {min: 2, seg: 4}, generos: ["Rock"], single: false, reproducciones: 200});
const cancion5 = new Cancion({nombre: "Jack", autor: "AC/DC",
  duracion: {min: 4, seg: 0}, generos: ["Rock", "Trap"], single: false, reproducciones: 50000});
const cancion6 = new Cancion({nombre: "Jack", autor: "AC/DC",
  duracion: {min: 4, seg: 0}, generos: ["Rock", "Trap"], single: false, reproducciones: 50000});


const nuevaColeccion = new Coleccion<Cancion>(cancion1, cancion2, cancion3, cancion4);
describe('Coleccion', () => {
    it("Se puede instanciar un objeto de la clase", () => {
        expect(nuevaColeccion).to.be.an.instanceof(Coleccion);
    });
    it("Se puede agregar un elemento a la coleccion", () => {
        nuevaColeccion.addElemento(cancion5)
        expect(nuevaColeccion.longitudColeccion()).to.be.equal(5);
    });
    it("Se puede eliminar un elemento de la coleccion", () => {
        nuevaColeccion.deleteElemento(cancion5)
        expect(nuevaColeccion.longitudColeccion()).to.be.equal(4);
    });
    it("Se puede obtener un elemento de la coleccion", () => {
        expect(nuevaColeccion.getElemento("Ular SciencE")).to.be.equal(cancion1);
    });
    it("Se puede remover elemento de la coleccion", () => {
        nuevaColeccion.removeElemento("Ular SciencE");
        expect(nuevaColeccion.getElemento("Ular SciencE")).to.be.equal(undefined);
    });
    it("Se puede cambiar un elemento de la coleccion", () => {
        nuevaColeccion.changeElemento(cancion6, 2);
        expect(nuevaColeccion).to.be.an.instanceof(Coleccion);
    });
    it("Se puede iterar la coleccion", () => {
        let i = 0;
        for (let cancion of nuevaColeccion) {
            i++;
        }
        expect(i).to.be.equal(3);
    });
    it("Se puede limpiar la coleccion", () => {
        nuevaColeccion.limpiarElementos();
        expect(nuevaColeccion.longitudColeccion()).to.be.equal(0);
    });
});