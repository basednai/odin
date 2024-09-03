const findTheOldest = function (people) {
    const date = new Date()
    people.forEach(element => {
        if (!element.yearOfDeath) element.yearOfDeath = date.getFullYear()
        element.age = element.yearOfDeath - element.yearOfBirth
    });

    people.sort((a, b) => a.age - b.age)

    return(people.pop())
};
// Do not edit below this line
module.exports = findTheOldest;
