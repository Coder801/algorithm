module.exports = function mergeSort () {

  const merge = function(left, right) {
    const result = [];
    let il = 0;
    let ir = 0;

    while(il < left.length && ir < right.length) {
			if(left[il] < right[ir]) {
				result.push(left[il++])
			} else {
				result.push(right[ir++])
			}
		}

    return result.concat(left.slice(il)).concat(right.slice(ir));

  }

  const sort = function(array) {
    if(array.length < 2)
			return array;

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(sort(left), sort(right))
  }

  return sort([...this])
};
