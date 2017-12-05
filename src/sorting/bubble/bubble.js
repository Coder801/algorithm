module.exports = function bubbleSort() {
  const sorted = [...this];
  const length = sorted.length;
  for(let i = 0; i < length - 1; i++) {
    for(let j = i + 1; j < length; j++) {
      if(sorted[j] < sorted[i]) {
        const temp = sorted[j];
        sorted[j] = sorted[i];
        sorted[i] = temp;
      }
    }
  }
  return sorted;
}
