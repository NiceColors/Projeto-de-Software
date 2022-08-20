const countCharacterCombo = require('./questao12.js')
const strings = require('./mocks/strings.json')

test("Pega o maior caracter sem repetições", () => {


    expect(countCharacterCombo(null)).toBeNull();
    expect(countCharacterCombo(undefined)).toBeNull();
    expect(countCharacterCombo('')).toBeNull();
    expect(countCharacterCombo('drxeiavtyjvimzhpcncrhblg p mlfrrrkaxmmdwmrg')).toBe(11);
    expect(countCharacterCombo('drxeiavtyjvimzhpcncrhblg p mlfrrrkaxmmdwmrg'.split('').reverse().join(''))).toBe(11);

    for (string of strings) {
        expect(countCharacterCombo(string.text)).toEqual(countCharacterCombo(string.text));
    }

})