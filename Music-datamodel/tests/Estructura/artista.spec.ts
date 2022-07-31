import 'mocha';
import {expect} from "chai";
import {Album} from '../../src/Estructura/album';
import {Cancion} from '../../src/Estructura/cancion';
import {Coleccion} from '../../src/Estructura/coleccionGenerica';
import {Artista, PrintArtista} from '../../src/Estructura/artistas';

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
const artista1 = new Artista({nombre: "Bayside", grupos: ["AC/DC"], generos: ["Pop", "Rock", "Metal", "Jazz", "Rap"], 
  albumes: new Coleccion<Album>(album1), canciones: new Coleccion<Cancion>(cancion43, cancion35, cancion1, cancion19), oyentes: 500});

describe('Clase Artista', () => {
    it('Debe crear un objeto de tipo Artista', () => {
        expect(artista1).to.be.an.instanceof(Artista);
    });
    it('Debe crear un objeto de tipo Artista con nombre Bayside', () => {
        expect(artista1.getNombre()).to.equal("Bayside");
    });
    it('Debe crear un objeto de tipo Artista con grupos AC/DC', () => {
        expect(artista1.getGrupos()).to.deep.equal(["AC/DC"]);
    });
    it('Debe crear un objeto de tipo Artista con generos Pop, Rock, Metal, Jazz, Rap', () => {
        expect(artista1.getGeneros()).to.deep.equal(["Pop", "Rock", "Metal", "Jazz", "Rap"]);
    });
    it('Debe crear un objeto de tipo Artista con albumes Hola bby', () => {
        expect(artista1.getAlbumes()).to.deep.equal(new Coleccion<Album>(album1));
    });
    it('Debe crear un objeto de tipo Artista con canciones U Got the Look, S&M, Ular SciencE, La La', () => {
        expect(artista1.getCanciones()).to.deep.equal(new Coleccion<Cancion>(cancion43, cancion35, cancion1, cancion19));
    });
    it('Debe crear un objeto de tipo Artista con oyentes 500', () => {
        expect(artista1.getOyentes()).to.equal(500);
    });
    it('Deberia modificar el nombre del artista', () => {
        artista1.setNombre("Hola bby");
        expect(artista1.getNombre()).to.equal("Hola bby");
    });
    it('Deberia modificar los grupos del artista', () => {
        artista1.setGrupos(["AC/DC"]);
        expect(artista1.getGrupos()).eql(["AC/DC"]);
    });
    it('Deberia modificar los albumes del artista', () => {
        artista1.setAlbumes(new Coleccion<Album>());
        expect(artista1.getAlbumes()).to.deep.equal(new Coleccion<Album>());
    });
    it('Deberia modificar los generos del artista', () => {
        artista1.setGeneros(["Metal", "Jazz", "Rap"]);
        expect(artista1.getGeneros()).eql(["Metal", "Jazz", "Rap"]);
    });
    it('Deberia modificar la coleccion de canciones y albumes del artista', () => {
        artista1.setCanciones(new Coleccion<Cancion>(cancion19));
        expect(artista1.getCanciones()).eql(new Coleccion<Cancion>(cancion19));
        artista1.addCancion(cancion1);
        expect(artista1.getCanciones()).eql(new Coleccion<Cancion>(cancion19, cancion1));
        artista1.setAlbumes(new Coleccion<Album>());
        artista1.addAlbum(album1);
        expect(artista1.getAlbumes()).eql(new Coleccion<Album>(album1));
    }); 
});

const prueba = new PrintArtista(artista1);
describe('PrintArtista', () => {
    it('Deberia crearse un Printartista', () => {
        expect(prueba).to.be.an.instanceof(PrintArtista);
    });
    it('Deberia devolver el nombre del album', () => {
        let result = prueba.print();
        expect(prueba.print()).to.equal(result);
    });
});