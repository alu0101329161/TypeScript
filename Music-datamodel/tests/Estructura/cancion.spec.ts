import 'mocha';
import {expect} from "chai";
import {Cancion, PrintCancion} from '../../src/Estructura/cancion';

const cancion1 = new Cancion({nombre: "Ular SciencE", autor: "Bayside", 
  duracion: {min: 2, seg: 4}, generos: ["Pop", "Rock"], single: true, reproducciones: 200});

describe('Cancion', () => {
    it('Deberia crearse una cancion', () => {
        expect(cancion1).to.be.an.instanceof(Cancion);
    });
    it('Deberia devolver el nombre de la cancion', () => {
        expect(cancion1.getNombre()).to.equal("Ular SciencE");
    });
    it('Deberia devolver el autor de la cancion', () => {
        expect(cancion1.getAutor()).to.equal("Bayside");
    });
    it('Deberia devolver los generos de la cancion', () => {
        expect(cancion1.getGeneros()).eql(["Pop", "Rock"]);
    });
    it('Deberia devolver si es single o no', () => {
        expect(cancion1.getSingle()).to.equal(true);
    });
    it('Deberia devolver la cantidad de reproducciones', () => {
        expect(cancion1.getReproducciones()).to.equal(200);
    });
    it('Deberia devolver la duracion en segundos', () => {
        expect(cancion1.getDuracion().min).to.equal(2);
    });
    it('Deberia devolver la duracion en minutos', () => {
        expect(cancion1.getDuracion().seg).to.equal(4);
    });
    it('Deberia modificar el nombre de la cancion', () => {
        cancion1.setNombre("Ular Science");
        expect(cancion1.getNombre()).to.equal("Ular Science");
    });
    it('Deberia modificar el autor de la cancion', () => {
        cancion1.setAutor("Bayside");
        expect(cancion1.getAutor()).to.equal("Bayside");
    });
    it('Deberia modificar los generos de la cancion', () => {
        cancion1.setGeneros(["Pop", "Rock"]);
        expect(cancion1.getGeneros()).eql(["Pop", "Rock"]);
    });
    it('Deberia modificar si es single o no', () => {
        cancion1.setSingle(true);
        expect(cancion1.getSingle()).to.equal(true);
    });
    it('Deberia modificar la cantidad de reproducciones', () => {
        cancion1.setReproducciones(200);
        expect(cancion1.getReproducciones()).to.equal(200);
    });
    it('Deberia modificar la duracion de la cancion', () => {
        cancion1.setDuracion({min: 2, seg: 4});
        expect(cancion1.getDuracion().min).to.equal(2);
        expect(cancion1.getDuracion().seg).to.equal(4);
    });
    it('Deberia devolver el tiempo total en segundos', () => {
        expect(cancion1.devolverTiempoTotal()).to.equal("124");
    });
});

const prueba = new PrintCancion(cancion1);

describe('PrintCancion', () => {
    it('Se puede instanciar objeto de la clase', () => {
        expect(prueba).to.be.an.instanceof(PrintCancion);
    });
    it('Deberia imprimir la cancion', () => {
        let resultado = prueba.print();
        expect(prueba.print()).to.equal(resultado);
    });
});