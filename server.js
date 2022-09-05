//call variables for required modules 
const express = require('express');
const fs = require('fs');
const path = require('path');
const api = require('./routes/apiRoutes');
const html = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

app.listen(PORT, () => {console.log(`App Listening at http://localhost${PORT}`)});
