function mostFeq(elements){
    if(elements == []){
        return null;
    }
    let dictionary = {}
    let mostFeqEls = []
    for( const index in elements ){
        if(elements[index] in dictionary){
            dictionary[elements[index]] += 1;
        }
        else{
            dictionary[elements[index]] = 1;
        }
    }
    let q = -1;
    for (const key in dictionary){
        if(dictionary[key] > q){
            q = dictionary[key];
        }
    }
    for (const key in dictionary){
        if(dictionary[key] == q){
            mostFeqEls.push(key);
        }
    }
    if(mostFeqEls.length > 1)
        return null
    else
        return mostFeqEls[0];
}

module.exports = mostFeq;