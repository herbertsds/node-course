const log = console.log
const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => "Your notes..."

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        log(chalk.green.inverse('New note added!'))    
    }else{
        log(chalk.red.inverse('Note title taken!'))
    }

    
}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title)


    if (notesToKeep.length === notes.length){
        log(`${chalk.red.inverse(`Note "${title}" not found!`)}`)
        return;
    }
    
    saveNotes(notesToKeep)
    log(`${chalk.green.inverse(`Note "${title}" removed!`)}`)
}



//Utils
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer.toString())
    }catch(e){
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)

    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    getNotes,
    addNote,
    removeNote
}