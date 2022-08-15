/**
 * Bubble Sort
 * Big-O O(n^2)
 */
// UNOPTIMIZED VERSION OF BUBBLE SORT
// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
// Alternative
function bubbleSort2(array) {
  let swap;
  do {
    swap = false;
    for (let i = 0; i < array.length; i++) {
      if(array[i] > array[i+1]){
        [array[i],array[i+1]] = [array[i+1],array[i]]
        swap = true;
      };    
    }
  } while(swap)
  return array;
}
// Optimized BubbleSort with noSwaps
function bubbleSortOpt(arr){
  var noSwaps;
  for(var i = arr.length; i > 0; i--){
    noSwaps = true;
    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}
module.exports.bubbleSort = bubbleSort;
module.exports.bubbleSort2 = bubbleSort2;
module.exports.bubbleSortOpt = bubbleSortOpt;