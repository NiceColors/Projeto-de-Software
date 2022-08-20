function findword(text, word) {
    const result = text.split(" ")
    return result.filter(item => item === word).length
}

module.exports = findword;