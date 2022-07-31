/* eslint-disable max-len */
/* eslint-disable array-bracket-spacing */
import 'mocha';
import {expect} from 'chai';
import {sumPoints, restPoints, productPoints, euclideanDistance} from '../src/ejercicio-8';


describe('Test funcion sumPoints', () => {
  it('sumPoints([1, 1], [2, 2]) should return [3, 3]', () => {
    expect(sumPoints([1, 1], [2, 2])).to.eql([3, 3]);
  });
  it('sumPoints([1, 2], [3, 4]) should return [4, 6]', () => {
    expect(sumPoints([1, 2], [3, 4])).to.eql([4, 6]);
  });
});

describe('Test funcion restPoints', () => {
  it('restPoints([1, 1], [2, 2]) should return [-1, -1]', () => {
    expect(restPoints([1, 1], [2, 2])).to.eql([-1, -1]);
  });
  it('restPoints([1, 2], [3, 4]) should return [-2, -2]', () => {
    expect(restPoints([1, 2], [3, 4])).to.eql([-2, -2]);
  });
});

describe('Test funcion productPoints', () => {
  it('productPoints([1, 1], 2) should return [2, 2]', () => {
    expect(productPoints([1, 1], 2)).to.eql([2, 2]);
  });
  it('productPoints([1, 2], 3) should return [3, 6]', () => {
    expect(productPoints([1, 2], 3)).to.eql([3, 6]);
  });
});

describe('Test funcion euclideanDistance', () => {
  it('euclideanDistance([1, 10], [2, 5]) should return 5.0990', () => {
    expect(euclideanDistance([1, 10], [2, 5])).to.eql(5.0990195135927845);
  });
  it('euclideanDistance([1, 7], [-2, 5]) should return 3.6055', () => {
    expect(euclideanDistance([1, 7], [-2, 5])).to.eql(3.605551275463989);
  });
});
