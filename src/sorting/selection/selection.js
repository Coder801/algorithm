module.exports = function selectionSort() {
  const sorted = [...this];

  var length = sorted.length;
  for (let i = 0; i < length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (sorted[j] < sorted[min]) {
        min = j;
      }
    }
    if (min != i) {
      let tmp = sorted[i];
      sorted[i] = sorted[min];
      sorted[min] = tmp;
    }
  }

  return sorted
}
