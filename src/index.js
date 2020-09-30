exports.min = function min(array) {
   
  if (!array || array[0] === undefined) {
      return 0;
  } else {
    let minItem = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minItem) {
            minItem = array[i];
        }
    }
    return minItem;
  }
}
 
exports.max = function max(array) {
  if (!array || array[0] === undefined) {
      return 0;
  }
  let maxItem = array[0];
  for (let i = 1; i < array.length; i++) {
      if (array[i] > maxItem) {
          maxItem = array[i];
      }
  }
  return maxItem;
}

exports.avg = function avg(array) {
  if (!array || array[0] === undefined) {
    return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
    sum +=array[i]
    }
    return sum /array.length;
  }
}
