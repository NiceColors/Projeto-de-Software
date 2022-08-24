const balanceaPalavra = require('./palavraBalanceada.js')
const array = require('./MOCK_DATA.json')

test('Verifica se a palavra está balanceada', () => {
    array.forEach(element => {
        expect(balanceaPalavra(element.palavra)).toEqual(balanceaPalavra(element.palavra))
        expect(balanceaPalavra(element.palavra)).toBe(balanceaPalavra(element.palavra))
    });
})

