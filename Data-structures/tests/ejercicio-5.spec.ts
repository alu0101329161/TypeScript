/* eslint-disable max-len */
/* eslint-disable array-bracket-spacing */
import 'mocha';
import {expect} from 'chai';
import {meanAndConcatenate} from '../src/ejercicio-5';

describe('Test funcion meanAndConcatenate', () => {
  it('meanAndConcatenate(["u", 6, "d", 1, "i", "w", 6, "s", "t", 4, "a", 6, "g", 1, 2, "w", 8, "o", 2, 0]) should return [ 3.6, "udiwstagwo" ]', () => {
    expect(meanAndConcatenate(['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0])).to.eql([ 3.6, 'udiwstagwo' ]);
  });
  it('meanAndConcatenate(["u", 6, "d", 1, "i", "w", 6]) should return [ 3.6, "udiwstagwo" ]', () => {
    expect(meanAndConcatenate(["u", 6, "d", 1, "i", "w", 6])).to.eql([ 4.333333333333333, 'udiw' ]);
  });
  it('meanAndConcatenate(["u"]) should return undefined', () => {
    expect(meanAndConcatenate(["u"])).to.eql(undefined);
  });
  it('meanAndConcatenate([6]) should return undefined', () => {
    expect(meanAndConcatenate([6])).to.eql(undefined);
  });
  it('meanAndConcatenate([]) should return undefined', () => {
    expect(meanAndConcatenate([])).to.eql(undefined);
  });
});
