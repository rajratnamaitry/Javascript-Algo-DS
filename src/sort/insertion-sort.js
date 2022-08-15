/**
 * Insertion Sort
 * Big O O(n^2)
 */
function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}
// Alternative
function insertionSort2(array){
    for (let i = 1; i < array.length; i++) {
        const element = array[i];
        let j = i - 1;
        while(j >= 0 && array[j] > element){
            array[j+1] = array[j];
            j = j - 1;
        }
        array[j+1] = element;
    }
    return array;
}
module.exports.insertionSort = insertionSort;
module.exports.insertionSort2 = insertionSort2;