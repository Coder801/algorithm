/*

Source material: https://medium.com/@dimko1/%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%D1%8B-%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B8-heapsort-796ba965018b

*/

module.exports = function heapSort() {

  const sorted = [...this];

  function swap(a, b) {
    var tmp = sorted[a];
    sorted[a] = sorted[b];
    sorted[b] = tmp;
  }

  function sink(array, i, max) {

    var big_index;
    var child;

    while (i < max) {
      big_index = i;
      childl = 2 * i + 1;
      childr = childl + 1;

      if (childl < max && array[childl] > array[big_index])
        big_index = childl;

      if (childr < max && array[childr] > array[big_index])
        big_index = childr;

      if (big_index == i)
        return;

      swap(i, big_index);
      i = big_index;
    }
  }

  function build_heap(array) {
    var index = Math.floor((array.length / 2) - 1);

    while (index >= 0) {
      sink(array, index, array.length);
      index--;
    }
  }

  function sort(array) {
    build_heap(array);

    var end = array.length - 1;

    while (end >= 0) {
      swap(0, end);
      sink(array, 0, end);
      end -= 1
    }

    return array;
  }

  return sort(sorted);
};
