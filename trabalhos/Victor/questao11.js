function revertInt(number) {

    if (Number.isInteger(number)) {

        const revertNumber = parseInt(number).toString().split('').reverse().join('');
        return parseInt(revertNumber);
    }

    return null

}

module.exports = revertInt;