import 'mocha';
import {expect} from 'chai';
import {isLeapYear} from '../src/ejercicio-1';


describe('Test funcion isLeapYear', () => {
  it('isLeapYear(1997) should return false', () => {
    expect(isLeapYear(1997)).to.be.equal(false);
  });

  it('isLeapYear(1996) should return true', () => {
    expect(isLeapYear(1996)).to.be.equal(true);
  });

  it('isLeapYear(2000) should return true', () => {
    expect(isLeapYear(2000)).to.be.equal(true);
  });
});
