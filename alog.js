function sort(left,right) {
    let result = [];
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length){
        if(left[i] > right[j]){
            result.push(right[j])
            j++;
        }else {
            result.push(left[i])
            i++;
        }
    }
    while(i < left.length){
        result.push(left[i])
        i++
    }
    while(j < right.length){
        result.push(right[j])
        j++
    }
    return result;
}
function mergeSort(array){
    if(array.length == 1) return array;
    const mid = Math.round(array.length / 2);
    const left = mergeSort(array.slice(0,mid))
    const right = mergeSort(array.slice(mid))
    return sort(left,right);
}
console.log('mergeSort',mergeSort([10,4,2,5,1,7,6,9]))
//console.log(sort([ 1 , 3, 6, 7,11],[4, 7, 9, 10 ,12,20])); // [4, 7, 9, 10, 12, 20]
// insertionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
// insertionSort([1, 2, 3]); // [1, 2, 3]
// insertionSort([]);