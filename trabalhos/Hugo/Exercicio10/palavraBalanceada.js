function balanceaPalavra(){   
let word = 'abcbca';

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase().split('');

  let reverseWord = word.split('').reverse().join('');

  let sumLeft = 0;

  let sumRight = 0;

  if (word.length % 2 !== 0) {
    for (let i = 0; i < word.length / 2 - 1; i++) {
      sumLeft += alphabet.indexOf(word[i].toLowerCase()) + 1;
    }
    for (let i = 0; i < word.length / 2 - 1; i++) {
      sumRight += alphabet.indexOf(reverseWord[i].toLowerCase()) + 1;
    }
  } else {
    for (let i = 0; i < word.length / 2; i++) {
      sumLeft += alphabet.indexOf(word[i].toLowerCase()) + 1;
    }
    for (let i = 0; i < word.length / 2; i++) {
      sumRight += alphabet.indexOf(reverseWord[i].toLowerCase()) + 1;
    }
  }
  return (sumLeft == sumRight)?"Balanceado":"Não Balanceado"
}

module.exports=balanceaPalavra