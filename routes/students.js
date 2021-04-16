const express = require('express');
const Student = require('../models/Student.model');
const router = express.Router();

// No es necesario poner /students delante porque ya tiene el prefijo en app.js
router.get('/', (req, res) => {
  // this CONTROLLER is...
  Student.find({}) // ... asking for data from the Student MODEL and ...
    .then(students => {
      res.render('students-list', { students }); // ... sending a VIEW to the client
    })
    .catch(error => console.error(error))
})

router.get('/create', (req, res) => {
  res.render('student-create');
})


// Query params - Parámetros de búsqueda
router.get('/search', (req, res) => {
  console.log(req.query);
  res.render('students-list')
})

router.get('/:id/edit', (req, res) => {
  const { id } = req.params;
  Student.findOne({ _id: id })
  .then(student => {
    res.render('student-edit', { student });
  })
  .catch(error => console.error(error))
})

router.post('/:id/edit', (req, res) => {
  const { name, age, description, city } = req.body;
  const { id } = req.params;
  // { name:name, age:age, description:description, city:city }
  Student.findOneAndUpdate({ _id: id }, { name, age, description, city })
  .then(() => {
    res.redirect(`/students/${id}`);
  })
  .catch(error => console.error(error))
})

router.post('/:id/delete', (req, res) => {
  const { id } = req.params;
  Student.findOneAndDelete({ _id: id })
  .then(() => {
    res.redirect(`/students`);
  })
  .catch(error => console.error(error))
})

// Route params
router.get('/:id', (req, res) => {
  // const id = req.params.id;
  const { id } = req.params;
  // this CONTROLLER is...
  Student.findOne({ _id: id }) // ... asking for data from the Student MODEL and ...
    .then(student => {
      res.render('student-details', { student }); // ... sending a VIEW to the client
    })
    .catch(error => console.error(error))
})

// req.body
router.post('/create', (req, res) => {
  // const name = req.body.name
  // const age = req.body.age
  //...
  const { name, age, description, city } = req.body;
  Student.create({ name, age, description, city })
  .then(() => {
    res.redirect("/students")
  })
  .catch(error => {
    res.render('students-create', { error })
  })
})

module.exports = router;