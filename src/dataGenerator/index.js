const fs = require('fs');
const ArrayGenerator = require('./arrayGenerator');
const array = new ArrayGenerator(100);

const arrays = {
  random: array.random(10, 50),
  sorted: array.sorted(15),
  sortedRevert: array.sortedRevert(15)
}

fs.writeFile('./src/data/array.json', JSON.stringify(arrays), err => {
  if (err) throw err;
  console.log('Array written to file');
})
