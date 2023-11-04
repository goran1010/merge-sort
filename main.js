function mergeSort(array, first = 0, last = array.length - 1) {
  if (first < last) {
    let mid = Math.floor((first + last) / 2);
    return merge(mergeSort(array, first, mid), mergeSort(array, mid + 1, last));
  }
  return [array[first]];
}

function merge(arrayOne, arrayTwo) {
  let i = 0;
  let j = 0;
  const sortedArray = [];
  while (i < arrayOne.length && j < arrayTwo.length) {
    if (arrayOne[i] < arrayTwo[j]) {
      sortedArray.push(arrayOne[i]);
      i++;
    } else {
      sortedArray.push(arrayTwo[j]);
      j++;
    }
  }
  for (; i < arrayOne.length; i++) {
    sortedArray.push(arrayOne[i]);
  }
  for (; j < arrayTwo.length; j++) {
    sortedArray.push(arrayTwo[j]);
  }
  return sortedArray;
}

console.log(mergeSort([-545, 17, 2, 8, 224, 35, 1000]));
