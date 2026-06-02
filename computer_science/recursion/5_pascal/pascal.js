const pascal = function(n) {
  
    if (n == 1) {
        return [1];
    }

    const previousRow = pascal(n - 1);

    const newRow = [1];

    for(let i = 0; i < previousRow.length - 1; i++) {
        newRow.push(previousRow[i] + previousRow[i + 1]);
    }

    newRow.push(1);

    return newRow;


};
  
// Do not edit below this line
module.exports = pascal;
