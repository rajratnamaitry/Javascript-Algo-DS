/**
 *  const A = [1 ,2]
 *  const B = [3 ,4]
 *  AxB = [[1 ,2], [1 ,3], [2, 3], [2, 4]]
 */
function cartesian(array1,array2) {
    const result = []
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            result.push([array1[i],array2[j]])
        }
    }
    return result;
}

module.exports.cartesian = cartesian;