const getNotes = require('./notes.js')
const chalk = require('chalk')

const log = console.log

const msg = getNotes()

log(msg)

log(chalk.green.bold.inverse('Success!'))

// Challenge: use the chalk library in my project