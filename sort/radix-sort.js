/**
 * 
 * Radix Sort
 * 
 * Finally, you're ready to implement Radix Sort! Write a function called radixSort  which accepts an array of numbers and sorts them in ascending order.
 * 
 * You'll need to make use of the helper functions from the previous exercises here. Good luck!
 * 

 */
/**
 * Radix Sort Helper - getDigit
 * 
 * Implement a function called getDigit  which accepts a positive integer and a position, and returns the digit in that number at the given position. The position reads from right to left, so the 0th position corresponds to the rightmost digit.
 * 
 * @param {*} num 
 * @param {*} i 
 * @returns 
 */
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// Examples

// getDigit(12345, 0); // 5
// getDigit(12345, 1); // 4
// getDigit(12345, 2); // 3
// getDigit(12345, 3); // 2
// getDigit(12345, 4); // 1
// getDigit(12345, 5); // 0

// getDigit(8987, 0); // 7
// getDigit(8987, 1); // 8
// getDigit(8987, 2); // 9
// getDigit(8987, 3); // 8
// getDigit(8987, 4); // 0

/**
 * Radix Sort Helper - digitCount
 * 
 * Implement a function called digitCount  which accepts a positive integer and returns the number of digits that the integer has.
 * 

 * @param {*} num 
 * @returns 
 */
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// Examples

// digitCount(1); // 1
// digitCount(9); // 1
// digitCount(25); // 2
// digitCount(314); // 3
// digitCount(1234); // 4
// digitCount(77777); // 5
/**
 * Radix Sort Helper - mostDigits
 * 
 * Implement a function called mostDigits  which accepts an array of integers and returns a count of the number of digits for the number in the array with the most digits.
 * 
 * It may help to use your digitCount  code from the previous exercise in this function.
 * 

 * @param {*} nums 
 * @returns 
 */
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
// mostDigits([23,567,89,12234324,90])
// Examples

// mostDigits([1, 9, 10, 100, 99]); // 3
// mostDigits([100, 1010, 1, 500]); // 4
// mostDigits([0, 100000, 400, 12, 8]); // 6
// mostDigits([]); // 0

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([23,345,5467,12,2345,9852])
// Examples

radixSort([8, 6, 1, 12]); // [1, 6, 8, 12]
radixSort([10, 100, 1, 1000, 10000000]); // [1, 10, 100, 1000, 10000000]
radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]); 
// [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]







