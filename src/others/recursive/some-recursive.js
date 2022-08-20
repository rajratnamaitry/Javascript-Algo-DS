/**
 * someRecursiveWrite a recursive function called someRecursive which accepts an array and a callback. 
 * The function returns true if a single value in the array returns true when passed to the callback. 
 * Otherwise it returns false.index.js1234567
 * 
 */
 function someRecursive(arr,calFn){
    if(arr.length === 0) return false;
    if(calFn(arr[0])) return true;
    return someRecursive(arr.slice(1),calFn)
    
  // add whatever parameters you deem necessary - good luck!
}
// console.log('someRecursive',someRecursive([12,43,25,20], (a)=> a > 100 ))
module.exports.someRecursive = someRecursive;