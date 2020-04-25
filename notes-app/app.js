const getNotes = require('./notes.js')
const chalk = require('chalk')

const log = console.log

const msg = getNotes()

log(msg)

// Challenge: use the chalk library in my project

log(chalk.blue.bold.inverse('Success!'))

log(process.argv[2])