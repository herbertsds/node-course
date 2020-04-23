// Load the file system's module and writing a file
const fs = require('fs')

// fs.writeFileSync('notes', 'My name is Herbert.')


//First Challenge: Append a message to notes
fs.appendFileSync('notes', '\n I have 28 years old. J\'ai dix-sept ans.')
