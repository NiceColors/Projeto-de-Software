
function numberOfVogals(text = '') {

    if (!text || typeof text != "string") return null;

    const formattedText = text.replace(/[^a-zA-Z]/g, '')
    const vogais = ['a', 'e', 'i', 'o', 'u'];

    let quantidadeVogais = formattedText.split('').filter(letra => vogais.includes(letra)).length;

    return quantidadeVogais;
}

module.exports = numberOfVogals;