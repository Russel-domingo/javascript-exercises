const contains = function(obj, value) {

    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const current = obj[key];

        if (Number.isNaN(current) && Number.isNaN(value)) {
            return true;
        }

        if (current === value) {
            return true;
        }

        if (typeof current === "object" && current !== null) {
            if (contains(current, value)) {
                return true;
            }
        }
    }

    return false;
};
  
// Do not edit below this line
module.exports = contains;
