/**
 * write function called sameFrequency. given two positive integers. find out if 
 * the two numbers have the same frequency of digits
 */
function sameFrequency(num1,num2){
    const str1 = num1.toString().split('');
    const str2 = num2.toString().split('');
    const freq1 = {};
    const freq2 = {};
    if(str1.length !== str2.length) return false;
    for (const key of str1) {
        freq1[key] = (+freq1[key] || 0) + 1;
    }
    for (const key of str2) {
        freq2[key] = (+freq2[key] || 0) + 1;
    }
    for (const iterator in freq1) {
        if(!(iterator in freq2)){
            return false;
        }
        if(freq1[iterator] != freq2[iterator]){
            return false
        }
    }
    return true;    
}
// console.log('sameFrequency(182,281)', sameFrequency(182,281)) // true
// console.log('sameFrequency(32,13)', sameFrequency(32,13)) // false
module.exports.sameFrequency = sameFrequency