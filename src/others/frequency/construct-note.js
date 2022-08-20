/**
 * Frequency Counter - constructNote
 * Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.
 * Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
 * Bonus Constraints:
 * If M is the length of message and N is the length of letters:
 * Time Complexity: O(M+N)
 * Space Complexity: O(N)
 * Examples:
 */
// add whatever parameters you deem necessary
function constructNote(msg,ltrs) {
    let message = freqCounter(msg)
    let letters = freqCounter(ltrs)
    for(let letter of message.keys()){
        if(!letters.get(letter)) return false;
        if(letters.get(letter) < message.get(letter)) return false;
    }

    return true;
}


function freqCounter(str){
    let map = new Map()
    for(let letter of str){
        let valCount = map.get(letter) || 0
        map.set(letter,valCount+1)
    }

    return map
}
// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true
module.exports.constructNote = constructNote;