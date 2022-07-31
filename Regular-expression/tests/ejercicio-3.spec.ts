import 'mocha';
import {expect} from 'chai';
// eslint-disable-next-line max-len
import {fromSnakeToCamelCase, fromCamelToSnake} from '../src/ejercicio-3';


describe('Test funcion fromSnakeToCamelCase', () => {
  it('fromSnakeToCamelCase("sample_string") should return sampleString', () => {
    expect(fromSnakeToCamelCase("sample_string")).to.be.equal("sampleString");
  });
  it('fromSnakeToCamelCase("sample_string_a") should return sampleStringA', 
      () => {
        expect(fromSnakeToCamelCase("sample_string_A"))
            .to.be.equal("sampleStringA");
      });
});

describe('Test funcion fromCamelToSnake', () => {
  // eslint-disable-next-line max-len
  it('fromCamelToSnake("theStealthWarrior") should return the_steal_warrior', () => {
    // eslint-disable-next-line max-len
    expect(fromCamelToSnake("theStealthWarrior")).to.be.equal("the_stealth_warrior");
  });
});
