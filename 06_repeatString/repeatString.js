const repeatString = function(word, times) {
    if (times < 0) {
        return 'ERROR';
    }
    let words = "";

    for (let i = 0; i < times; i++) {
        words += word;
    }
    return words;
};

// Do not edit below this line
module.exports = repeatString;
