const expect = require('chai').expect;
const formatFullname = require('../formatFullname.js');

describe('formatFullname', () => {
  it('should return good content if arg is correct', () => {
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('jOhN DoE')).to.equal('John Doe');
  });
  it('should return an error if arg is empty', () => {
    expect(formatFullname('')).to.equal('Error');
  });
  it('should return error if if arg is not a string', () => {
    expect(formatFullname(44)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function(){})).to.equal('Error');
    expect(formatFullname(undefined)).to.equal('Error');
  });
  it('should return error if arg is not correct format', () => {
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('John Doe Doe')).to.equal('Error');
  });
});