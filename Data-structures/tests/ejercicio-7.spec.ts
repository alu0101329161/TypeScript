/* eslint-disable max-len */
/* eslint-disable array-bracket-spacing */
import 'mocha';
import {expect} from 'chai';
import {multiplyAll} from '../src/ejercicio-7';

let myFunction: (a: number) => number[] | undefined;
describe('Test funcion multiplyAll', () => {
  it('multiplyAll([2, 6, 8])(2) should return [4, 12, 16]', () => {
    myFunction = multiplyAll([2, 6, 8]);
    expect(myFunction(2)).to.eql([4, 12, 16]);
  });
  it('multiplyAll([2, 6, 8])(3) should return [6, 18, 24]', () => {
    expect(myFunction(3)).to.eql([6, 18, 24]);
  });
  it('multiplyAll([2, 6, 8])(4) should return [8, 24, 32]', () => {
    expect(myFunction(4)).to.eql([8, 24, 32]);
  });
  it('multiplyAll([])(4) should return undefined', () => {
    expect(multiplyAll([])(3)).eql(undefined);
  });
});
