const mongoose = require('mongoose');
const Course = require('./models/Course.model');
const Review = require('./models/Review.model');
const Student = require('./models/Student.model');
const DB_NAME = 'students-app';

mongoose.connect(`mongodb://localhost/${DB_NAME}`)
  .then(() => {
    console.log('Connected to database');

    Student.find()
    // .populate('course_id')
    .populate({
      path: 'course_id',
      populate: {
        path: 'reviews',
        model: 'Review',
      }
    })
    .then(students => {
      
      students.forEach(student => {

        console.log(student.course_id.reviews);
      })
    })
    .catch( error => console.error(error))

  })
  .catch(error => console.error(error))