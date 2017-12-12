const chai = require('chai');
const should = chai.should();
const heap = require('./heap.js');
const array = require('../../../array.js');

chai.use(require("chai-sorted"));

describe('Heap sorting algorithm', () => {
  it('Should return sorted array', () => {
    array.heapSort = heap;
    array.heapSort().should.be.sorted();
  })
})
