const words = require('./words.json');
const findword = require('./script.js')
test('Encontrar palavra na string', ()=>{
    expect(findword('boia','boia')).toBe(1)
    for( item of words ){
        expect(findword(item.texto, item.word)).toBe(findword(item.texto, item.word));
    }
}) 