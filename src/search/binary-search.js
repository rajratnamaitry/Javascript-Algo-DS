// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}
// Refactored Version
function binarySearchRef(arr, elem) {
    let start = 0;
    let end = arr.length;
    while (start < end){
        const mid = Math.round((start + end)/ 2)
        if(arr[mid] == elem){
            return mid;
        } else if(arr[mid] > elem){
            end = mid - 1; 
        } else {
            start = mid + 1;
        }
    }
    return -1;
}
// Recursive
function binarySearchRec(arr,elem){
    let start = 0;
    let end = arr.length;
    let mid = Math.floor((start + end) / 2);
    if(arr[mid]!=elem && start < end){
        if(arr[mid] > elem){
            return binarySearchRec(arr.slice(start,mid - 1),elem)
        } else {
            return binarySearchRec(arr.slice(mid + 1, end),elem)
        }
    }
    return mid
}
module.exports = { binarySearch, binarySearchRec , binarySearchRef }