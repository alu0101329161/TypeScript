/* eslint-disable max-len */
/* eslint-disable array-bracket-spacing */
import 'mocha';
import {expect} from 'chai';
import {decodeResistor} from '../src/ejercicio-3';

describe('Test funcion decodeResistor', () => {
  it('decodeResistor(["Marron", "Pepe"]) should return undefined', () => {
    expect(decodeResistor(["Marron", "Pepe"])).to.eql(undefined);
  });
  it('decodeResistor(["Marron", "Verde", "Violeta"]) should return 15', () => {
    expect(decodeResistor(["Marron", "Verde", "Violeta"])).to.eql(15);
  });
  it('decodeResistor(["Marron"]) should return 1', () => {
    expect(decodeResistor(["Marron"])).to.eql(1);
  });
  it('decodeResistor([]) should return undefined', () => {
    expect(decodeResistor([])).to.eql(undefined);
  });
  it('decodeResistor([""]) should return undefined', () => {
    expect(decodeResistor([""])).to.eql(undefined);
  });
  it('decodeResistor([""]) should return undefined', () => {
    expect(decodeResistor([""])).to.eql(undefined);
  });
});
