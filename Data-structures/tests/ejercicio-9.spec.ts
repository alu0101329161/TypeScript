/* eslint-disable max-len */
/* eslint-disable array-bracket-spacing */
import 'mocha';
import {expect} from 'chai';
import {operationNPoints, productNPoints, euclideanNDistance} from '../src/ejercicio-9';


describe('Test funcion operationNPoints', () => {
  it('operationNPoints([1, 1, 1, 5], [2, 2, 2, 7], "+")) should return [ 3, 3, 3, 12 ]', () => {
    expect(operationNPoints([1, 1, 1, 5], [2, 2, 2, 7], "+")).to.eql([3, 3, 3, 12]);
  });
  it('operationNPoints([1, 1, 1, 5], [2, 2, 2, 7], "-")) should return [ -1, -1, -1, -2 ]', () => {
    expect(operationNPoints([1, 1, 1, 5], [2, 2, 2, 7], "-")).to.eql([-1, -1, -1, -2]);
  });
  it('operationNPoints([1, 1, 1, 5], [2, 2, 2, 7], "a")) should return undefined', () => {
    expect(operationNPoints([1, 1, 1, 5], [2, 2, 2, 7], "a")).to.eql(undefined);
  });
  it('operationNPoints([1, 1, 1, 5], [2, 2, 2], "+")) should return undefined', () => {
    expect(operationNPoints([1, 1, 1, 5], [2, 2, 2], "+")).to.eql(undefined);
  });
});

describe('Test funcion productNPoints', () => {
  it('productNPoints([1, 2, 5, 7], 2) should return [ 3, 3, 3, 12 ]', () => {
    expect(productNPoints([1, 2, 5, 7], 2)).to.eql([ 2, 4, 10, 14 ]);
  });
  it('productNPoints([1, 2, 5, 7], 3) should return [ 3, 6, 15, 21 ]', () => {
    expect(productNPoints([1, 2, 5, 7], 3)).to.eql([ 3, 6, 15, 21 ]);
  });
});

describe('Test funcion euclideanNDistance', () => {
  it('euclideanNDistance([1, 3, 6], [2, 6, 7]) should return 3.3166', () => {
    expect(euclideanNDistance([1, 3, 6], [2, 6, 7])).to.eql(3.3166247903554);
  });
  it('euclideanNDistance([1, 3, 6], [2, 6]) should return undefined', () => {
    expect(euclideanNDistance([1, 3, 6], [2, 6, 5, 6])).to.eql(undefined);
  });
});
