function same(arr1, arr2){
    if(arr1.length != arr2.length){
        return false;
    }
    for (let index = 0; index < arr1.length; index++) {
        const curPos = arr2.indexOf(arr1[index] ** 2);
        if(curPos == -1) return false;
        arr2.splice(curPos,1);
    }
    return true;
}

console.log('same',same([1,2,3,2], [9,1,4,4]))

function same2(arr1, arr2){
    const frequencyCounter1 = {}    
    const frequencyCounter2 = {}    
    for (const i in arr1) {
        const index =arr1[i]**2;
        frequencyCounter1[index] = frequencyCounter1[index] ? frequencyCounter1[index] + 1: 1;
    }
    for (const i in arr2) {
        const index =arr2[i];
        frequencyCounter2[index] = frequencyCounter2[index] ? frequencyCounter2[index] + 1: 1;
    }
    for (const i of arr2) {
        if(frequencyCounter1[i] != frequencyCounter2[i]) return false;
    }
    return true
}
console.log('same',same2([1,2,3,2], [9,1,4,4]))
