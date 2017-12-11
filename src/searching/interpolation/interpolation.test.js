const chai = require('chai');
const should = chai.should();
const interpolation = require('./interpolation');
//const array = require('../../../sorted-array.js');

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


describe('Interpolation search', () => {
  it('Should return index of searched element if it exists', () => {
      const actual = interpolation(array2, 5);
      actual.should.equal(4);
  })

  it('Should return -1 if no matches', () => {
    const actual = interpolation(array2, 11);
    actual.should.equal(-1);
  })
})
