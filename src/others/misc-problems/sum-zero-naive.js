function sumZero(array){
    for (let index = 0; index < array.length; index++) {
        for (let j = 0; j < array.length; j++) {
            if(array[index] + array[j] == 0){
                return [array[index] , array[j]]
            }            
        }
    }
}
module.exports.sumZero = sumZero;