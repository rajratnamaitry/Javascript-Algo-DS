/**
 * Frequency Counter - findAllDuplicates
 * 
 * Given an array of positive integers, some elements appear twice and others appear once. 
 * Find all the elements that appear twice in this array. Note that you can return the elements in any order.
 * 
 * findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
 * findAllDuplicates([4, 3, 2, 1, 0]) // []
 * findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1

 */
function findAllDuplicates(array){
  const freq = {}
  for (const val of array) {
    freq[val] = freq[val] + 1 || 1;
  }
  const result = []
  for (const key in freq) {
    if(freq[key] > 1){
      result.push(+key)
    }
  }
  return result
}

module.exports.findAllDuplicates = findAllDuplicates