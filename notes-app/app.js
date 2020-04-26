const chalk = require('chalk')
//Importing argv as separated variable to facilite
const yargs = require('yargs')
const notes = require('./notes.js')

//Making the logs more easy
const log = console.log

//Customize yargs version
yargs.version('1.1.0')


//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        log('Removing the note')
    }

})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function(){
        log('Listing all notes')
    }
})

// Create the read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        log('Reading a note')
    }
})

yargs.parse()