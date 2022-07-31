/* eslint-disable max-len */
/* eslint-disable array-bracket-spacing */
import 'mocha';
import {expect} from 'chai';
import {sumComplex, restComplex, divideComplex, escalarProductComplex, productComplex} from '../src/ejercicio-12';

describe('Test funcion sumComplex', () => {
  it('sumComplex([1, 2], [3, 4]) should return [ 4, 6 ]', () => {
    expect(sumComplex([1, 2], [3, 4])).to.eql([ 4, 6 ]);
  });
});
describe('Test funcion restComplex', () => {
  it('restComplex([1, 2], [3, 4]) should return [ -2, -2 ]', () => {
    expect(restComplex([1, 2], [3, 4])).to.eql([ -2, -2 ]);
  });
});
describe('Test funcion divideComplex', () => {
  it('divideComplex([3, 2], [1, -2]) should return [ -0.2, 1.6 ]', () => {
    expect(divideComplex([3, 2], [1, -2])).to.eql([ -0.2, 1.6 ]);
  });
});
describe('Test funcion productComplex', () => {
  it('productComplex([5, 2], [2, -3]) should return [ 16, -11 ]', () => {
    expect(productComplex([5, 2], [2, -3])).to.eql([ 16, -11 ]);
  });
});
describe('Test funcion escalarProductComplex', () => {
  it('escalarProductComplex([2, 3], 4)) should return [ 8, 12 ]', () => {
    expect(escalarProductComplex([2, 3], 4)).to.eql([ 8, 12 ]);
  });
});
