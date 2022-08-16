/**
 * reverseWrite a recursive function called reverse which accepts a string and returns a new string in reverse.
*/
function reverse(n){  
    // add whatever parameters you deem necessary - good luck!  
    if(n.length === 0) return n;  return reverse(n.slice(1)) + n[0];
}
reverse('awesome') // 'emosewa'
reverse('rithmschool') //