

function doTruncarStr(str, size){
    if (str==undefined || str=='undefined' || str =='' || size==undefined || size=='undefined' || size ==''){
        return str;
    }
     
    let shortText = str;
    if(str.length >= size+3){
        shortText = str.substring(0, size).concat('...');
    }
    return shortText;
}

module.exports = doTruncarStr