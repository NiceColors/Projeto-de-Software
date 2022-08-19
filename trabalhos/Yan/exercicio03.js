function doParametrizarStr(frase){

  for(let i = 0; i < frase.length; i++){
      if(frase.charAt(i) == " "){
        frase = frase.replace(frase.charAt(i), "-");
      }
  }
   
}

module.exports = doParametrizarStr;