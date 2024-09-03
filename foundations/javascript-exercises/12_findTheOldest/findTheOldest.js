const people = [
    {
        name: "Carly",
        yearOfBirth: 2018,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]
/* const findTheOldest = function (people) {
    const date = new Date()
    people.forEach(element => {
        if (!element.yearOfDeath) element.yearOfDeath = date.getFullYear()
        element.age = element.yearOfDeath - element.yearOfBirth
    });

    people.sort((a, b) => a.age - b.age)

    return(people.pop())
}; */

const getAge = (person) => {
    if (!person.yearOfDeath) {
        const date = new Date()
        person.yearOfDeath = date.getFullYear()
    }
    return person.yearOfDeath - person.yearOfBirth
}

const findTheOldest = function (people) {

    return people.reduce((oldest, current) => {
        let oldestAge = getAge(oldest);
        let currentAge = getAge(current)

        return oldestAge > currentAge ? oldest : current
    })
};

console.log(findTheOldest(people));

console.log(people);


// Do not edit below this line
module.exports = findTheOldest;
