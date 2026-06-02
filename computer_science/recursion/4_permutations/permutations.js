const permutations = function(arr) {

    if (arr.length === 0) {
        return [[]];
    }
    if (arr.length === 1) {
        return [arr];
    }

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];

        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));

        const perms = permutations(remaining);

        for (let j = 0; j < perms.length; j++) {
            result.push([current, ...perms[j]]);
        }

    }

    return result;
};
  
// Do not edit below this line
module.exports = permutations;
