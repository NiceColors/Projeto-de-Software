const numberOfVogals = require('./questao8.js');

const words = require('./mocks/words.json');

test('Calcula a quantidade de vogais de uma frase', () => {

    expect(numberOfVogals(null)).toBeFalsy();
    expect(numberOfVogals(undefined)).toBeFalsy();
    expect(numberOfVogals(223443254)).toBeFalsy();
    expect(numberOfVogals('%#$@#F')).toBeFalsy();
    expect(numberOfVogals('')).toBeFalsy();
    expect(numberOfVogals('aeiou')).toBeGreaterThan(4);

    for (item of words) {
        expect(numberOfVogals(item.word)).toEqual(item.word.split('').filter(letra => ['a', 'e', 'i', 'o', 'u'].includes(letra)).length);
    }

});