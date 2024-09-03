const palindromes = function (string) {
    return (removePunc(string) == removePunc([...string].reverse().join('')))
};

function removePunc(str) {
    return str.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g, ''); // lowercase input and remove punctuation
}

// Do not edit below this line
module.exports = palindromes;
