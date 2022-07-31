import 'mocha';
import {expect} from 'chai';
import {princessDiana} from '../src/ejercicio-7';


describe('Test funcion princessDiana', () => {
  it('princessDiana(2, 1, 1) should return 2', () => {
    expect(princessDiana(2, 1, 1)).to.be.equal(2);
  });
  it('princessDiana(5, 3, 10) should return 92', () => {
    expect(princessDiana(5, 10, 3)).to.be.equal(92);
  });
});
