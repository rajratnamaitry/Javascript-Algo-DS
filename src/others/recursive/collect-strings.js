/**
 * collectStrings Write a function called collectStrings which accepts an object and returns an array of all 
 * the values in the object that have a typeof string
 * 
 */
 function collectStrings(obj) {
    var stringsArr = [];
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                 gatherStrings(o[key]);
            }
        }
    }
    gatherStrings(obj);
    return stringsArr;
}
function collectStringsPureRecursive(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStringsPureRecursive(obj[key]));
        }
    }
 
    return stringsArr;
}
// console.log('collectStrings',collectStrings({ name: 'raj',data:{ call:'22' , jam: 'jam' } , phone : 'phone'}))
module.exports = { collectStrings , collectStringsPureRecursive };