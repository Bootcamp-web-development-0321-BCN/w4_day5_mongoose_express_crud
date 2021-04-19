const students = require('./data');
const Student = require('./models/Student.model');
const mongoose = require('mongoose');
const Course = require('./models/Course.model');
const Review = require('./models/Review.model');
const DB_NAME = 'students-app';

mongoose.connect(`mongodb://localhost/${DB_NAME}`)
  .then(() => {
    console.log('Connected to database only to create the first information');

    Review.insertMany([
      { text: "Amazing bootcamp" },
      { text: "The best experience" }
    ])
      .then(reviews => {
        Course.create({ name: 'Web Development Bootcamp', reviews: reviews.map(review => review._id) })
      })
    
    Student.updateMany({}, { $set: { course_id: '607d23645ee63c067d45ba62'}})
    .then(() => console.log('Ready'))
    .catch(error => console.error(error))

  })
  .catch(error => console.error(error))

