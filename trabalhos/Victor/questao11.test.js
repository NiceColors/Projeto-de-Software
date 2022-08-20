const revertInt = require('./questao11.js')
const { numbers } = require('./mocks/numbers.json')


test('Reverte um número inteiro', () => {

    expect(revertInt(NaN)).toBeNull();
    expect(revertInt(undefined)).toBeNull();
    expect(revertInt(null)).toBeNull();

    for (item of numbers) {
        expect(revertInt(item)).toBe(revertInt(item));
    }

})
