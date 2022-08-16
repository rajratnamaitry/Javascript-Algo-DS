/**
 * BigO O(log n)
 * @param {*} n 
 * @returns 
 */
function isPowerOfTwo(n) {
    if(n < 3)return true;
    const half = n/2;
    if(half%2== 0){
        return isPowerOfTwo(half);
    }else{
        return false;
    }
}
function isPowerOfTwo2(n){
    if(n < 1) return false;
    while(n > 1){
        if(n%2!=0){
            return false; 
        }
        n = n / 2
    }
    return true;
}
/**
 *  1 -> 1
 *  2 -> 10
 *  3 -> 100
 *  4 -> 1000
 *  & with preious no. will get 0
 * @param {*} n 
 * @returns 
 */
function isPowerOfTwoBitWise(n) {
    if(n < 1) return false;
    return (n & (n - 1)) ==0
    
}
console.log('isPowerOfTwo 1',isPowerOfTwo(1)) // true
console.log('isPowerOfTwo 2',isPowerOfTwo(2)) // true
console.log('isPowerOfTwo 5',isPowerOfTwo(5)) // false

console.log('isPowerOfTwo2 1',isPowerOfTwo2(1)) // true
console.log('isPowerOfTwo2 2',isPowerOfTwo2(2)) // true
console.log('isPowerOfTwo2 5',isPowerOfTwo2(5)) // false

console.log('isPowerOfTwoBitWise 1',isPowerOfTwoBitWise(1)) // true
console.log('isPowerOfTwoBitWise 2',isPowerOfTwoBitWise(2)) // true
console.log('isPowerOfTwoBitWise 5',isPowerOfTwoBitWise(5)) // false