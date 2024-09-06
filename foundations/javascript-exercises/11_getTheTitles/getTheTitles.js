const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]

/* const getTheTitles = function (books) {
    let titles = []
    books.forEach(book => {
        titles.push(book.title)
    });
    return titles
}; */

const getTheTitles = function (books) {
    return books.map((book) => book.title)
};




// Do not edit below this line
module.exports = getTheTitles;
