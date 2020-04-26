const log = console.log
const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => "Your notes..."

const addNote = function(title, body){
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        log('New note added!')    
    }else{
        log('Note title taken!')
    }

    
}

const removeNote = function(title){
    const notes = loadNotes()

    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })


    if (notesToKeep.length === notes.length){
        log(`${chalk.red.inverse(`Note "${title}" not found!`)}`)
        return;
    }
    
    saveNotes(notesToKeep)
    log(`${chalk.green.inverse(`Note "${title}" removed!`)}`)
}



//Utils
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer.toString())
    }catch(e){
        return []
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)

    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    getNotes,
    addNote,
    removeNote
}