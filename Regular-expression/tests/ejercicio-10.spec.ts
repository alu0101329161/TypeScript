import 'mocha';
import {expect} from 'chai';
import {distanceOfManhattan} from '../src/ejercicio-10';


describe('Test funcion distanceOfManhattan', () => {
  it('distanceOfManhattan("1,3", "4,10") should return 10', () => {
    expect(distanceOfManhattan("1,3", "4,10")).to.be.equal(10);
  });
  it('distanceOfManhattan("1,1", "1,1") should return 0', () => {
    expect(distanceOfManhattan("1,1", "1,1")).to.be.equal(0);
  });
  it('distanceOfManhattan("-1,3,7", "-5,8,7") should return 9', () => {
    expect(distanceOfManhattan("-1,3,7", "-5,8,7")).to.be.equal(9);
  });
});
