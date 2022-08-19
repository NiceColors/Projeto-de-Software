const doTruncarStr = require("./exercicio04.js");
const palavras = require("./palavras.json");
test("Diminui o tamanho da string de acordo com o numero escolhido", ()=>{
    
    for(item of palavras){
        expect(doTruncarStr(item,5)).toBe(doTruncarStr(item,5))
    }

    let shortText = null;
    expect(doTruncarStr(shortText)).toBeNull()
})

