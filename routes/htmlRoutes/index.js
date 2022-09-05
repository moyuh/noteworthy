//name route variables
const router = require('express').Router();
const path = require('path');


//GET /notes to return the "notes.html" file
router.get('/notes', (req, res)=> {
    res.sendFile(path.join(_dirname, '../../public/notes.js'))
});

//GET * to return the "index.html" file
router.get('*',(req,res)=> {
    res.sendFile(path.join(_dirname, '../../public/index.js'))
});

module.exports = router;