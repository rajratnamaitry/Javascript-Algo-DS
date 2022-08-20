/**
 * Multiple Pointers - averagePair
 * Write a function called averagePair.  Given a sorted array of integers and a target average, 
 * determine if there is a pair of values in the array where the average of the pair equals the target average. 
 * There may be more than one pair that matches the average target.
 */

 function averagePair(arr, target) {
    let left = 0
    let right = arr.length - 1;
    while(left < right){
        if((arr[left] + arr[right])/2 === target) return true;
        if((arr[left] + arr[right])/2 < target) left++;
        if((arr[left] + arr[right])/2 > target) right--;
    }
    return false;
}
 
 averagePair([1,2,3],2.5) // true
 module.exports.averagePair = averagePair;