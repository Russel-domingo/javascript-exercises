function getAge(birth, death) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, currentPeople) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPeople.yearOfBirth, currentPeople.yearOfDeath);

        if (oldestAge < currentAge) {
            return currentPeople;
        }

        return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
