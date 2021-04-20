class APIHandler {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  getStudents() {
    return axios.get(`${this.baseURL}/students/students-json`);
  }

  deleteStudent(id) {
    return axios.delete(`${this.baseURL}/students/${id}`);
  }

}