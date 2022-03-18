/**
 * recursiveRangeWrite a function called recursiveRange which accepts a number and adds up all the numbers 
 * from 0 to the number passed to the function 
 * 
 */
 function recursiveRange(n){   
    if(n===0) return 0;   
    return n+recursiveRange(n-1);
 }
//SAMPLE INPUT/OUTPUT
recursiveRange(6) // 21
recursiveRange(10) // 55 
