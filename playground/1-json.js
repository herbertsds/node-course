const log = console.log
const fs = require('fs')

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// // Convert object to JSON
// const bookJSON = JSON.stringify(book)
// log(bookJSON)

// // Convert JSON to object
// const parsedData = JSON.parse(bookJSON)
// log(parsedData.author)

// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

log(data.title)