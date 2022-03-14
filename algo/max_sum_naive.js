/** 
 * write function called maxSubArraySum which  accepts an array of integers 
 * and a number called n. the function should calculate the maximum sum of n 
 * consecutive elements in the array.
 * */ 
function maxSubArraySum(array,num){
    if(num > array.length) return false;
    let max = -Infinity;
    for (let index = 0; index < array.length - num + 1; index++) {
        let temp = 0;
        for (let jIndex = 0; jIndex < num; jIndex++) {
            temp += array[ index + jIndex];            
        }
        if(temp > max){
            max = temp;
        }
    }
    return max;

}
console.log(maxSubArraySum([1,2,5,2,8,1,5],2)) // 10
console.log(maxSubArraySum([1,2,5,2,8,1,5],4)) // 17