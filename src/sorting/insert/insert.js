module.exports = function insertSort(array) {
  const sorted = [...array];
  for(let i = 1; i < sorted.length; i++) {
    let value = sorted[i];
    for(var j = i; j > 0 && sorted[j - 1] > value; j--) {
      sorted[j] = sorted[j - 1];
    }
    sorted[j] = value
  }
  return sorted;
}
