const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: { type: String, required: true },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
}); 

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;