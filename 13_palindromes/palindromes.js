const palindromes = function (str) {

    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    const reversedStr = cleanedStr.split('').reverse().join('');

    return reversedStr === cleanedStr;
};

// Do not edit below this line
module.exports = palindromes;
