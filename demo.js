function mSort(array1,array2){
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
function sort(array) {
    if(array.length == 1) return array;
    const mid = Math.floor(array.length / 2);
    let left = sort(array.slice(0,mid))
    let right = sort(array.slice(mid))
    return mSort(left,right);
}
console.log('msort',sort([10,24,76,73,1,4,2,9]))