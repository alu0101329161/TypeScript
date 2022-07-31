/* eslint-disable max-len */
/* eslint-disable array-bracket-spacing */
import 'mocha';
import {expect} from 'chai';
import {encodeMessage, decodeMessage} from '../src/ejercicio-11';

describe('Test funcion encodeMessage', () => {
  it('encodeMessage("abcdf") should return [ "zyxwu" ]', () => {
    expect(encodeMessage("abcdf")).to.eql(['zyxwu']);
  });
  it('encodeMessage("abcdfghijk") should return [ "zyxwu", "tsrqp" ]', () => {
    expect(encodeMessage("abcdfghijk")).to.eql(["zyxwu", "tsrqp"]);
  });
  it('encodeMessage("12") should return undefined', () => {
    expect(encodeMessage("12")).to.eql(undefined);
  });
});
describe('Test funcion decodeMessage', () => {
  it('decodeMessage(["abcde"]) should return "zyxwv"', () => {
    expect(decodeMessage(["abcde"])).to.eql("zyxwv");
  });
  it('decodeMessage(["abcd1"]) should return undefined', () => {
    expect(decodeMessage(["abcd1"])).to.eql(undefined);
  });
});
