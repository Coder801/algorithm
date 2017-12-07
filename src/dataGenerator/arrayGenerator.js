class ArrayGenerator {
  constructor(length) {
    this.length = length;
  }

  _randomNumber(min = 0, max = 999) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  _getEmptyArray(length = 10) {
    return Array.apply(null, {length})
  }

  _random(min, max) {
    return this._getEmptyArray(this.length).map(number => this._randomNumber(1, 10));
  }

  _sorted(from) {
    return this._getEmptyArray(this.length).map(number => from++);
  }

  _sortedRevert(from) {
    return this._getEmptyArray(this.length).map(number => from--);
  }

  random(min, max) {
    return this._random(min, max)
  }

  sorted(from) {
    return this._sorted(from)
  }

  sortedRevert(from) {
    return this._sortedRevert(from)
  }
}

module.exports = ArrayGenerator;
