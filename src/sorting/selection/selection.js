module.exports = function selectionSort() {
  const sorted = [...this];
  const length = sorted.length;

	for(let i = 0; i < length - 1; i++) {
		for(let j = i + 1; j < length; j++) {
		  let temp = 0;
			if(sorted[i] > sorted[j]) {
				temp = sorted[i]
				sorted[i] = sorted[j]
				sorted[j] = temp;
			}
		}
	}

	return sorted;
}
