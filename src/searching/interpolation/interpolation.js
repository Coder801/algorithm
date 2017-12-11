module.exports = function interpolationSearch(array, needle) {
    var middle;
    var low = 0;
    var high = array.length - 1;

    while (array[low] < needle && array[high] > needle)
    {  middle = low + Math.floor( ((needle - array[low]) * (high - low))/(array[high]- array[low]) );
       if (array[middle] < needle) {
         low = middle + 1;
       } else if (array[middle] > needle) {
         high = middle - 1;
       } else {
         return middle;
       }
    }

    if (array[low] === needle) {
      return low;
    } else if (array[high] === needle) {
      return high;
    } else {
      return -1;
    }
}
