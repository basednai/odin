const sumAll = function (start, end) {
    let addend = 0

    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR"
    if (start < 0 || end < 0 ) return "ERROR"

    if (start < end)
        while (start <= end) {
            addend += start
            start++
        }
    else {
        while (start >= end) {
            addend += start
            start--
        }
    }

    return addend
};
// Do not edit below this line
module.exports = sumAll;
