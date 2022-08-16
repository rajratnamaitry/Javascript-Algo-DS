function countUniqueValues(array){
    let count = 1
    for (let index = 0; index < array.length; index++) {
        if(array[count] != array[index]){
            count++;
            array[count] =  array[index]
        }
    }
    return count;
}
console.log('countUniqueValues',countUniqueValues([1,1,1,1,1,2,4,4]))