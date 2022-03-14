/**
 * Frequency Counter / Multiple Pointers - areThereDuplicates
 * Implement a function called, areThereDuplicates  which accepts a variable number of arguments, and
 * checks whether there are any duplicates among the arguments passed in.  
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 */
    // Frequency Counter  
    function areThereDuplicates() {
        let collection = {}
        for(let val in arguments){
            collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
        }
        for(let key in collection){
            if(collection[key] > 1) return true
        }
        return false;
    }
    // one liner
    function areThereDuplicates() {
        return new Set(arguments).size !== arguments.length;
    }  
    // Multiple Pointers
    function areThereDuplicates(...args) {
     // do
    }
    areThereDuplicates(1, 2, 3) // false
    areThereDuplicates(1, 2, 2) // true