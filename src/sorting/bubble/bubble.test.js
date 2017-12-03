const chai = require('chai');
const should = chai.should();
const bubble = require('./bubble.js');
const array = require('../../../array.js');

chai.use(require("chai-sorted"));

describe('Bubble sort', () => {
  it('Should return sorted array', () => {
    const sorted = bubble(array);
    sorted.should.be.sorted();
  })
})
