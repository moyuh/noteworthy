//call variables for required modules 
const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const api = require('./routes/apiRoutes');
const html = require('./routes/htmlRoutes');




//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.json());
app.use('/api', api);
app.use('/', html);



app.listen(PORT, () => {console.log(`App Listening at http://localhost:${PORT}`)});
