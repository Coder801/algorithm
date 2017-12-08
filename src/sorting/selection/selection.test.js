const chai = require('chai');
const should = chai.should();
const selection = require('./selection.js');
const array = require('../../../array.js');

chai.use(require('chai-sorted'));

describe('Selection sort', () => {
  it('Should return sorted array', () => {
    array.selectionSort = selection;
    array.selectionSort().should.be.sorted();
  })
})
