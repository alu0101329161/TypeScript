import 'mocha';
import {expect} from "chai";
import {Album} from '../../src/Estructura/album';
import {Cancion} from '../../src/Estructura/cancion';
import {Coleccion} from '../../src/Estructura/coleccionGenerica';
import {Artista} from '../../src/Estructura/artistas';
import {Grupo, PrintGrupo} from '../../src/Estructura/grupo';

const cancion1 = new Cancion({nombre: "Ular SciencE", autor: "Bayside", 
  duracion: {min: 2, seg: 4}, generos: ["Pop", "Rock"], single: true, reproducciones: 200});
const cancion19 = new Cancion({nombre: "La La", autor: "Bayside", 
  duracion: {min: 3, seg: 47}, generos: ["Metal"], single: true, reproducciones: 77650});
const cancion35 = new Cancion({nombre: "S&M", autor: "Bayside",
  duracion: {min: 3, seg: 15}, generos: ["Jazz"], single: false, reproducciones: 1213234});
const cancion43 = new Cancion({nombre: "U Got the Look", autor: "Bayside",
  duracion: {min: 1, seg: 2}, generos: ["Rap"], single: false, reproducciones: 75420});
const cancion5 = new Cancion({nombre: "Jack", autor: "AC/DC",
  duracion: {min: 4, seg: 0}, generos: ["Rock", "Trap"], single: false, reproducciones: 50000});
const cancion18 = new Cancion({nombre: "La Rosa", autor: "AC/DC",
  duracion: {min: 1, seg: 15}, generos: ["Metal"], single: false, reproducciones: 2111});
const cancion31 = new Cancion({nombre: "M79", autor: "AC/DC", 
  duracion: {min: 1, seg: 30}, generos: ["Jazz"], single: false, reproducciones: 12});
const cancion47 = new Cancion({nombre: "Sad Angel", autor: "AC/DC",
  duracion: {min: 1, seg: 38}, generos: ["Flamenco"], single: false, reproducciones: 93821});

const album1 = new Album({nombre: "Hola bby", autor: "Bayside", fechaPublicacion: 2000, generos: ["Pop", "Rock", "Metal", "Jazz", "Rap"], 
  canciones: new Coleccion<Cancion>(cancion43, cancion35, cancion1, cancion19)});
const album2 = new Album({nombre: "Ahora soy peor", autor: "AC/DC", fechaPublicacion: 2060, generos: ["Rock", "Trap", "Flamenco", "Jazz", "Metal"], 
  canciones: new Coleccion<Cancion>(cancion47, cancion31, cancion18, cancion5)});

const artista1 = new Artista({nombre: "Bayside", grupos: ["AC/DC"], generos: ["Pop", "Rock", "Metal", "Jazz", "Rap"], 
  albumes: new Coleccion<Album>(album1), canciones: new Coleccion<Cancion>(cancion43, cancion35, cancion1, cancion19), oyentes: 500});

const grupo1 = new Grupo({nombre: "AC/DC", artistas: ["BaySide"], fechaCreacion: 2008, 
  generos: ["Rock", "Trap", "Metal", "Jazz", "Flamenco"], albumes: new Coleccion<Album>(album2), 
  canciones: new Coleccion<Cancion>(cancion47, cancion31, cancion18, cancion5), oyentes: 300});

describe("Grupo", () => {
  it("Grupo.getNombre()", () => {
    expect(grupo1.getNombre()).to.equal("AC/DC");
  });
  it("Grupo.getArtistas()", () => {
    expect(grupo1.getArtista()).to.deep.equal(["BaySide"]);
  });
  it("Grupo.getFechaCreacion()", () => {
    expect(grupo1.getFechaCreacion()).to.equal(2008);
  });
  it("Grupo.getGeneros()", () => {
    expect(grupo1.getGeneros()).to.deep.equal(["Rock", "Trap", "Metal", "Jazz", "Flamenco"]);
  });
  it("Grupo.getAlbumes()", () => {
    expect(grupo1.getAlbumes()).to.deep.equal(new Coleccion<Album>(album2));
  });
  it("Grupo.getCanciones()", () => {
    expect(grupo1.getCanciones()).to.deep.equal(new Coleccion<Cancion>(cancion47, cancion31, cancion18, cancion5));
  });
  it("Grupo.getOyentes()", () => {
    expect(grupo1.getOyentes()).to.equal(300);
  });
  it("Grupo.setNombre(nombre: string)", () => {
    grupo1.setNombre("AC/DC");
    expect(grupo1.getNombre()).to.equal("AC/DC");
  });
  it("Grupo.setArtistas(artistas: Coleccion<Artista>)", () => {
    grupo1.setArtistas([]);
    expect(grupo1.getArtista()).to.deep.equal([]);
  });
    it("Grupo.setFechaCreacion(fechaCreacion: number)", () => {
    grupo1.setFechaCreacion(2008);
    expect(grupo1.getFechaCreacion()).to.equal(2008);
  });
    it("Grupo.setGeneros(generos: string[])", () => {
    grupo1.setGeneros(["Jazz", "Flamenco"]);
    expect(grupo1.getGeneros()).to.deep.equal(["Jazz", "Flamenco"]);
  });
    it("Grupo.setAlbumes(albumes: Coleccion<Album>)", () => {
    grupo1.setAlbumes(new Coleccion<Album>());
    expect(grupo1.getAlbumes()).to.deep.equal(new Coleccion<Album>());
  });
    it("Grupo.setCanciones(canciones: Coleccion<Cancion>)", () => {
    grupo1.setCanciones(new Coleccion<Cancion>());
    expect(grupo1.getCanciones()).to.deep.equal(new Coleccion<Cancion>());
  });
    it("Grupo.setOyentes(oyentes: number)", () => {
    grupo1.setOyentes(300);
    expect(grupo1.getOyentes()).to.equal(300);
  });
  it('Deberia modificar la coleccion de canciones, albumes y artistas del grupo', () => {
    grupo1.setCanciones(new Coleccion<Cancion>());
    grupo1.addCancion(cancion19);
    expect(grupo1.getCanciones()).eql(new Coleccion<Cancion>(cancion19));
    grupo1.setAlbumes(new Coleccion<Album>());
    grupo1.addAlbum(album1);
    expect(grupo1.getAlbumes()).eql(new Coleccion<Album>(album1));
    grupo1.setArtistas([]);
    grupo1.addArtista("BaySide");
    expect(grupo1.getArtista()).eql(["BaySide"]);
    }); 
});

const prueba = new PrintGrupo(grupo1);
describe('PrintGrupo', () => {
    it('Deberia crearse un PrintGrupo', () => {
        expect(prueba).to.be.an.instanceof(PrintGrupo);
    });
    it('Deberia devolver el nombre del album', () => {
      let result = prueba.print();
        expect(prueba.print()).to.equal(result);
    });
});