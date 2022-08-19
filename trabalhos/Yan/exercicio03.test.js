
const doParametrizarStr = require("./exercicio03.js");
const palavras = require("./palavras.json")

test("Coloca traços no lugar dos espaços", ()=>{
    for(item of palavras){
        expect(doParametrizarStr(item)).toBe(doParametrizarStr(item))
    }

    expect(doParametrizarStr("Não sei")).toEqual(doParametrizarStr("Não-sei"));

})