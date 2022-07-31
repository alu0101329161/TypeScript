import 'mocha';
import {expect} from "chai";
import {Cancion} from '../../src/Estructura/cancion';
import {PlayList, PrintPlayList} from '../../src/Estructura/playlist';
import {Coleccion} from '../../src/Estructura/coleccionGenerica';

const cancion1 = new Cancion({nombre: "Ular SciencE", autor: "Bayside", 
  duracion: {min: 2, seg: 4}, generos: ["Pop", "Rock"], single: true, reproducciones: 200});
const cancion19 = new Cancion({nombre: "La La", autor: "Bayside", 
  duracion: {min: 3, seg: 47}, generos: ["Metal"], single: true, reproducciones: 77650});
const cancion35 = new Cancion({nombre: "S&M", autor: "Bayside",
  duracion: {min: 3, seg: 15}, generos: ["Jazz"], single: false, reproducciones: 1213234});
const cancion43 = new Cancion({nombre: "U Got the Look", autor: "Bayside",
  duracion: {min: 1, seg: 2}, generos: ["Rap"], single: false, reproducciones: 75420});

const playlist1 = new PlayList({nombre: "La mandanga", canciones: new Coleccion<Cancion>(cancion1, cancion35, cancion43, cancion19), 
  duracion: {hor: 0, min: 0}, generos: [], creador: "SYSTEM"});

// generar pruebas de la clase PlayList
describe('Pruebas de la clase PlayList', () => {
    it('Prueba de la función getNombre', () => {
        expect(playlist1.getNombre()).to.equal("La mandanga");
    });
    it('Prueba de la función getCanciones', () => {
        expect(playlist1.getCanciones()).to.deep.equal(new Coleccion<Cancion>(cancion1, cancion35, cancion43, cancion19));
    });
    it('Prueba de la función getDuracion', () => {
        expect(playlist1.getDuracion()).to.deep.equal({hor: 0, min: 10});
    });
    it('Prueba de la función getGeneros', () => {
        expect(playlist1.getGeneros()).to.deep.equal(["Pop", "Rock", "Jazz", "Rap", "Metal"]);
    });
    it('Prueba de la función getCreador', () => {
        expect(playlist1.getCreador()).to.equal("SYSTEM");
    });
    it('Prueba de la función setNombre', () => {
        playlist1.setNombre("La mamasita");
        expect(playlist1.getNombre()).to.equal("La mamasita");
    });
    it('Prueba de la función setCanciones', () => {
        playlist1.setCanciones(new Coleccion<Cancion>(cancion19));
        expect(playlist1.getCanciones()).to.deep.equal(new Coleccion<Cancion>(cancion19));
    });
    it('Prueba de la función setDuracion', () => {
        playlist1.setDuracion({hor: 10, min: 11});
        expect(playlist1.getDuracion()).to.deep.equal({hor: 10, min: 11});
    });
    it('Prueba de la función setGeneros', () => {
        playlist1.setGeneros(["Rock"]);
        expect(playlist1.getGeneros()).to.deep.equal(["Rock"]);
    });
    it('Prueba de la función setCreador', () => {
        playlist1.setCreador("El jefe");
        expect(playlist1.getCreador()).to.equal("El jefe");
    });
    it('Deberia modificar la coleccion de canciones de la playlist', () => {
        playlist1.setCanciones(new Coleccion<Cancion>(cancion19));
        expect(playlist1.getCanciones()).eql(new Coleccion<Cancion>(cancion19));
        playlist1.addCancion(cancion1);
        expect(playlist1.getCanciones()).eql(new Coleccion<Cancion>(cancion19, cancion1));
    });
});


const prueba = new PrintPlayList(playlist1);
describe('PrintPlayList', () => {
  it('Deberia crearse un PrintPlayList', () => {
      expect(prueba).to.be.an.instanceof(PrintPlayList);
  });
  it('Se puede imprimir la información de la playlist', () => {
    let result = prueba.print();
      expect(prueba.print()).eql(result);
  });
});