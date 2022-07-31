/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Collection, Searchable, SearchableCollection, NumericSearchableCollection, StringSearchableCollection} from '../src/Modificacion/modificacion';

const misNumeros = new NumericSearchableCollection([1, 2, 3, 4]);
const misNumeros1 = new NumericSearchableCollection([1, 2, 3, 4]);
describe('Test class NumericSearchableCollection', () => {
  describe('Se puede instanciar un objeto', () => {
    it('expect(misNumeros).not.be.equal(null);', () => {
      expect(misNumeros).not.be.equal(null);
    });
  });
  describe('Tiene las siguientes funcionalidades', () => {
    it('Añadir un elemento a la collecion de numero', () => {
      misNumeros.addItem(2);
      expect(misNumeros.getNumberOfItems()).eql(5);
    });
    it('Mirar la longitud a la collecion de numero', () => {
      expect(misNumeros.getNumberOfItems()).eql(5);
    });
    it('Eliminar elmento de la collecion', () => {
      const a = misNumeros.removeItem(0);
      expect(a).eql([1]);
    });
    it('Conseguir elemento de la collecion', () => {
      const b = misNumeros1.getItems(0);
      expect(b).eql(1);
    });
    it('Se puede filtrar un elemento', () => {
      expect(misNumeros1.search(2)).eql([2]);
    });
    const misNumeros3 = new NumericSearchableCollection([1, 1, 1, 1]);
    it('Se puede filtrar un elemento', () => {
      expect(misNumeros3.search(1)).eql([1, 1, 1, 1]);
    });
  });
});

const misletras = new StringSearchableCollection(['a', '2', '3', '4']);
const misletras1 = new StringSearchableCollection(['a', 'b', 'c']);
describe('Test class NumericSearchableCollection', () => {
  describe('Se puede instanciar un objeto', () => {
    it('expect(misNumeros).not.be.equal(null);', () => {
      expect(misletras).not.be.equal(null);
    });
  });
  describe('Tiene las siguientes funcionalidades', () => {
    it('Añadir un elemento a la collecion de numero', () => {
      misletras.addItem('2');
      expect(misletras.getNumberOfItems()).eql(5);
    });
    it('Mirar la longitud a la collecion de numero', () => {
      expect(misletras.getNumberOfItems()).eql(5);
    });
    it('Eliminar elmento de la collecion', () => {
      const a = misletras.removeItem(0);
      expect(a).eql(['a']);
    });
    it('Conseguir elemento de la collecion', () => {
      const b = misletras1.getItems(0);
      expect(b).eql('a');
    });
    it('Se puede filtrar un elemento', () => {
      expect(misletras1.search('a')).eql(['a']);
    });
    const misletras3 = new StringSearchableCollection(['a', 'a', 'a']);
    it('Se puede filtrar varios elementos', () => {
      expect(misletras3.search('a')).eql(['a', 'a', 'a']);
    });
  });
});
