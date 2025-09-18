const sumAll = function(min, max) {
    if (min <= 0 || max <= 0) {
        return "ERROR";
    }

    if (Number.isInteger(min) != true || Number.isInteger(max) != true) {
        return "ERROR";
    }

    if (min > max) {
        const tempt = min;
        min = max;
        max = tempt;
    }
    
    let sum = 0;
    
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
