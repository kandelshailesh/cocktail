const express = require('express');
const { getCockTails, addCockTail } = require('../controllers/cocktail');

const app = express();

// To fetch all the cocktail from the db
app.get('/cocktail', getCockTails);

//To add cocktail to DB
app.post('/cocktail', addCockTail);

module.exports = app;
