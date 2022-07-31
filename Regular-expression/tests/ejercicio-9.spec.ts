/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {romanToDecimal, decimalToRomanLast} from '../src/ejercicio-9';


describe('Test funcion romanToDecimal', () => {
  it('romanToDecimalLast(MCMXCV) should return 1995', () => {
    expect(romanToDecimal("MCMXCV")).to.be.equal(1995);
  });
  it('romanToDecimal(MMXIV”) should return 2014', () => {
    expect(romanToDecimal("MMXIV")).to.be.equal(2014);
  });
});

describe('Test funcion decimalToRoman', () => {
  it('decimalToRomanLast(1995) should return MCMXCV', () => {
    expect(decimalToRomanLast(1995)).to.be.equal("MCMXCV");
  });
  it('decimalToRoman(2014) should return MMXIV', () => {
    expect(decimalToRomanLast(2014)).to.be.equal("MMXIV");
  });
});
