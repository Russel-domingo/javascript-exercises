const totalIntegers = function(obj) {
    
    

    if (typeof obj !== "object" || obj === null) {
        return undefined;
    }

    const keys = Object.keys(obj);
    let count = 0;

    for (let i = 0; i < keys.length; i++) {
        const value = obj[keys[i]];
        if(Number.isInteger(value) ) {
            count++;
        } else if (typeof value === "object" && value !== null){
            count += totalIntegers(value);
        }
    }

    return count;


};
  
// Do not edit below this line
module.exports = totalIntegers;
