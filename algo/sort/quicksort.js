/**
 * Quick Sort
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
 * Examples
 * 

 *  
 * var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 *  
 * function strComp(a, b) {
 *   if (a < b) { return -1;}
 *   else if (a > b) { return 1;}
 *   return 0;
 * }
 *  
 * quickSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
 *  
 * var moarKittyData = [{
 *   name: "LilBub",
 *   age: 7
 * }, {
 *   name: "Garfield",
 *   age: 40
 * }, {
 *   name: "Heathcliff",
 *   age: 45
 * }, {
 *   name: "Blue",
 *   age: 1
 * }, {
 *   name: "Grumpy",
 *   age: 6
 * }];
 *  
 * function oldestToYoungest(a, b) {
 *   return b.age - a.age;
 * }
 *  
 * quickSort(moarKittyData, oldestToYoungest); // sorted by age in descending order
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
           
quickSort([100,-3,2,4,6,9,1,2,5,3,23])
quickSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
quickSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
quickSort([1, 2, 3]); // [1, 2, 3]
quickSort([]);
var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
quickSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]



// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1




