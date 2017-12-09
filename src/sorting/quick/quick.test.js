const chai = require('chai');
const should = chai.should();
const quick = require('./quick.js');
const array = require('../../../array.js');

chai.use(require('chai-sorted'));

describe('Quick sort', () => {
  it('Should return sorted array', () => {
    array.quickSort = quick;
    array.quickSort().should.be.sorted();
  })

  it('Should return sorted array', () => {
    array.sort((a, b) => {
      return a - b
    }).should.be.sorted();
  })
})
