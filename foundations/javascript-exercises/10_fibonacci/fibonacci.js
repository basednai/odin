const fibonacci = function (indice) {
    if (indice < 0) return "OOPS"
    if (indice == 0) return 0
    let arr = Array(Number(indice)).fill(1, 0, 2).fill(0, 2)

    arr.forEach((x, index, array) => {

        if (index == 0) return x;
        if (index == 1) return x;
        arr[index] = array[index - 2] + array[index - 1]

    })
    return arr.pop()
};

// Do not edit below this line
module.exports = fibonacci;
