import 'mocha';
import {expect} from 'chai';
import {ipToNumber, ipsInRange} from '../src/ejercicio-6';


describe('Test funcion ipToNumber', () => {
  it('ipToNumber("1.0.0.0") should return 16777216', () => {
    expect(ipToNumber("1.0.0.0")).to.be.equal(16777216);
  });
  it('ipToNumber("0.1.0.0") should return 65536', () => {
    expect(ipToNumber("0.1.0.0")).to.be.equal(65536);
  });
  it('ipToNumber("0.0.1.0") should return 256', () => {
    expect(ipToNumber("0.0.1.0")).to.be.equal(256);
  });
  it('ipToNumber("0.0.0.1") should return 1', () => {
    expect(ipToNumber("0.0.0.1")).to.be.equal(1);
  });
});

describe('Test funcion ipsInRange', () => {
  it('ipsInRange("10.0.0.0", "10.0.0.50") should return 50', () => {
    expect(ipsInRange("10.0.0.0", "10.0.0.50")).to.be.equal(50);
  });
  it('ipsInRange("10.0.0.0", "10.0.1.0") should return 256', () => {
    expect(ipsInRange("10.0.0.0", "10.0.1.0")).to.be.equal(256);
  });
  it('ipsInRange("20.0.0.10", "20.0.1.0") should return 246', () => {
    expect(ipsInRange("20.0.0.10", "20.0.1.0")).to.be.equal(246);
  });
});
