const chai = require('chai');
const should = chai.should();
const insertion = require('./insertion.js');
const array = require('../../../array.js');

chai.use(require("chai-sorted"));

describe('Insertion sorting algorithm', () => {
  it('Should return sorted array', () => {
    array.insertionSort = insertion;
    array.insertionSort().should.be.sorted();
  })
})
