module.exports = function quickSort() {
	const sorted = [...this];

	function swap(array, firstIndex, secondIndex) {
		const temp = array[firstIndex];
		array[firstIndex] = array[secondIndex];
		array[secondIndex] = temp;
	}

	function partition(array, left, right) {

		const pivot = array[Math.floor((left + right) / 2)];

		while(left <= right) {
			while(array[left] < pivot) {
				left++
			}

			while(array[right] > pivot) {
				right--
			}

			if (left <= right) {
					swap(array, left, right);
					left++;
					right--;
			}
		}
    
		return left;

	}

	function sort(items, left, right) {
    var index;
    if (items.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;
        index = partition(items, left, right);
        if (left < index - 1) {
            sort(items, left, index - 1);
        }
        if (index < right) {
            sort(items, index, right);
        }
    }
    return items;
	}

	return sort(sorted);

}
