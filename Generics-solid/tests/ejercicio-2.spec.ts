/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {BasicStreamableCollection, argumentosType} from '../src/ejercicio-2/basicstreamcollectionClass';
import {StreamableSeries, series} from '../src/ejercicio-2/seriesClass';
import {StreamablePeliculas, peliculas} from '../src/ejercicio-2/peliculasClass';
import {StreamableDocumentales, documentales} from '../src/ejercicio-2/documentalesClass';

const objeto: series = {
  titulo: `BOKUNOHERO`,
  temporadas: 4,
  año: 2005,
  duracion: 600,
  genero: 'anime',
};
const objeto1: series = {
  titulo: `SWORD ART ONLINE`,
  temporadas: 5,
  año: 1999,
  duracion: 1200,
  genero: 'anime',
};
const misSeries = new StreamableSeries([objeto1, objeto]);
describe('Test class Stremeable Series', () => {
  describe('Se puede instanciar un Series', () => {
    it('expect(misSeries).not.be.equal(null);', () => {
      expect(misSeries).not.be.equal(null);
    });
  });
  describe('Tiene las siguientes funcionalidades', () => {
    it('Sacar el titulo', () => {
      expect(misSeries.filtrar('titulo', "BOKUNOHERO")).to.be.eql([objeto]);
    });
    it('Sacar el año', () => {
      expect(misSeries.filtrar('año', "1999")).to.be.eql([objeto1]);
    });
    it('Sacar el genero', () => {
      expect(misSeries.filtrar('genero', "anime")).to.be.eql([objeto1, objeto]);
    });
    it('Sacar la temporada', () => {
      expect(misSeries.filtrar('temporada', "4")).to.be.eql([objeto]);
    });
    it('Sacar la duracion', () => {
      expect(misSeries.filtrar('duracion', "1200")).to.be.eql([objeto1]);
    });
  });
});

const objeto3: peliculas = {
  titulo: `FOREVER`,
  año: 2005,
  duracion: 600,
  clasificacion: '+7',
};
const objeto4: peliculas = {
  titulo: `BATMAN`,
  año: 2001,
  duracion: 200,
  clasificacion: '+18',
};
const misPeliculas = new StreamablePeliculas([objeto3, objeto4]);
describe('Test class Stremeable Peliculas', () => {
  describe('Se puede instanciar una pelicula', () => {
    it('expect(pikachu).not.be.equal(null);', () => {
      expect(misPeliculas).not.be.equal(null);
    });
  });
  describe('Tiene las siguientes funcionalidades', () => {
    it('Sacar el titulo', () => {
      expect(misPeliculas.filtrar('titulo', "BATMAN")).to.be.eql([objeto4]);
    });
    it('Sacar el año', () => {
      expect(misPeliculas.filtrar('año', "2005")).to.be.eql([objeto3]);
    });
    it('Sacar la clasificacion', () => {
      expect(misPeliculas.filtrar('clasificacion', "+18")).to.be.eql([objeto4]);
    });
    it('Sacar la duracion', () => {
      expect(misPeliculas.filtrar('duracion', "600")).to.be.eql([objeto3]);
    });
  });
});


const objeto5: documentales = {
  titulo: `FOREVER`,
  año: 2005,
  duracion: 600,
  genero: 'ciencia',
};
const objeto6: documentales = {
  titulo: `FAUNA SALVAJE`,
  año: 2001,
  duracion: 200,
  genero: 'fauna',
};
const misdocumentales = new StreamableDocumentales([objeto5, objeto6]);
describe('Test class Stremeable documentales', () => {
  describe('Se puede instanciar un documental', () => {
    it('expect(pikachu).not.be.equal(null);', () => {
      expect(misdocumentales).not.be.equal(null);
    });
  });
  describe('Tiene las siguientes funcionalidades', () => {
    it('Sacar el titulo', () => {
      expect(misdocumentales.filtrar('titulo', "FOREVER")).to.be.eql([objeto5]);
    });
    it('Sacar el año', () => {
      expect(misdocumentales.filtrar('año', "2005")).to.be.eql([objeto5]);
    });
    it('Sacar la genero', () => {
      expect(misdocumentales.filtrar('genero', "fauna")).to.be.eql([objeto6]);
    });
    it('Sacar la duracion', () => {
      expect(misdocumentales.filtrar('duracion', "600")).to.be.eql([objeto5]);
    });
    expect(misdocumentales.getTitulo("FOREVER")).eql([objeto5]);
    expect(misdocumentales.getAño(2005)).eql([objeto5]);
    /* expect(misdocumentales.getDuracion(200)).eql([objeto5, objeto6]); */
    /* expect(misdocumentales.mostrarCatalogo()).eql([objeto5, objeto6]); */
  });
});

const objeto7: documentales = {
  titulo: `FAUNA--`,
  año: 200123,
  duracion: 200333,
  genero: 'historia',
};

describe('Test class StremeableCollection', () => {
  describe('Tiene las siguientes funcionalidades', () => {
    it('añadirUnelemnto', () => {
      misdocumentales.añadir(objeto7);
      expect(misdocumentales.filtrar('genero', "historia")).to.eql([objeto7]);
    });
    it('longitud de la coleccion', () => {
      expect(misdocumentales.numeroElementos()).to.eql(3);
    });
  });
});
