const log = console.log
const fs = require('fs')

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

//Utils
const loadNotes = function(){
    try{
        return JSON.parse((fs.readFileSync('notes.json')).toString())
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
    addNote
}