/**
 * Write a function that takes two arguments - str1, str2. You need to remove all instances of the reverse 
 * of str2 from str1 recursively. The returned string should not have any occurrence of the reverse of str2.
 *  
 */
 function reverseString(str) {
    if(str.length == 1) return str
    return reverseString(str.substring(1))+str[0]
}
function removeString(first,sec){
        let count = 0;
        let indexArray = []
        for (let j = 0; j < first.length && sec.length != count; j++) {
            const word = first[j];
            if(word == sec[count]){
                indexArray[count] = j 
                count++;
            } else {
                count = 0;
            }
        }
        const stringArr = []
        for (let k = 0; k < first.length; k++) {
            const element = first[k];
            if(!indexArray.includes(k)){
                stringArr.push(element)
            }
        }
        return stringArr.toString().replaceAll(',','');

}
console.log('getString',removeString('this is test string',reverseString(' tset')))
