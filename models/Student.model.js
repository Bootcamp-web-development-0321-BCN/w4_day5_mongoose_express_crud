const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 0, max: 120, required: true },
  description: { type: String, maxlength: 1000, required: true },
  city: { type: String, required: true }
}); 

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;