import 'mocha';
import {expect} from "chai";
import {GenerosMusicales, PrintGenerosMusicales} from "../../src/Estructura/generosMusicales";
import {Album} from '../../src/Estructura/album';
import {Cancion} from '../../src/Estructura/cancion';
import {Coleccion} from '../../src/Estructura/coleccionGenerica';

const genero1 = new GenerosMusicales({nombre: "Rock", artistasGrupos: ["Bayside", "John Lennon", "Stephen Malkmus", "Gunna", "AC/DC"], 
  albumes: ["Ahora soy peor", "Mala vida", "Tvrp House"], canciones: ["Ular SciencE", "Starting Over", "J Smoov", "P Power", "Jack"]});

describe('GenerosMusicales', () => {
  it('Debería ser una instancia de GenerosMusicales', () => {
    expect(genero1).to.be.instanceOf(GenerosMusicales);
  });
  it("Se puede obtener el nombre del genero", () => {
    expect(genero1.getNombre()).to.eql("Rock");
  });
  it("Se puede obtener el artista o grupo del genero", () => {
    expect(genero1.getArtistaGrupos()).eql(["Bayside", "John Lennon", "Stephen Malkmus", "Gunna", "AC/DC"]);
  });
  it("Se puede obtener los albumes del genero", () => {
    expect(genero1.getAlbumes()).eql(["Ahora soy peor", "Mala vida", "Tvrp House"]);
  });
  it("Se puede obtener las canciones del genero", () => {
    expect(genero1.getCanciones()).eql(["Ular SciencE", "Starting Over", "J Smoov", "P Power", "Jack"]);
  });
  it("Se puede obtener el nombre del genero", () => {
    expect(genero1.getNombre()).to.eql("Rock");
  });
  it("Se puede cambiar el nombre del genero", () => {
    genero1.setNombre("Pop");
    expect(genero1.getNombre()).to.eql("Pop");
  });
  it("Se puede cambiar el artista o grupo del genero", () => {
    genero1.setArtistasGrupos(["Bayside", "John Lennon", "Stephen Malkmus", "Gunna", "AC/DC", "Bruno Mars"]);
    expect(genero1.getArtistaGrupos()).eql(["Bayside", "John Lennon", "Stephen Malkmus", "Gunna", "AC/DC", "Bruno Mars"]);
  });
  it("Se puede cambiar los albumes del genero", () => {
    genero1.setAlbumes([]);
    expect(genero1.getAlbumes()).eql([]);
  });
  it("Se puede cambiar las canciones del genero", () => {
    genero1.setCanciones([]);
    expect(genero1.getCanciones()).eql([]);
  });
  it("Se puede añadir una cancion" , () => {
    genero1.addCancion("Ular SciencE");
    expect(genero1.getCanciones()).eql(["Ular SciencE"]);
  });
  it("Se puede añadir un album" , () => {
    genero1.addAlbum("Ahora soy peor");
    expect(genero1.getAlbumes()).eql(["Ahora soy peor"]);
  });
  it("Se puede añadir un artista o grupo" , () => {
    genero1.addArtistaGrupo("PEPE");
    expect(genero1.getArtistaGrupos()).eql(["Bayside", "John Lennon", "Stephen Malkmus", "Gunna", "AC/DC", "Bruno Mars", "PEPE"]);
  });
});

const prueba = new PrintGenerosMusicales(genero1);
describe('PrintGenerosMusicales', () => {
  it('Deberia crearse un PrintGenerosMusicales', () => {
      expect(prueba).to.be.an.instanceof(PrintGenerosMusicales);
  });
  it('Deberia devolver el nombre del album', () => {
    let result = prueba.print();
      expect(prueba.print()).to.eql(result);
  });
});