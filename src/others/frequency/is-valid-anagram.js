function isValidAnagram(first, second) {
    if(first.length != second.length){
        return false;
    }
    const frequencyStr1 =  {}
    const frequencyStr2 =  {}
    for (let i = 0;i < first.length ; i++) {
        frequencyStr1[first[i]] = (frequencyStr1[first[i]] ? frequencyStr1[first[i]]+1 : 1) 
    }
    for (let i = 0;i < second.length ; i++) {
        frequencyStr2[second[i]] = (frequencyStr2[second[i]] ? frequencyStr2[second[i]]+1 : 1) 
    }
    for (const iterator in frequencyStr2) {
        if(frequencyStr1[iterator] != frequencyStr2[iterator]) return false;
    }
    return true;
}
module.exports.isValidAnagram = isValidAnagram;