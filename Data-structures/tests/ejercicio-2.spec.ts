/* eslint-disable max-len */
/* eslint-disable array-bracket-spacing */
import 'mocha';
import {expect} from 'chai';
import {fromArrayToRanges, fromRangesToArray} from '../src/ejercicio-2';

describe('Test funcion fromArrayToRanges', () => {
  it('fromArrayToRanges([5, 6, 7, 9, 12, 13, 14]) should return 5_7,9,12_14', () => {
    expect(fromArrayToRanges([5, 6, 7, 9, 12, 13, 14])).to.eql("5_7,9,12_14");
  });
  it('fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7]) should return “-3_-1, 3, 5_7”', () => {
    expect(fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7])).to.eql("-3_-1,3,5_7");
  });
  it('fromArrayToRanges([17]) should return “17”', () => {
    expect(fromArrayToRanges([17])).to.eql("17");
  });
  it('fromArrayToRanges([3, 5, 6, 7, 9, 10]) should return “3, 5_7, 9_10”', () => {
    expect(fromArrayToRanges([3, 5, 6, 7, 9, 10])).to.eql("3,5_7,9_10");
  });
  it('fromArrayToRanges([]) should return “undefined”', () => {
    expect(fromArrayToRanges([])).to.eql(undefined);
  });
});

describe('Test funcion fromRangesToArray', () => {
  it('fromRangesToArray("5_7,9,12_14") should return [5, 6, 7, 9, 12, 13, 14]', () => {
    expect(fromRangesToArray("5_7,9,12_14")).to.eql([5, 6, 7, 9, 12, 13, 14]);
  });
  it('fromRangesToArray("-3_-1,3,5_7") should return [-3, -2, -1, 3, 5, 6, 7]', () => {
    expect(fromRangesToArray("-3_-1,3,5_7")).to.eql([-3, -2, -1, 3, 5, 6, 7]);
  });
  it('fromRangesToArray("17") should return [17]', () => {
    expect(fromRangesToArray("17")).to.eql([17]);
  });
  it('fromRangesToArray("3,5_7,9_10") should return [3, 5, 6, 7, 9, 10]', () => {
    expect(fromRangesToArray("3,5_7,9_10")).to.eql([3, 5, 6, 7, 9, 10]);
  });
  it('fromRangesToArray([]) should return “undefined”', () => {
    expect(fromRangesToArray("")).to.eql(undefined);
  });
});
