/**
 * Divide and Conquer - countZeroes
 * 
 * Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.
 * 
 * 
 */
 function countZeroes(arr){
    const freq= {}
    for(let val of arr){
        freq[val] = (freq[val] || 0) + 1;
    }
    return freq[0] || 0
  // add whatever parameters you deem necessary - good luck!!!
}
countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0
