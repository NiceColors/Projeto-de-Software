
function mergeArraysAndSet(firstArray, secondArray) {

    if (!Array.isArray(firstArray) || !Array.isArray(secondArray)) return null;
    let uniqueArray = Array.from(new Set(firstArray.concat(secondArray)))
    return uniqueArray;

}

module.exports = mergeArraysAndSet;