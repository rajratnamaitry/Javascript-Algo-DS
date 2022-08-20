/**
 * "isPalindromeWrite a recursive function called isPalindrome which returns true if the string passed to it
 *  is a palindrome (reads the same forward and backward). Otherwise it returns false. 
 * isPalindrome('awesome') // false// 
 * isPalindrome('foobar') // false// 
 * isPalindrome('tacocat') // true// 
 * isPalindrome('amanaplanacanalpanama') // true 
 * isPalindrome('amanaplanacanalpandemonium') // false
 *
 */

function isPalindrome(n){
    if(n.length===1) return true;
    if(n.length ===2 ) return (n[0] == n[1]);
    if(n[0] === n.slice(-1)) return isPalindrome(n.slice(1,-1));
    return false;
}
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
module.exports = { isPalindrome }