const fs = require('fs');
const path = require('path');

function newNote(body, noteArr) {
    const note = body;
    noteArr.push(note);
    
    fs.writeFileSync(path.join (__dirname,'../db/db.json'), JSON.stringify({
        notes: noteArr
    }, null, 2) 
    )
    return note;
};

function deleteNote(noteArr, id){
    let deleteId = parseInt(id);
    noteArr.splice(deleteId,1);

    for (let i = deleteId; i < noteArr.length; i++){
        noteArr[i].id = i.toString();       
    }

    fs.writeFileSync(path.join(__dirname,'../db/db.json'), JSON.stringify({
        notes: noteArr
    }, null, 2)

    )
};

module.exports = {
    newNote,
    deleteNote
};