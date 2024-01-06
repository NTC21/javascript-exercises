const sumAll = function(a,b) {

    let sum = 0;
    if(b<0 || a<0){
        return ("ERROR");
    }
    else if(typeof a  != 'number'||typeof b != 'number'){
        return ("ERROR")
    }


    if(b>a){
        for(let i = a; i <=b;i++){
            sum+=i;
        }
}

    if(b<a){
    for(let i = a; i >=b;i--){
        sum+=i;
    }
}

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
