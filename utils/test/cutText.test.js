const expect = require('chai').expect;
const cutText = require('../cutText.js');


describe('cutText', () => {
  it('should return an error if content arg is not a string', () => {
    expect(cutText(undefined, 20)).to.equal('Error');
    expect(cutText(12, 20)).to.equal('Error');
    expect(cutText({}, 20)).to.equal('Error');
    expect(cutText([], 20)).to.equal('Error');
    expect(cutText(function() {}, 20)).to.equal('Error');
  });
  it('should return an error if content arg length is 0', () => {
    expect(cutText('', 20)).to.equal('Error');
  });
  it('should return error if maxlength arg is not a number', () => {
    expect(cutText('Lorem Ipsum', undefined)).to.equal('Error');
    expect(cutText('Lorem Ipsum', {})).to.equal('Error');
    expect(cutText('Lorem Ipsum', [])).to.equal('Error');
    expect(cutText('Lorem Ipsum', function(){})).to.equal('Error');
    expect(cutText('Lorem Ipsum', 'string')).to.equal('Error');
  });
  it('should return error if maxLenght is lower or equal 0', () => {
    expect(cutText('Lorem Ipsum', 0)).to.equal('Error');
    expect(cutText('Lorem Ipsum', -1)).to.equal('Error');
  });
  it('should return content if content and maxLength are correct and maxLength is greater or equal content.length', () => {
    expect(cutText('Lorem Ipsum', 40)).to.equal('Lorem Ipsum');
    expect(cutText('Lorem Ipsum', 11)).to.equal('Lorem Ipsum');
  });
  it('should return good cut content if proper args', () => {
    expect(cutText('Lorem Ipsum', 9)).to.equal('Lorem...');
    expect(cutText('Lorem Ipsum', 5)).to.equal('Lorem...');
  });
});