const removeFromArray = function ([...array], ...values) {

    for (let value of values) {
        index = array.indexOf(value)

        if (index == 0)
            array.shift()
        else
            while (array.indexOf(value) != -1) // while value is still present
                array.splice(index, 1)

    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
