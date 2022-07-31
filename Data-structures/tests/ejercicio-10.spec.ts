/* eslint-disable max-len */
/* eslint-disable array-bracket-spacing */
import 'mocha';
import {expect} from 'chai';
import {generationApp} from '../src/ejercicio-10';


describe('Test funcion generationApp', () => {
  it('generationApp(["n", "n", "s", "s", "n", "s", "n", "s", "n", "s"]) should return true', () => {
    expect(generationApp(["n", "n", "s", "s", "n", "s", "n", "s", "n", "s"])).to.eql(true);
  });
  it('generationApp(["n", "n", "s", "s"]) should return true', () => {
    expect(generationApp(["n", "n", "s", "s"])).to.eql(true);
  });
  it('generationApp(["n", "n", "o", "o"]) should return false', () => {
    expect(generationApp(["n", "n", "o", "o"])).to.eql(false);
  });
  it('generationApp([]) should return undefined', () => {
    expect(generationApp([])).to.eql(undefined);
  });
  it('generationApp([""]) should return undefined', () => {
    expect(generationApp([""])).to.eql(undefined);
  });
});
