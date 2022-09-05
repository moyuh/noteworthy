//name route variables
const router = require('express').Router();

const {
    notes
} = require('../../db/db');

const {
    newNote,
    deleteNote,
} = require('../../helpers/notesFS');

//GET POST and DELETE 'notes'
router.get('/notes', (req,res)=>{
    let storedNotes = notes;
    res.json(storedNotes)
});

router.post('/notes', (req, res)=>{
    req.body.id = notes.length.toString();
    let postIt = newNote(req.body, notes);

    res.json(postIt)
});

router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes)
});


module.exports = router;