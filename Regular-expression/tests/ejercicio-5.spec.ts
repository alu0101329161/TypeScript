import 'mocha';
import {expect} from 'chai';
import {descendingOrder} from '../src/ejercicio-5';


describe('Test funcion descendingOrder', () => {
  it('descendingOrder(42145) should return 54421', () => {
    expect(descendingOrder(42145)).to.be.equal(54421);
  });
  it('descendingOrder(145263) should return 654321', () => {
    expect(descendingOrder(145263)).to.be.equal(654321);
  });
  it('descendingOrder(123456789) should return 987654321', () => {
    expect(descendingOrder(123456789)).to.be.equal(987654321);
  });
});
