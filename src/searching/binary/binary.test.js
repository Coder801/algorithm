const chai = require('chai');
const should = chai.should();
const binary = require('./binary');
//const array = require('../../../sorted-array.js');

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


describe('Binary search', () => {
  it('Should return index of searched element if it exists', () => {
      const actual = binary(array2, 5);
      actual.should.equal(4);
  })

  it('Should return -1 if no matches', () => {
    const actual = binary(array2, 11);
    actual.should.equal(-1);
  })
})
