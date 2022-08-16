/**
 * Pivot helper
 * @param {*} arr 
 * @param {*} start 
 * @param {*} end 
 * @returns 
 */
// Version with ES2015 Syntax
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

/**
 * Quick Sort Big-O O(n^2)
 * 
 * The next sorting algorithm we'll consider is Quick Sort. Unfortunately, quicksort is not the most intuitive of algorithms and has a wide range of implementations. It may help to check out this great video from Computerphile for a quick introduction to how quicksort works:https://www.youtube.com/watch?v=XE4VP_8Y0BU
 * 
 * The algorithm is as follows:
 * 
 * Pick an element in the array and designate it as the "pivot". While there are quite a few options for choosing the pivot. We'll make things simple to start, and will choose the pivot as the first element. This is not an ideal choice, but it makes the algorithm easier to understand for now.
 * Next, compare every other element in the array to the pivot.
 * If it's less than the pivot value, move it to the left of the pivot.
 * If it's greater, move it to the right.
 * Once you have finished comparing, the pivot will be in the right place.
 * Next, recursively call quicksort again with the left and right halves from the pivot until the array is sorted.
 * 
 * It's easiest to implement Quick Sort with the aid of your pivot  helper from the earlier exercise. This function is responsible for taking an array, setting the pivot value, and mutating the array so that all values less than the pivot wind up to the left of it, and all values greater than the pivot wind up to the right of it. It's also helpful if this helper returns the index of where the pivot value winds up.
 * 
 * The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.
 * 
 * @param {*} arr 
 * @param {*} left 
 * @param {*} right 
 * @returns 
 */
function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 

function quickSortRec(array) {
  if(array.length < 2) return array;
  const pivot = array[array.length - 1];
  const left = [],right = [];
  for (let i = 0; i < array.length - 1; i++) {
      if(pivot > array[i]){
          left.push(array[i]);
      }else {
          right.push(array[i]);
      }
  }
  return [...quickSortRec(left),pivot,...quickSortRec(right)];
}

// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1

module.exports.quickSort = quickSort;
module.exports.quickSortRec = quickSortRec;