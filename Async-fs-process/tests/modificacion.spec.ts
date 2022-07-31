import 'mocha';
import {expect} from "chai";
import {AddReduce} from "../src/Modificacion/addreduce";
import {RestReduce} from "../src/Modificacion/restreduce";

let add = new AddReduce(1, 2, 3, 4);
let rest = new RestReduce(1, 2, 3, 4);
let rest1 = new RestReduce(1, 2, 3, 4);

describe('tests', () => {
  it('test addReduce', () => {
    expect(add.run(Math.sqrt)).to.eql(6.146264369941973);
  });
  it('test restReduce', () => {
    expect(rest.run(Math.sqrt)).to.eql(-6.146264369941973);
  });
  it('test restReduce', () => {
    expect(rest1.run((x: number) => {return x*x})).to.eql(-30);
  });
});
