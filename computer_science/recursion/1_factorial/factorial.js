const factorial = function(n) {
    if (n <= -1) {
        return undefined;
    }

    if (typeof n === "number" && Number.isFinite(n) && !Number.isInteger(n)) {
        return undefined;
    }

    if (Array.isArray(n)) {
        return undefined;
    }

    if (typeof n == "string") {
        return undefined;
    }
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

// Do not edit below this line
module.exports = factorial;