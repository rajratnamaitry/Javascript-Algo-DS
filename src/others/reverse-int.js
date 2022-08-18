function reverseInt(num) {
    let parsedInt = parseInt(num,10);
    let digit =0, reversedInt = 0;
    while(parsedInt){
        digit = parsedInt % 10;
        reversedInt = reversedInt * 10 +digit;
        parsedInt = (parsedInt / 10) | 0
    }
    return reversedInt;
}
module.exports.reverseInt = reverseInt;
