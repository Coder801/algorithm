const chai = require('chai');
const should = chai.should();
const merge = require('./merge.js');
const array = require('../../../array.js');

chai.use(require('chai-sorted'));

describe('Merge sort', () => {
  it('Should return sorted array', () => {
    array.mergeSort = merge;
    array.mergeSort().should.be.sorted();
  })
})
