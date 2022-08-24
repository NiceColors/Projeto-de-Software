const num = 78923464578

function somaNums(num){
    const newNums = num.toString().split('')

    let soma = 0;

    for(let i = 0; i < newNums.length; i++){
        soma += parseInt(newNums[i])
    }

    return soma;
}

module.exports=somaNums