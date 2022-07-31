/* eslint-disable max-len */
/* eslint-disable array-bracket-spacing */
import 'mocha';
import {expect} from 'chai';
import {moveZeros} from '../src/ejercicio-6';

describe('Test funcion moveZeros', () => {
  it('moveZeros([1, 0, 1, 2, 0, 1, 3]) should return [1, 1, 2, 1, 3, 0, 0]', () => {
    expect(moveZeros([1, 0, 1, 2, 0, 1, 3])).to.eql([1, 1, 2, 1, 3, 0, 0]);
  });
  it('moveZeros([1, 1, 2, 1, 3]) should return [1, 1, 2, 1, 3]', () => {
    expect(moveZeros([1, 1, 2, 1, 3])).to.eql([1, 1, 2, 1, 3]);
  });
  it('moveZeros([]) should return undefined', () => {
    expect(moveZeros([])).to.eql(undefined);
  });
});
