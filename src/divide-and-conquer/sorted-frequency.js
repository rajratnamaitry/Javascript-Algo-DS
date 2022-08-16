/**
 * Divide and Conquer - sortedFrequency
 * 
 * Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
 * 
 */
function sortedFrequency(arr, index) {
    const freq = {}
    for (let val of arr) {
        freq[val] = (freq[val] || 0) + 1;
    }
    return freq[index] || -1
    // add whatever parameters you deem necessary - good luck!
}
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2) // 4 
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3) // 1 
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1) // 2 
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4) // -1