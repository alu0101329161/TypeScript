/* eslint-disable max-len */
/* eslint-disable array-bracket-spacing */
import 'mocha';
import {expect} from 'chai';
import {productTable} from '../src/ejercicio-1';

describe('Test funcion productTable', () => {
  it('productTable(2) should return [ [ 1, 2 ], [ 2, 4 ] ]', () => {
    expect(productTable(2)).to.eql([[1, 2], [2, 4]]);
  });
  it('productTable(3) should return [ [ 1, 2, 3 ], [ 2, 4, 6 ], [ 3, 6, 9 ] ]', () => {
    expect(productTable(3)).to.eql([[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
  });
  it('productTable(4) should return [ [ 1, 2, 3, 4 ], [ 2, 4, 6, 8 ], [ 3, 6, 9, 12 ], [ 4, 8, 12, 16 ] ]', () => {
    expect(productTable(4)).to.eql([[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]);
  });
  it('productTable(-50) should return undefined', () => {
    expect(productTable(-50)).to.eql(undefined);
  });
});
