const students = require('./data');
const Student = require('./models/Student.model');
const mongoose = require('mongoose');
const DB_NAME = 'students-app';

mongoose.connect(`mongodb://localhost/${DB_NAME}`)
  .then(() => {
    console.log('Connected to database only to create the first information');

    Student.insertMany(students)
      .then(students => {
        console.log(`${students.length} inserted.`)
      })
  })
  .catch(error => console.error(error))

