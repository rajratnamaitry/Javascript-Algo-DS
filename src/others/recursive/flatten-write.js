/**
 * 'flattenWrite a recursive function called flatten which accepts an array of arrays and returns a new array 
 * with all values 
 *
 */
function flatten(arr){
    var newArr = [];
    for(var i=0 ; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            newArr = newArr.concat(flatten(arr[i]));
        }else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
  // add whatever parameters you deem necessary - good luck!
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
module.exports.flatten = flatten;