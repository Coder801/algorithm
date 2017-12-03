module.exports = function binarySearch(array, needle){
  const length = array.length;
  if(length === 0) {
    return -1;
  }
  let left = 0;
  let right = length - 1;
  let index = -1;

  while(true){
    index = Math.floor((right + left) / 2);

    if(left > right) {
      return -1;
    }

    if(needle > array[index]) {
      left = index + 1
    } else if(needle < array[index]) {
      right = index - 1
    } else {
      return index;
    }

  }

  // if(array[index] === needle) {
  //   return index;
  // } else {
  //   console.log(index);
  //   if(array[index] > needle) {
  //     return binarySearch(array.slice(0, index), needle);
  //   } else {
  //     return binarySearch(array.slice(index + 1), needle) + index;
  //   }
  // }
}
