/** 
 * Merge helper O(n log n)
*/
function mergeSortHelper(array1,array2){
    let i = 0;
    let j = 0;
    const result = [];
    while(i < array1.length && j < array2.length){
        if(array1[i] > array2[j]){
            result.push(array2[j])
            j++;
        } else {
            result.push(array1[i])
            i++;
        }
    }
    while (i < array1.length) {
        result.push(array1[i])
        i++;
    }
    while (j < array1.length) {
        result.push(array2[j])
        j++;
    }
    return result;
}
// Alternative
function mergeSortHelper2(leftArr,rightArr){
    const sortedArr = [];
    while(leftArr.length && rightArr.length){
        if(leftArr[0] > rightArr[0]){
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr,...leftArr,...rightArr];
}
/**
 * Merge Sort
 */
function mergeSort(array, flag = false) {
    if(array.length == 1) return array;
    const mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0,mid))
    let right = mergeSort(array.slice(mid))
    return flag ? mergeSortHelper2(left,right) : mergeSortHelper(left,right);
}

module.exports.mergeSort = mergeSort;

