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
module.exports = { isPowerOfTwo, isPowerOfTwo2, isPowerOfTwoBitWise }