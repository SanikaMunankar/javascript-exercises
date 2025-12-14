const sumAll = function(start, end) {
    let sum = 0;
    if (typeof(start) !== 'number' || typeof(end) !== 'number'){
        return "ERROR";
    }
    else if (start < 0 || end < 0){
        return "ERROR";
    }
    else if(start % 1 !== 0 || end % 1 !== 0){
        return "ERROR";
    }
    else{
        if (start>end){
            startNum = end;
            endNum = start;
        }
        else{
            startNum = start;
            endNum = end;
        }
        
        for (startNum; startNum<=endNum; startNum++){
            sum += startNum;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
