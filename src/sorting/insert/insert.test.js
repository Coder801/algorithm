const chai = require('chai');
const should = chai.should();
const insert = require('./insert.js');
const array = require('../../../array.js');

chai.use(require("chai-sorted"));

describe('Bubble sort', () => {
  it('Should return sorted array', () => {
    const sorted = insert(array);
    sorted.should.be.sorted();
  })
})
