const removeFromArray = function(array, ...value){

    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (value.includes(array[i]) != true) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
