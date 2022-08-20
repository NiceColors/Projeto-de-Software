function countCharacterCombo(text) {

    if (text && typeof text == "string") {
        const aux = text.split('')

        let word = ''
        let greater = ''

        for (let i = 0; i <= aux.length - 1; i++) {
            for (let j = i; j <= aux.length - 1; j++) {
                if (word.split('').includes(aux[j]) || j == aux.length - 1) word = ''
                else word += aux[j]
                if (word.length > greater.length) greater = word
            }
        }

        return greater.length
    }

    return null

}


module.exports = countCharacterCombo;