import 'mocha';
import {expect} from "chai";
import {Album, PrintAlbum} from '../../src/Estructura/album';
import {Cancion} from '../../src/Estructura/cancion';
import { Coleccion } from '../../src/Estructura/coleccionGenerica';

const cancion1 = new Cancion({nombre: "Ular SciencE", autor: "Bayside", 
  duracion: {min: 2, seg: 4}, generos: ["Pop", "Rock"], single: true, reproducciones: 200});
const cancion19 = new Cancion({nombre: "La La", autor: "Bayside", 
  duracion: {min: 3, seg: 47}, generos: ["Metal"], single: true, reproducciones: 77650});
const cancion35 = new Cancion({nombre: "S&M", autor: "Bayside",
  duracion: {min: 3, seg: 15}, generos: ["Jazz"], single: false, reproducciones: 1213234});
const cancion43 = new Cancion({nombre: "U Got the Look", autor: "Bayside",
  duracion: {min: 1, seg: 2}, generos: ["Rap"], single: false, reproducciones: 75420});

const album1 = new Album({nombre: "Hola bby", autor: "Bayside", fechaPublicacion: 2000, generos: ["Pop", "Rock", "Metal", "Jazz", "Rap"], 
  canciones: new Coleccion<Cancion>(cancion43, cancion35, cancion1, cancion19)});

describe('Album', () => {
    it('Deberia crearse un album', () => {
        expect(album1).to.be.an.instanceof(Album);
    });
    it('Deberia devolver el nombre del album', () => {
        expect(album1.getNombre()).to.eql("Hola bby");
    });
    it('Deberia devolver el autor del album', () => {
        expect(album1.getAutor()).to.eql("Bayside");
    });
    it('Deberia devolver la fecha de publicacion del album', () => {
        expect(album1.getFechaPublicacion()).to.eql(2000);
    });
    it('Deberia devolver los generos del album', () => {
        expect(album1.getGeneros()).to.eql(["Pop", "Rock", "Metal", "Jazz", "Rap"]);
    });
    it('Deberia devolver la coleccion de canciones del album', () => {
        expect(album1.getCanciones()).eql(new Coleccion<Cancion>(cancion43, cancion35, cancion1, cancion19));
    });
    it('Deberia modificar el nombre del album', () => {
        album1.setNombre("Hola bby");
        expect(album1.getNombre()).to.eql("Hola bby");
    });
    it('Deberia modificar el autor del album', () => {
        album1.setAutor("Bayside");
        expect(album1.getAutor()).to.eql("Bayside");
    });
    it('Deberia modificar la fecha de publicacion del album', () => {
        album1.setFechaPublicacion(1000);
        expect(album1.getFechaPublicacion()).to.eql(1000);
    });
    it('Deberia modificar los generos del album', () => {
        album1.setGeneros(["Metal", "Jazz", "Rap"]);
        expect(album1.getGeneros()).to.eql(["Metal", "Jazz", "Rap"]);
    });
    it('Deberia modificar la coleccion de canciones del album', () => {
        album1.setCanciones(new Coleccion<Cancion>(cancion19));
        expect(album1.getCanciones()).to.eql(new Coleccion<Cancion>(cancion19));
        album1.addCancion(cancion1);
        expect(album1.getCanciones()).to.eql(new Coleccion<Cancion>(cancion19, cancion1));
    });
});

const prueba = new PrintAlbum(album1);
describe('PrintAlbum', () => {
    it('Deberia crearse un PrintAlbum', () => {
        expect(new PrintAlbum(album1)).to.be.an.instanceof(PrintAlbum);
    });
    it('Deberia devolver el nombre del album', () => {
        let resultado = prueba.print();
        expect(prueba.print()).to.eql(resultado);
    });
});