import 'mocha';
import {expect} from 'chai';
// eslint-disable-next-line max-len
import {factRecursivo, factorialToDecimal, decimalToFactorial} from '../src/ejercicio-2';


describe('Test funcion factRecursivo', () => {
  it('factRescursivo(5) should return 120', () => {
    expect(factRecursivo(5)).to.be.equal(120);
  });
  it('factRescursivo(4) should return 24', () => {
    expect(factRecursivo(4)).to.be.equal(24);
  });
});

describe('Test funcion factorialToDecimal', () => {
  it('factorialToDecimal("341010") should return 463', () => {
    expect(factorialToDecimal("341010")).to.be.equal(463);
  });
  it('factorialToDecimal("540200") should return 700', () => {
    expect(factorialToDecimal("540200")).to.be.equal(700);
  });
});

describe('Test funcion decimalToFactorial', () => {
  it('decimalToFactorial(463) should return 342020', () => {
    expect(decimalToFactorial(463)).to.be.equal("341010");
  });
  it('decimalToFactorial(700) should return 540200', () => {
    expect(decimalToFactorial(700)).to.be.equal("540200");
  });
});
