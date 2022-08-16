/**
 *  Big-O  =  O(n)
 * @param {*} n 
 * @returns 
 */
function isPrime(n) {
    if( n < 2) return false;
    for (let i = 0; i < n; i++) {
        if(n%2==0){
            return false;
        }
    } 
    return true;
}
// Optimize
function isPrimeOpt(n) {
    if( n < 2) return false;
    for (let i = 0; i <=Math.sqrt(n); i++) {
        if(n%2==0){
            return false;
        }
    } 
    return true;
}
console.log('isPrime 1' ,isPrime(1)) // false
console.log('isPrime 4' ,isPrime(4)) // false
console.log('isPrime 5' ,isPrime(5)) // true