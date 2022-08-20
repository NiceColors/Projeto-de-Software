function dash(num){
    if(num){
    let numstr = num.toString();
    let newnumber = "";
    for(i=0; i<numstr.length; i++){
        if(i >= 1){
            if((parseInt(numstr[i]) %2  == 0) && (parseInt(numstr[i-1]) %2  == 0)){
                newnumber = newnumber + "-" + numstr[i];
            }
            else{
                newnumber = newnumber + numstr[i];
            }
        }
        else{
            newnumber = numstr[i];
        }
    }
    return newnumber;
    }
    return null;
}

module.exports = dash;