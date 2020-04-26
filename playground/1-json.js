const log = console.log

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

// Convert object to JSON
const bookJSON = JSON.stringify(book)
log(bookJSON)

// Convert JSON to object
const parsedData = JSON.parse(bookJSON)
log(parsedData.author)
