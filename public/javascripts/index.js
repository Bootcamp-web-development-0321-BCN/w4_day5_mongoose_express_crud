window.onload = () => {
  const apiHandler = new APIHandler('http://localhost:3000');


  const buttons = document.querySelectorAll('.delete-student');
  const container = document.querySelector('#students-list');

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const id = e.target.children[0].innerHTML;
      apiHandler.deleteStudent(id).then(() => {
        apiHandler.getStudents()
          .then(res => {
            container.innerHTML = '';
            res.data.forEach(student => {
              container.innerHTML += `
            <h3>${student.name}</h3>
            <a href="/students/${student._id}">View details</a>
            <a href="/students/${student._id}/edit">Edit student</a>
            <button class="delete-student">Eliminar <span class="hide">${student._id}</span></button>
            <hr>
            `
            })
          })
      })
    })
  })

}