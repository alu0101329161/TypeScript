import 'mocha';
import {expect} from 'chai';
import {isValidISBN} from '../src/ejercicio-4';


describe('Test funcion isValidISBN', () => {
  it('isValidISBN("3-598-21507-X") should return true', () => {
    expect(isValidISBN("3-598-21507-X")).to.be.equal(true);
  });
  it('isValidISBN("3-598-21508-8") should return true', () => {
    expect(isValidISBN("3-598-21508-8")).to.be.equal(true);
  });
  it('isValidISBN("3-598-21508-") should return false', () => {
    expect(isValidISBN("3-598-21508-")).to.be.equal(false);
  });
});
