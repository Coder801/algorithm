const chai = require('chai');
const should = chai.should();
const bubble = require('./bubble.js');
const array = require('../../../array.js');

chai.use(require("chai-sorted"));

describe('Bubble sort algorithm', () => {
  it('Should return sorted array', () => {
    array.bubbleSort = bubble;
    array.bubbleSort().should.be.sorted();
  })
})
