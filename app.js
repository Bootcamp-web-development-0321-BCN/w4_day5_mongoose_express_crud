require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
const app = express();
const DB_NAME = 'students-app';
const bodyParser = require('body-parser');

// .env variables
// process.env.SPOTIFY_KEY

mongoose.connect(`mongodb://localhost/${DB_NAME}`)
.then(() => {
  console.log('Connected to database');
})

// Middleware & setup config
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('public'));

// app.use(express.json())
// app.use(express.urlencoded({ exteded: true }))
app.use(bodyParser.urlencoded({
  extended: true
}))

const index = require('./routes/index');
const students = require('./routes/students');
app.use('/', index);

// This is a prefix that we put to the students router
app.use('/students', students);

app.listen(3000, () => console.log(`Listening on port 3000. http://localhost:3000`));