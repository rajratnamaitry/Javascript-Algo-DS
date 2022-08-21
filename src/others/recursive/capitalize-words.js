/**
 * "capitalizeWords Write a recursive function called capitalizeWords. Given an array of words, return a new 
 * array containing each word capitalized
 */
 function capitalizeWords (array) {
    if(array.length == 1){
      return [array[0].toUpperCase()]
    }
    const res = capitalizeWords(array.slice(0,-1))
    res.push(array.slice(array.length - 1)[0].toUpperCase())
    return res;
  }
  console.log('captial word',capitalizeWords(['raj', 'ramesh','maitry']))
  module.exports.capitalizeWords = capitalizeWords;