const mergeArraysAndSet = require('./questao7.js');
const arrays = require('./mocks/arrays.json');


test('Concatena dois arrays e retira valores repetidos', () => {

    expect(mergeArraysAndSet([], [])).toEqual([]);
    expect(mergeArraysAndSet(undefined, null)).toBeDefined();
    expect(mergeArraysAndSet(false, false)).toBeDefined();


    for (let i = 0; i < Object.keys(arrays).length - 1; i++) {
        if (i < Object.keys(arrays).length - 2) {

            const arrayContain = mergeArraysAndSet(arrays[i], arrays[i + 1])
                .every(element => arrays[i].includes(element) || arrays[i + 1]
                    .includes(element));

            expect(mergeArraysAndSet(arrays[i], arrays[i + 1])).toEqual(Array.from(new Set(arrays[i].concat(arrays[i + 1])))); //verifica se é igual
            expect(arrayContain).toBe(true); //verifica se todos os elementos do array concatenado estão no array1 ou array2
        }
    }


});