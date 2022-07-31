/* eslint-disable max-len */
/* eslint-disable array-bracket-spacing */
import 'mocha';
import {expect} from 'chai';
import {meshArray} from '../src/ejercicio-4';

describe('Test funcion meshArray', () => {
  it('meshArray(["allow", "lowering", "ringmaster", "terror"]) should return lowringter', () => {
    expect(meshArray(["allow", "lowering", "ringmaster", "terror"])).to.eql("lowringter");
  });
  it('meshArray(["kingdom", "dominator", "notorious", "usual", "allegory"]) should return Error al encadenar', () => {
    expect(meshArray(["kingdom", "dominator", "notorious", "usual", "allegory"])).to.eql("Error al encadenar");
  });
  it('meshArray(["kingdom", "dominator", "torusual", "allegory"]) should return domtoral', () => {
    expect(meshArray(["kingdom", "dominator", "torusual", "allegory"])).to.eql("domtoral");
  });
  it('meshArray(["allow"]) should return Error al encadenar', () => {
    expect(meshArray(["allow"])).to.eql("Error al encadenar");
  });
  it('meshArray([""]) should return Error al encadenar', () => {
    expect(meshArray([""])).to.eql("Error al encadenar");
  });
  it('meshArray([]) should return Error al encadenar', () => {
    expect(meshArray([])).to.eql("Error al encadenar");
  });
});
