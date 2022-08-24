const somaNums = require('./somaDigitos')
const array = require('./MOCK_DATA.json')

test('Soma os Digitos de um numero',() => {

    array.forEach(element => {
        expect(somaNums(element.numero)).toEqual(somaNums(element.numero))
        expect(somaNums(element.numero)).toBe(somaNums(element.numero))
    });
})